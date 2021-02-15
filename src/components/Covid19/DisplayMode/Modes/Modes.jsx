import { motion } from 'framer-motion';
import React, { Fragment } from 'react';

import { ErrorBoundary } from '../../../ErrorBoundary';
import styled from 'styled-components';

const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Border = styled(motion.div)`
  box-sizing: border-box;
  background: black;
  height: 80%;
  position: absolute;
  bottom: 10vh;
  display: flex;
`;
const Modes = ({ render }) => (
  <ErrorBoundary>
    <Fragment>
      <Border {...AnimationSettings}>{render()}</Border>
    </Fragment>
  </ErrorBoundary>
);

export default Modes;
