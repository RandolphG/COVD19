import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import { Left, Right } from './sections';
import { useDispatch } from 'react-redux';
import { checkCachedData, initializeData } from '../../store';
import { ErrorBoundary } from '../ErrorBoundary';
import './style.css';

const Cover = () => {
  const dispatch = useDispatch();
  let parallax = useRef(null);

  useEffect(() => {
    dispatch(initializeData());
    dispatch(checkCachedData());
  }, []);

  /* intro animation */
  useEffect(() => {
    const timer = setTimeout(() => {
      parallax && parallax.scrollTo(1);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <Parallax
        className="container"
        ref={ref => (parallax = ref)}
        pages={2}
        horizontal
        scrolling={false}
      >
        <Left
          offset={0}
          gradient="pink"
          caption="Covid 19"
          first="electron"
          second="framer-motion"
        />
        <Right offset={1} caption="second stats" first="table & list" second="framer motion" />
      </Parallax>
    </ErrorBoundary>
  );
};

export default Cover;
