import React from 'react';

/**
 * custom select
 * @returns {JSX.Element}
 * @constructor
 */
const CustomSelect = ({ changeOrder }) => {
  return (
    <select className="custom-select" id="select" onChange={changeOrder}>
      <option selected="" disabled="">
        Sort By
      </option>
      <option value="cases">Total Cases</option>
      <option value="deaths">Total Deaths</option>
      <option value="recovered">Total Recoveries</option>
    </select>
  );
};

export default CustomSelect;
