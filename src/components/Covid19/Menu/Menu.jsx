import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getModeIndex, getRoles } from '../../../store';
import { setMode, setSelectedMachineRole } from '../../../store/actions';
import { ErrorBoundary } from '../../ErrorBoundary';
const screens = [
  {
    title: 'Carousel',
    color: '#0099ff',
    mode: 'CAROUSEL',
  },
  {
    title: 'List',
    color: '#ff0055',
    mode: 'LIST',
  },
  {
    title: 'info',
    color: '#0099ff',
    mode: 'INFO',
  },
];

const Border = styled.div`
  font-family: Montserrat, sans-serif;
  box-sizing: border-box;
  font-weight: 600;
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 500;
`;

export default function App() {
  const [selected, setSelected] = useState(0);
  const current = useSelector(getModeIndex);
  const roles = useSelector(getRoles);
  const [modeIndex, setModeIndex] = useState(current);
  const controls = useAnimation();
  const dispatch = useDispatch();

  const onModeSelected = mode => {
    dispatch(setSelectedMachineRole(mode));
  };

  return (
    <ErrorBoundary>
      <Border>
        <AnimateSharedLayout>
          <ol style={{ transform: 'translateZ(0)' }}>
            {screens.map(({ title, color, mode }, i) => (
              <motion.li
                animate
                key={i}
                className={`title ${i === selected && 'selected'}`}
                style={{ color: i === selected ? color : '#333' }}
                onClick={() => {
                  console.log(`CLICKED!!`);
                  onModeSelected(mode);
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
      </Border>
    </ErrorBoundary>
  );
}
