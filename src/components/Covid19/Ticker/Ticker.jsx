import React from 'react';
import './style.css';

/**
 * Ticker with information
 * @param newconfirmed
 * @param newdeaths
 * @param newrecovered
 * @param totalconfirmed
 * @param totaldeaths
 * @param totalrecovered
 * @returns {JSX.Element}
 * @constructor
 */
const Ticker = ({
  newconfirmed,
  newdeaths,
  newrecovered,
  totalconfirmed,
  totaldeaths,
  totalrecovered,
}) => {
  return (
    <p className="marquee">
      <span className="scroll-marquee">
        {newconfirmed} {newdeaths} {newrecovered} {totalconfirmed} {totalrecovered} {totaldeaths}
      </span>{' '}
      <span className="scroll-marquee">
        {newconfirmed} {newdeaths} {newrecovered} {totalconfirmed} {totalrecovered} {totaldeaths}
      </span>
    </p>
  );
};

export default Ticker;
