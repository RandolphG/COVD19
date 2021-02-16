import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import s from './style';
import Views from './Views';

/**
 * covid data app
 * @returns {JSX.Element}
 * @constructor
 */
const Covid19 = () => {
  return (
    <ErrorBoundary>
      <s.Container>
        <Views />
      </s.Container>
    </ErrorBoundary>
  );
};

export default Covid19;
