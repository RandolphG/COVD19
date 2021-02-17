import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { history } from '../../store/store';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from '../ErrorBoundary';
import { Menu } from '../Menu';
import { Scroll } from './Scroll';
import Carousel from './Carousel';
import { AnimatedBackground } from '../Background';
import Options from './Options';
import Modal from '../Modal';
import Landing from './Landing/Landing';
import styled from 'styled-components';

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
        <ConnectedRouter history={history}>
          <Menu />
          <Options />
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route key={`selected-carousel`} path={`/CAROUSEL`} render={() => <Carousel />} />
                  } />
                  <Route key={`selected-scroll`} path={`/SCROLL`} render={() => <Scroll />} />} />
                  <Route key={`selected-landing`} exact path={`/`} render={() => <Landing />} />} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </ConnectedRouter>
        <AnimatedBackground />
        <Modal />
      </Border>
    </ErrorBoundary>
  );
};

export default Views;
