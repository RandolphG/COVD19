import React from 'react';
import { ErrorBoundary } from '../../../ErrorBoundary';
import s from '../../style';
import Countries from '../../Countries';
import { useDispatch, useSelector } from 'react-redux';
import { goNEXT, goPREV } from '../../../../store/actions';
import {
  getCountries,
  getCurrentSlideIndex,
  getNumberOfCountries,
  getSlideIndex,
} from '../../../../store';

/**
 * covid data app
 * @returns {JSX.Element}
 * @constructor
 */
const Covid19 = () => {
  const dispatch = useDispatch();

  /* selectors */
  // TODO change seconds to 1 minute
  const slideIndex = useSelector(getSlideIndex);
  // const slideIndex = useSelector(getCurrentSlideIndex);
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
        const nextIndex = (slideIndex + 1) % numberOfCountries;
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
        const prevIndex = slideIndex === 0 ? numberOfCountries - 1 : slideIndex - 1;
        dispatch(goPREV(prevIndex));
      }}
    >
      ‹
    </button>
  );
  return (
    <ErrorBoundary>
      <s.Content>
        {
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
                    totalrecovered={TotalRecovered}
                    newrecovered={NewRecovered}
                    totaldeaths={TotalDeaths}
                    deaths={NewDeaths}
                    country={Country}
                    total={TotalConfirmed}
                    newconfirmed={NewConfirmed}
                    key={index}
                    currentIndex={index}
                  />
                );
              }
            )}
            <NextBtn />
          </div>
        }
      </s.Content>
    </ErrorBoundary>
  );
};

export default Covid19;
