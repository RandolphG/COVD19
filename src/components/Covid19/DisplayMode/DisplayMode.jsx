import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Modes from './Modes';
import { getRoles } from '../../../store';

export const StyledModalContent = styled(motion.div)``;

const fadeOut = {
  opacity: 0,
};

const ModeSelections = () => {
  const location = useLocation();
  const roles = useSelector(getRoles);
  const home = () => (roles[0] ? `/${roles[0].mode}` : '/');

  return (
    <StyledModalContent key="role">
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
  );
};

export default ModeSelections;
