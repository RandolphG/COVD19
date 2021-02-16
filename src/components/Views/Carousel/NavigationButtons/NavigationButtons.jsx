import { getNumberOfCountries, getSlideIndex, goNEXT, goPREV } from '../../../../store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * return next day
 * @returns {JSX.Element}
 * @constructor
 */
export const NextBtn = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(getSlideIndex);
  const numberOfCountries = useSelector(getNumberOfCountries);
  return (
    <button
      style={{ zIndex: 100 }}
      onClick={() => {
        const nextIndex = (currentIndex + 1) % numberOfCountries;
        dispatch(goNEXT(nextIndex));
      }}
    >
      ›
    </button>
  );
};

/**
 * return previous day
 * @returns {JSX.Element}
 * @constructor
 */
export const PrevBtn = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(getSlideIndex);
  const numberOfCountries = useSelector(getNumberOfCountries);
  return (
    <button
      style={{ zIndex: 100 }}
      onClick={() => {
        const prevIndex = currentIndex === 0 ? numberOfCountries - 1 : currentIndex - 1;
        dispatch(goPREV(prevIndex));
      }}
    >
      ‹
    </button>
  );
};

export default { PrevBtn, NextBtn };
