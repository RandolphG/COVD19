import React from 'react';
import { useTilt } from './useTilt';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentSlideIndex, getFlags, getSlideIndex, isModalShown } from '../../../store';
import { toggleModal } from '../../../store/actions';
import { ErrorBoundary } from '../../ErrorBoundary';
import s from './style';
/**
 * return days for carousel
 * @param offset
 * @returns {JSX.Element}
 * @constructor
 */
const Countries = ({ currentIndex, country, total, totaldeaths, totalrecovered }) => {
  const slideIndex = useSelector(getSlideIndex);
  let offset = slideIndex - currentIndex;
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  const dispatch = useDispatch();
  const isModalHidden = useSelector(isModalShown);
  const index = useSelector(getCurrentSlideIndex);
  const flags = useSelector(getFlags);

  const toggle = () => {
    dispatch(toggleModal(!isModalHidden));
  };

  return (
    <ErrorBoundary>
      <div
        ref={ref}
        className={'slide'}
        data-active={active}
        style={{
          '--offset': offset,
          '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}
      >
        <div
          className=" slideContent "
          style={{
            background: 'linear-gradient(0deg, black, #444444)',
          }}
        >
          <div className="slideContentInner">
            <s.DateInfo onClick={toggle}>
              <s.Flag src={flags[index - 1].flag} alt={`flag${index}`} />
              <div style={{ marginBottom: '16px', fontSize: '20px' }}>{country}</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  bottom: '10%',
                }}
              >
                <s.TextInfo>Confirmed {total}</s.TextInfo>
                <s.TextInfo>Deaths {totaldeaths}</s.TextInfo>
                <s.TextInfo>Recovered {totalrecovered}</s.TextInfo>
              </div>
            </s.DateInfo>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Countries;
