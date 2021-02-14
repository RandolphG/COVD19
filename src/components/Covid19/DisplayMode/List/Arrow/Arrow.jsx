import React from 'react';
import s from './style';

/**
 * arrows for navigation
 * @returns {JSX.Element}
 * @constructor
 */
const Arrow = () => {
  return (
    <s.Arrow>
      <s.Up
        onClick={() => {
          console.log(`UP CLICKED`);
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      />
      <s.Down
        onClick={() => {
          console.log(`DOWN CLICKED`);
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }}
      />
    </s.Arrow>
  );
};

export default Arrow;
