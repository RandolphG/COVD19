import React from 'react';
import { ErrorBoundary } from '../../../ErrorBoundary';
import s from './style';
import Countries from '../../Countries';
import { useDispatch, useSelector } from 'react-redux';
import { goNEXT, goPREV } from '../../../../store/actions';
import { getCountries, getNumberOfCountries, getSlideIndex } from '../../../../store';

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
      onClick={() => {
        const prevIndex = currentIndex === 0 ? numberOfCountries - 1 : currentIndex - 1;
        dispatch(goPREV(prevIndex));
      }}
    >
      ‹
    </button>
  );

  return (
    <>
      <ErrorBoundary>
        <s.Content>
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
                  <Countries
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
        </s.Content>
      </ErrorBoundary>
    </>
  );
};

export default Covid19;
