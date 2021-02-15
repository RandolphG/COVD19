import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { createRef, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import ModeButtons from '../ModeButtons';
import { setMode, setSelectedMachineRole } from '../../../../store/actions';
import { getModeIndex, getSceens } from '../../../../store';
import { ErrorBoundary } from '../../../ErrorBoundary';

const StyledContent = styled.main`
  width: 90%;
  min-height: fit-content;
  position: absolute;
  right: -29%;
  top: 4%;
  z-index: 1000;
`;

const StyledWrapper = styled.nav`
  //background: #5f91ff;
  height: 16px;
  width: 248px;
`;

const StyledMain = styled.section`
  padding: 0.5rem;
`;

const StyledNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledHover = styled(motion.div)`
  height: 80%;
  border-radius: 4px;
  border: yellow 6px solid;
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 0;
`;

const Navigation = () => {
  const current = useSelector(getModeIndex);
  const roles = useSelector(getSceens);
  const [modeIndex, setModeIndex] = useState(current);
  const [activeIndex, setActiveIndex] = useState(modeIndex);
  const controls = useAnimation();
  const dispatch = useDispatch();

  const modeRefs = roles.reduce((acc, role) => {
    acc[role.mode] = createRef();

    return acc;
  }, {});

  const initial = {
    x: `${activeIndex * 20}%`,
  };

  const selectorFrame = {
    width: `${65 / roles.length}%`,
  };

  const restraints = 3;

  const outOfBounds = (i, max) => i >= max || i < 0;

  const shiftIndex = useCallback((selectionIndex, offset, max) => {
    const i = selectionIndex + offset;

    if (outOfBounds(i, max)) {
      return selectionIndex;
    }

    return i;
  }, []);

  const onModeSelected = mode => {
    setModeIndex(activeIndex);
    dispatch(setMode(activeIndex));
    dispatch(setSelectedMachineRole(mode));
  };

  useEffect(() => {
    const animation = {
      x: `${activeIndex * 200}%`,
      transition: { type: 'ease-in-out', duration: 0.1 },
    };

    controls.start(animation);
  }, [activeIndex, controls]);

  useEffect(() => {
    const move = offset => {
      setModeIndex(shiftIndex(activeIndex, offset, restraints));
      setActiveIndex(shiftIndex(activeIndex, offset, restraints));
    };

    const onKeyDown = ({ keyCode }) => {
      switch (keyCode) {
        case 37: {
          move(-1);
          break;
        }
        case 39:
          move(1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, dispatch, restraints, shiftIndex]);

  return (
    <ErrorBoundary>
      <StyledContent>
        <StyledMain>
          <StyledWrapper>
            <StyledNav>
              {roles &&
                roles.map(({ mode, link }, index) => (
                  <ModeButtons
                    key={mode}
                    mode={mode}
                    link={link}
                    current={index}
                    ref={modeRefs[mode]}
                    modeIndex={modeIndex}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    onModeSelect={onModeSelected}
                    onClick={() => onModeSelected(mode)}
                  />
                ))}
              <StyledHover initial={initial} animate={controls} style={selectorFrame} />
            </StyledNav>
          </StyledWrapper>
        </StyledMain>
      </StyledContent>
    </ErrorBoundary>
  );
};

export default Navigation;
