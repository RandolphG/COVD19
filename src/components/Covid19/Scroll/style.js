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
  background: #4a89dc;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 30px;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  text-transform: uppercase;
`;
const Table = styled.div`
  background: green;
  height: 60%;
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
  position: absolute;
  top: 15%;
  border-radius: 6px;
  max-width: 230px;
`;

const Stats = styled.div`
  width: 45%;
  background: blueviolet;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
