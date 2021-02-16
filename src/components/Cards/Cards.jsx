import React from 'react';
import { useTilt } from './useTilt';
import { useDispatch, useSelector } from 'react-redux';
import { getSlideIndex, isModalShown } from '../../store';
import { toggleModal } from '../../store';
import { ErrorBoundary } from '../ErrorBoundary';
import Info from './Info';
import './style.css';
/**
 * return days for carousel
 * @param offset
 * @returns {JSX.Element}
 * @constructor
 */
const Cards = ({ currentIndex, country, confirmed, deaths, recovered }) => {
  const slideIndex = useSelector(getSlideIndex);
  let offset = slideIndex - currentIndex;
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  const dispatch = useDispatch();
  const isModalHidden = useSelector(isModalShown);

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
        <div className=" slideContent ">
          <div className="slideContentInner">
            <Info
              toggle={toggle}
              currentIndex={currentIndex}
              country={country}
              deaths={deaths}
              confirmed={confirmed}
              recovered={recovered}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Cards;
