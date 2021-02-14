import React from 'react';
import s from './style';

/**
 * table elements
 * @returns {JSX.Element}
 * @constructor
 */
const Table = () => {
  return (
    <s.Table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody />
    </s.Table>
  );
};

export default Table;
