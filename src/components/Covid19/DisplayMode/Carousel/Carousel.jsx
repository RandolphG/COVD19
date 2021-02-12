import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from '../../../ErrorBoundary';
import s from '../../style';
import Countries from '../../Countries';
import { useDispatch, useSelector } from 'react-redux';
import {
  goNEXT,
  goPREV,
  initCountries,
  initFlags,
  initGlobalData,
  initNumberOfCountries,
} from '../../../../store/actions';
import { getCountries, getSlideIndex } from '../../../../store';
import { Background } from '../../Background';
import Modal from '../../Modal/Modal';
import { getFlags, fetchApi } from '../../../../services/getCountrySummary';

/**
 * covid data app
 * @returns {JSX.Element}
 * @constructor
 */
const Covid19 = () => {
  const dispatch = useDispatch();
  /* cachedData */
  const cachedApiData = localStorage.getItem('api-data');
  const cachedCountries = localStorage.getItem('countries');
  const cachedGlobalData = localStorage.getItem('global-data');
  const cachedNumberOfCountries = localStorage.getItem('number-of-countries');
  const cachedFlags = localStorage.getItem('flags');

  /* local state */
  const [flags, setFlags] = useState(cachedFlags && JSON.parse(cachedFlags));
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(cachedApiData && JSON.parse(cachedApiData));
  const [countriesData, setCountriesData] = useState(
    cachedCountries && JSON.parse(cachedCountries)
  );
  const [globalData, setGlobalData] = useState(cachedGlobalData && JSON.parse(cachedGlobalData));
  const [numberOfCountriesData, setNumberOfCountriesData] = useState(
    cachedNumberOfCountries && JSON.parse(cachedNumberOfCountries)
  );

  /* selectors */
  // TODO change seconds to 1 minute
  const slideIndex = useSelector(getSlideIndex);
  const countriesSelector = useSelector(getCountries);

  useEffect(() => {
    const apiExpiration = localStorage.getItem('api-expiration');
    const isDataExpired = Date.now() >= apiExpiration;

    if (!apiData || isDataExpired) {
      fetchApi().then(country => {
        setApiData(country);
        setGlobalData(country.Global);
        setCountriesData(country.Countries);
        setNumberOfCountriesData(country.Countries.length);
        dispatch(initCountries(countriesData));
        dispatch(initGlobalData(globalData));
        dispatch(initNumberOfCountries(numberOfCountriesData));
      });

      getFlags().then(flags => {
        setFlags(flags);
        dispatch(initFlags(flags));
      });
    }

    if (apiData) {
      dispatch(initCountries(countriesData));
      dispatch(initGlobalData(globalData));
      dispatch(initNumberOfCountries(numberOfCountriesData));
      dispatch(initFlags(flags));
    }
  }, []);

  /**
   * return next day
   * @returns {JSX.Element}
   * @constructor
   */
  const NextBtn = () => (
    <button
      onClick={() => {
        const nextIndex = (slideIndex + 1) % numberOfCountriesData;
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
        const prevIndex = slideIndex === 0 ? numberOfCountriesData - 1 : slideIndex - 1;
        dispatch(goPREV(prevIndex));
      }}
    >
      ‹
    </button>
  );
  return (
    <ErrorBoundary>
      <s.Content>
        {isLoading && (
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
        )}
      </s.Content>
    </ErrorBoundary>
  );
};

export default Covid19;
