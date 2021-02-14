import React from 'react';

/**
 * search input
 * @param onKeyUp
 * @returns {JSX.Element}
 * @constructor
 */
const Search = ({ onKeyUp }) => {
  return (
    <input
      onKeyUp={onKeyUp}
      type="text"
      id="search"
      name="country"
      placeholder="Search Countries"
    />
  );
};

export default Search;
