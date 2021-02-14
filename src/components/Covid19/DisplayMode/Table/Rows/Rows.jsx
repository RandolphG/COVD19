import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { clamp } from '@popmotion/popcorn';

import './style.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCountries } from '../../../../../store';

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

const Border = styled.body`
  width: 100vw;
  height: 500px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function useScrollConstraints(ref) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const element = ref.current;
    console.log(`ELEMENT`, element);

    const viewportHeight = element.offsetHeight;
    console.log(`viewportHeight`, viewportHeight);

    const contentHeight = element.firstChild.offsetHeight;
    console.log(`contentHeight`, contentHeight);

    setConstraints({ top: viewportHeight - contentHeight, bottom: 0 });
  }, []);

  return constraints;
}

const Rows = () => {
  const [count, setCount] = useState(0);

  const Example = () => {
    const y = useMotionValue(0);
    const ref = useRef(null);
    const countries = useSelector(getCountries);
    const { top, bottom } = useScrollConstraints(ref);

    function handleWheel(event) {
      event.preventDefault();
      const newY = y.get() - event.deltaY;
      const clampedY = clamp(top, bottom, newY);
      y.stop();
      y.set(clampedY);
    }

    return (
      <Border>
        <div className="container" ref={ref} onWheel={handleWheel}>
          <motion.div
            drag="y"
            dragConstraints={{ top, bottom }}
            className="scrollable"
            style={{ y }}
          >
            {countries.map(
              (
                { Country, CountryCode, Slug, TotalConfirmed, TotalDeaths, TotalRecovered },
                index
              ) => (
                <div key={index} className="item">
                  {Country} {CountryCode} {Slug} {TotalConfirmed} {TotalDeaths} {TotalRecovered}
                </div>
              )
            )}
          </motion.div>
        </div>
      </Border>
    );
  };

  const Refresh = ({ onClick }) => {
    return (
      <motion.div
        className="refresh"
        onClick={onClick}
        variants={button}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      >
        <motion.svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" variants={arrow}>
          <path
            d="M12.8 5.1541V2.5a.7.7 0 0 1 1.4 0v5a.7.7 0 0 1-.7.7h-5a.7.7 0 0 1 0-1.4h3.573c-.7005-1.8367-2.4886-3.1-4.5308-3.1C4.8665 3.7 2.7 5.85 2.7 8.5s2.1665 4.8 4.8422 4.8c1.3035 0 2.523-.512 3.426-1.4079a.7.7 0 0 1 .986.9938C10.7915 14.0396 9.2186 14.7 7.5422 14.7 4.0957 14.7 1.3 11.9257 1.3 8.5s2.7957-6.2 6.2422-6.2c2.1801 0 4.137 1.1192 5.2578 2.8541z"
            fill="#fff"
          />
        </motion.svg>
      </motion.div>
    );
  };

  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Example />
      </div>
    </>
  );
};

export default Rows;
