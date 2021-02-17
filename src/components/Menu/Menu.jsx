import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { ErrorBoundary } from '../ErrorBoundary';
import './style.css';
import style from './style';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

/* menu items */
const views = [
  {
    title: 'Carousel',
    color: '#0099ff',
    path: 'CAROUSEL',
  },
  {
    title: 'Scroll',
    color: '#ff0055',
    path: 'SCROLL',
  },
];

/**
 * Menu
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);

  const redirect = ({ path }) => dispatch => {
    console.log(`push`, push(`/${path}`));
    // dispatch(push(`/${path}`));
  };

  return (
    <ErrorBoundary>
      <style.Border>
        <AnimateSharedLayout>
          <ol style={{ transform: 'translateZ(0)' }}>
            {views.map(({ title, color, path }, i) => (
              <motion.li
                animate
                key={i}
                className={`title ${i === selected && 'selected'}`}
                style={{ color: i === selected ? color : '#333' }}
                onClick={dispatch => {
                  console.log(`push`, push(`/${path}`));

                  redirect(path);
                  setSelected(i);
                }}
              >
                {i === selected && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}

                {title.toUpperCase()}
              </motion.li>
            ))}
          </ol>
        </AnimateSharedLayout>
      </style.Border>
    </ErrorBoundary>
  );
};
export default Menu;
