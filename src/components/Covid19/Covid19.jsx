import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import s from './style';
import { useDispatch } from 'react-redux';
import { initCountries, initFlags, initNumberOfCountries } from '../../store';
import { getFlags, fetchApi } from '../../services/getCountrySummary';
import DisplayMode from './DisplayMode';
import { BackgroundAnimation } from './Background';
import Modal from './Modal/Modal';
import Loader from './Loader';

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
  const cachedNumberOfCountries = localStorage.getItem('number-of-countries');
  const cachedFlags = localStorage.getItem('flags');

  /* local state */
  const [flags, setFlags] = useState(cachedFlags && JSON.parse(cachedFlags));
  const [apiData, setApiData] = useState(cachedApiData && JSON.parse(cachedApiData));
  const [countriesData, setCountriesData] = useState(
    cachedCountries && JSON.parse(cachedCountries)
  );
  const [numberOfCountriesData, setNumberOfCountriesData] = useState(
    cachedNumberOfCountries && JSON.parse(cachedNumberOfCountries)
  );

  useEffect(() => {
    const apiExpiration = localStorage.getItem('api-expiration');
    const isDataExpired = Date.now() >= apiExpiration;

    if (!apiData || isDataExpired) {
      fetchApi().then(country => {
        setApiData(country);
        setCountriesData(country.Countries);
        setNumberOfCountriesData(country.Countries.length);
        dispatch(initCountries(countriesData));
        dispatch(initNumberOfCountries(numberOfCountriesData));
      });

      getFlags().then(flags => {
        setFlags(flags);
        dispatch(initFlags(flags));
      });
    }

    if (apiData) {
      dispatch(initFlags(flags));
      dispatch(initCountries(countriesData));
      dispatch(initNumberOfCountries(numberOfCountriesData));
    }
  }, []);

  return (
    <ErrorBoundary>
      <s.Container>
        <DisplayMode />
      </s.Container>
    </ErrorBoundary>
  );
};

export default Covid19;
