import React from 'react';
import { ErrorBoundary } from '../../../ErrorBoundary';
import { useDispatch, useSelector } from 'react-redux';
import { goNEXT, goPREV } from '../../../../store';
import { getCountries, getNumberOfCountries, getSlideIndex } from '../../../../store';
import style from './style';
import { Cards } from '../../Cards';

const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const transition = { duration: 0.5, ease: 'easeInOut' };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition },
};

const postPreviewVariants = {
  initial: { x: '100%', opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: '-100%', opacity: 0, transition },
};
/**
 * covid data app
 * @returns {JSX.Element}
 * @constructor
 */
const Covid19 = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(getSlideIndex);
  const countriesSelector = useSelector(getCountries);
  const numberOfCountries = useSelector(getNumberOfCountries);
  /**
   * return next day
   * @returns {JSX.Element}
   * @constructor
   */
  const NextBtn = () => (
    <button
      style={{ zIndex: 700 }}
      onClick={() => {
        const nextIndex = (currentIndex + 1) % numberOfCountries;
        dispatch(goNEXT(nextIndex));
      }}
    >
      ›
    </button>
  );

  /**
   * return previous day
   * @returns {JSX.Element}
   * @constructor
   */
  const PrevBtn = () => (
    <button
      style={{ zIndex: 700 }}
      onClick={() => {
        const prevIndex = currentIndex === 0 ? numberOfCountries - 1 : currentIndex - 1;
        dispatch(goPREV(prevIndex));
      }}
    >
      ‹
    </button>
  );

  return (
    <ErrorBoundary>
      <style.Content {...AnimationSettings}>
        <div className="slides">
          <PrevBtn />
          {countriesSelector.map(
            (
              {
                Country,
                NewConfirmed,
                TotalRecovered,
                TotalConfirmed,
                TotalDeaths,
                NewDeaths,
                NewRecovered,
              },
              index
            ) => {
              return (
                <Cards
                  key={index}
                  currentIndex={index}
                  country={Country}
                  recovered={TotalRecovered}
                  deaths={TotalDeaths}
                  confirmed={TotalConfirmed}
                />
              );
            }
          )}
          <NextBtn />
        </div>
      </style.Content>
    </ErrorBoundary>
  );
};

export default Covid19;
