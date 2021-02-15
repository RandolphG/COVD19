import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Modes from './Modes';
import { getCountries, getSceens } from '../../../store';
import { ErrorBoundary } from '../../ErrorBoundary';
import { Menu } from '../Menu';

export const StyledModalContent = styled(motion.div)`
  box-sizing: border-box;
  //background: #5f91ff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const fadeOut = {
  opacity: 0,
};

const ModeSelections = () => {
  const [input, setInput] = useState('');
  const location = useLocation();
  const screens = useSelector(getSceens);
  const countries = useSelector(getCountries);
  const [filtered, setFiltered] = useState([]);
  const home = () => (screens[0] ? `/${screens[0].mode}` : '/');

  const onChange = e => {
    if (input === '') {
      console.log(`NOTHING`);
      console.log(`[...days]`, [...countries]);
      return setFiltered([...countries]);
    }

    const copy = countries.map(country => ({
      ...country,
      country: country.filter(result => result.Country === input),
    }));

    setFiltered([...copy]);
  };

  return (
    <ErrorBoundary>
      <StyledModalContent key="role">
        <Menu />
        <div
          style={{
            position: 'absolute',
            height: '450px',
            width: '105px',
            border: '4px solid black',
            borderRadius: '5px',
            right: '10px',
          }}
        >
          OPTIONS
          <span>Sort</span>
          <span>Sort</span>
          {/*          <div key={index}>
            <input data-idx={index} onChange={onChange} type={'checkbox'} value={agency.selected} />
          </div>*/}
        </div>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            {screens.map(({ mode, render }) => (
              <Route
                key={`selected-${mode}`}
                path={`/${mode}`}
                render={() => <Modes render={render} />}
              />
            ))}
            <Route
              key="redirection"
              render={() => (
                <motion.div exit={fadeOut}>
                  <Redirect to={home()} />
                </motion.div>
              )}
            />
          </Switch>
        </AnimatePresence>
      </StyledModalContent>
    </ErrorBoundary>
  );
};

export default ModeSelections;
