import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Modes from './Modes';
import { getRoles } from '../../../store';
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
  const location = useLocation();
  const roles = useSelector(getRoles);
  const home = () => (roles[0] ? `/${roles[0].mode}` : '/');

  return (
    <ErrorBoundary>
      <StyledModalContent key="role">
        <Menu />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            {roles.map(({ mode, render }) => (
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
