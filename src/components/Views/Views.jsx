import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getCountries } from '../../store';
import { ErrorBoundary } from '../ErrorBoundary';
import { Menu } from '../Menu';
import { Scroll } from './Scroll';
import Carousel from './Carousel';
import { AnimatedBackground } from '../Background';

export const Border = styled(motion.div)`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModeSelections = () => {
  const [input, setInput] = useState('');
  const location = useLocation();
  const countries = useSelector(getCountries);
  const [filtered, setFiltered] = useState([]);

  const onChange = e => {
    e.preventDefault();
    setInput(e.target.value);
    const searchedCountries = countries.filter(C => C.Country === input);
    setFiltered([...searchedCountries]);

    console.log(`searchedCountries input `, searchedCountries, input);
  };

  const Options = () => (
    <div
      style={{
        overflow: 'hidden',
        zIndex: 500,
        background: 'indigo',
        color: 'white',
        position: 'absolute',
        height: '100vh',
        width: '105px',
        border: '4px solid black',
        borderRadius: '5px',
        right: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '16vh',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1vh' }}>
        <Link style={{ color: '#0099ff', textDecoration: 'none' }} to={`/SCROLL`}>
          View #1
        </Link>
        <Link style={{ color: '#ff0055', textDecoration: 'none' }} to={`/CAROUSEL`}>
          View #2
        </Link>
      </div>

      <span>SEARCH</span>
      <span
        style={{
          fontSize: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'red',
          width: '8vw',
          overflow: 'hidden',
          margin: '10px 0',
        }}
      >
        <input
          style={{ height: '5vh' }}
          type="text"
          placeholder={'search'}
          value={input}
          onChange={e => onChange(e)}
        />
      </span>
      <span>SORT</span>
    </div>
  );

  const View = () => (
    <Router>
      <Route>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route key={`selected-carousel`} exact path={`/CAROUSEL`} render={() => <Carousel />} />
            } />
            <Route key={`selected-scroll`} exact path={`/SCROLL`} render={() => <Scroll />} />} />
          </Switch>
        </AnimatePresence>
      </Route>
    </Router>
  );

  console.log(`location.pathname`, location.pathname);

  return (
    <ErrorBoundary>
      <Border key="role">
        <Menu />
        <Options />
        <View />
        <AnimatedBackground />
      </Border>
    </ErrorBoundary>
  );
};

export default ModeSelections;
