import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import { Page01, Page02 } from './sections';
import { useDispatch } from 'react-redux';
import { checkCachedData, initializeData } from '../../../store';
import './style.css';

const Landing = () => {
  const dispatch = useDispatch();
  let parallax = useRef(null);

  useEffect(() => {
    dispatch(checkCachedData());
    // dispatch(initializeData());
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
