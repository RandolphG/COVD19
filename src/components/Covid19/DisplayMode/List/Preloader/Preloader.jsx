import React from 'react';

/**
 * preloader
 * @returns {JSX.Element}
 * @constructor
 */
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__loader" />
        <div className="preloader__txt">Loading ...</div>
      </div>
    </div>
  );
};

export default Preloader;
