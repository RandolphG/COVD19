import { motion } from 'framer-motion';
import React, { Fragment } from 'react';

import { ErrorBoundary } from '../../../ErrorBoundary';

const AnimationSettings = {
  transition: { duration: 0.2 },
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Modes = ({ render }) => (
  <ErrorBoundary>
    <Fragment>
      <motion.div {...AnimationSettings}>{render()}</motion.div>
    </Fragment>
  </ErrorBoundary>
);

export default Modes;
