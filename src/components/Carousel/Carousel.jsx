import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import { useSelector } from 'react-redux';
import { getCountries } from '../../store';
import style from './style';
import { Cards } from './Cards';
import { NextBtn, PrevBtn } from './NavigationButtons';

const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

/**
 * covid data app
 * @returns {JSX.Element}
 * @constructor
 */
const Carousel = () => {
  const countriesSelector = useSelector(getCountries);

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

export default Carousel;
