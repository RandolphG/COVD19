import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { ErrorBoundary } from '../ErrorBoundary';
import { Menu } from '../Menu';
import { Scroll } from './Scroll';
import Carousel from './Carousel';
import { AnimatedBackground } from '../Background';
import Options from './Options';
import Modal from '../Modal';

export const Border = styled(motion.div)`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Views = () => {
  return (
    <ErrorBoundary>
      <Border key="role">
        <Router>
          <Menu />
          <Options />
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route
                    key={`selected-carousel`}
                    exact
                    path={`/CAROUSEL`}
                    render={() => <Carousel />}
                  />
                  } />
                  <Route key={`selected-scroll`} exact path={`/SCROLL`} render={() => <Scroll />} />
                  } />
                </Switch>
              </AnimatePresence>
            )}
          />
        </Router>
        <AnimatedBackground />
        <Modal />
      </Border>
    </ErrorBoundary>
  );
};

export default Views;
