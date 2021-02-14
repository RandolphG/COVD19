import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Border = styled(motion.div)`
  z-index: 900;
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
  justify-content: spa;
  align-items: center;
  position: absolute;
  height: 30px;
  width: 600px;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 400;
  top: 15%;
  text-transform: uppercase;
`;

const Stats = styled.div`
  background: blueviolet;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default { Border, Row, Header, Stats };
