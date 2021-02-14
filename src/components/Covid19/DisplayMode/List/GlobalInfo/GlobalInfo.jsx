import React from 'react';
import s from './style';

/**
 * global data
 * @returns {JSX.Element}
 * @constructor
 */
const GlobalInfo = () => {
  return (
    <s.Global>
      <s.Title>corona virus disease 19</s.Title>
      <s.Cases>
        <h2>Total Cases</h2>
        <h1 />
      </s.Cases>
      <s.Deaths>
        <h2>Total Deaths</h2>
        <h1 />
      </s.Deaths>
      <s.Recovered>
        <h2>Total Recovered</h2>
        <h1 />
      </s.Recovered>
    </s.Global>
  );
};

export default GlobalInfo;
