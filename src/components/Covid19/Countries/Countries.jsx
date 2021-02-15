import React from 'react';
import { useTilt } from './useTilt';
import { useDispatch, useSelector } from 'react-redux';
import { getSlideIndex, isModalShown } from '../../../store';
import { toggleModal } from '../../../store/actions';
import { ErrorBoundary } from '../../ErrorBoundary';
import './style.css';

import Info from './Info';
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

  const toggle = () => {
    console.log(`CLICKED`);
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
              deaths={totaldeaths}
              confirmed={total}
              recovered={totalrecovered}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Countries;
