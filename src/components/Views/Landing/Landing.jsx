import React, { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import { Page01, Page02 } from './sections';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initializeLoading } from '../../../store';
import './style.css';

const Landing = () => {
  const dispatch = useDispatch();
  let parallax = useRef(null);
  const history = useHistory();

  //TODO use into its own useEffect (sideEffect)
  /* cachedData */
  const cachedApiData = localStorage.getItem('api-data');
  const cachedCountries = localStorage.getItem('countries');
  const cachedNumberOfCountries = localStorage.getItem('number-of-countries');
  const cachedFlags = localStorage.getItem('flags');
  const apiExpiration = localStorage.getItem('api-expiration');
  const [flags, setFlags] = useState(cachedFlags && JSON.parse(cachedFlags));
  const [apiData, setApiData] = useState(cachedApiData && JSON.parse(cachedApiData));
  const [countriesData, setCountriesData] = useState(
    cachedCountries && JSON.parse(cachedCountries)
  );
  const [numberOfCountriesData, setNumberOfCountriesData] = useState(
    cachedNumberOfCountries && JSON.parse(cachedNumberOfCountries)
  );

  const onLoad = () => {
    history.push('/CAROUSEL');
  };

  /* data fetching */
  useEffect(() => {
    dispatch(initializeLoading());
  }, []);

  /* intro animation */
  useEffect(() => {
    const timer = setTimeout(() => {
      parallax && parallax.scrollTo(1);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Parallax
        className="container"
        ref={ref => (parallax = ref)}
        pages={2}
        horizontal
        scrolling={false}
      >
        <Page01
          offset={0}
          gradient="pink"
          caption="Covid 19"
          first="electron"
          second="framer-motion"
        />
        <Page02 offset={1} caption="second stats" first="table & list" second="framer motion" />
      </Parallax>
    </>
  );
};

export default Landing;
