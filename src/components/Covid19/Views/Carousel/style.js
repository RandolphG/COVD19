import styled from 'styled-components';
import { motion } from 'framer-motion';

const Content = styled(motion.div)`
  box-sizing: border-box;
  background: transparent;
  width: 100vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default { Content };
