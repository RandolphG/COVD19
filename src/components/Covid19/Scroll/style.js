import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Border = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  width: 600px;
  height: 100%;
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
  cursor: grab;
`;

const Header = styled.div`
  font-size: 20px;
  color: white;
  background: seagreen;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 30px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  text-transform: uppercase;
`;
const Table = styled.div`
  //background: green;
  height: 70%;
  overflow: hidden;
  position: absolute;
  bottom: 10vh;
  border-radius: 8px;
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

const Flag = styled.img`
  height: 16px;
  border-radius: 3px;
  max-width: 230px;
`;

const Stats = styled.div`
  width: 85%;
  font-weight: 400;
  padding-left: 8px;
  padding-right: 8px;
  background: blueviolet;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProgressBar = styled(motion.div)`
  width: ${props => props.width};
  height: 12px;
  border-radius: 8px;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  position: absolute;
  border: solid black 2px;
  bottom: 3vh;
`;

export default { Border, Row, Header, Stats, ProgressBar, Flag, Table };
