import React from 'react';
import { useTilt } from './useTilt';
import './style.css';
import s from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentSlideIndex, getFlags, getSlideIndex, isModalShown } from '../../../store';
import { toggleModal } from '../../../store/actions';
const image =
  'https://singularityhub.com/wp-content/uploads/2020/06/SpaceX-offshore-launchpads-Starship.jpg';

/**
 * return days for carousel
 * @param offset
 * @param launches
 * @param weekday
 * @returns {JSX.Element}
 * @constructor
 */
const Countries = ({ currentIndex, country, total, totaldeaths, totalrecovered }) => {
  // const numberOfCountries = useSelector(getNumberOfCountries);
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
    <div
      ref={ref}
      className={'slide'}
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div className="slideBackground" />
      <div
        className=" slideContent "
        style={{
          background: 'linear-gradient(0deg, black, #444444)',
        }}
      >
        <div
          className="slideContentInner"
          style={{
            padding: '50px',
            background: `url(${flags[index].flag}) no-repeat center `,
            backgroundSize: 'cover',
            borderRadius: '25px',
          }}
        >
          <s.DateInfo onClick={toggle}>
            <div style={{ height: '50%', marginBottom: '16px', fontSize: '25px' }}>{country}</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                bottom: '-10%',
              }}
            >
              <s.TextInfo>Confirmed {total}</s.TextInfo>
              <s.TextInfo>Deaths {totaldeaths}</s.TextInfo>
              <s.TextInfo>Recovered {totalrecovered}</s.TextInfo>
            </div>{' '}
          </s.DateInfo>
        </div>
      </div>
    </div>
  );
};

export default Countries;
