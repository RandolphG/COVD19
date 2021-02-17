import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { isModalShown } from '../../store';
import { toggleModal } from '../../store';
import { Flag } from './Flag';
import { ErrorBoundary } from '../ErrorBoundary';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, transition: { delay: 0.5 } },
};

const modal = {
  hidden: { y: '-100px', opacity: 0, transition: { delay: 0.6 } },
  visible: {
    y: '0',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const BackdropCSS = styled(motion.div)`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalCSS = styled(motion.div)`
  background: radial-gradient(
    ellipse at center,
    rgba(150, 150, 150, 1) 0%,
    rgba(89, 89, 89, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#969696', endColorstr = '#595959', GradientType = 1);
  color: black;
  border-radius: 6px;
  width: 600px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Operator Mono Book Italic', sans-serif !important;
  padding: 16px;
  list-style-type: none;
  text-decoration: none;
  button {
    color: white;
    padding: 10px 30px;
    font-size: 1em;
    border: 3px solid white;
    margin-top: 16px;
  }
  h2 {
    background: #00aaff;
    font-size: 2em;
    margin-bottom: 30px;
  }
  h3 {
    color: white;
  }
  ul {
    margin-top: 16px;
  }
`;

const Modal = () => {
  const isModalHidden = useSelector(isModalShown);
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleModal(!isModalHidden));

  return (
    <ErrorBoundary>
      <AnimatePresence>
        {isModalHidden && (
          <BackdropCSS
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={toggle}
          >
            <ModalCSS variants={modal}>
              <Flag />
            </ModalCSS>
          </BackdropCSS>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
};

export default Modal;
