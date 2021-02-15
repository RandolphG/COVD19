import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Flag = styled.img`
  position: absolute;
  top: 15%;
  border-radius: 6px;
  max-width: 230px;
`;

const ProgressBar = styled(motion.div)`
  z-index: 700;
  width: ${props => props.width};
  height: 12px;
  border-radius: 8px;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  position: absolute;
  border: solid black 2px;
  bottom: -20%;
  left: 20px;
`;

const Border = styled(motion.div)`
  z-index: 300;
  width: 600px;
  height: 275px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
  cursor: grab;
`;

const Row = styled.div`
  &:last-child {
    background: olive;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-grow: 1;
  }
`;

const Header = styled.div`
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 30px;
  width: 600px;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 500;
  top: -18%;
  text-transform: uppercase;
`;

const Stats = styled.div`
  width: 45%;
  background: blueviolet;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default { Border, Row, Header, Stats, ProgressBar, Flag };
