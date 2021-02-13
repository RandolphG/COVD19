import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(({ selected, ...props }) => <Link selected={selected} {...props} />)`
  background: ${props => props.selected && 'rgb(32,142,176)'};
  cursor: pointer;
  display: block;
  padding: 3px;
  text-decoration: none;
  transition: background-color 0.6s;
  font-size: ${props => (props.selected ? '.85rem' : '01rem')};
  font-weight: bold;
`;

const StyledContainer = styled(motion.li)`
  flex: 1;
  z-index: 1;
`;

const StyledModeTitle = styled.p`
  text-align: center;
  padding: 0 4px;
`;

const upScale = {
  scale: 1.02,
};

const downScale = {
  scale: 0.99,
};

const ModeButtons = forwardRef(
  ({ mode, link, current, onClick, modeIndex, setActiveIndex }, ref) => {
    const onMouseEnter = () => setActiveIndex(current);
    const onMouseLeave = () => setActiveIndex(modeIndex);
    const selected = () => current === modeIndex;

    return (
      <StyledContainer key={mode} onClick={onClick} whileHover={upScale} whileTap={downScale}>
        <StyledLink
          ref={ref}
          to={mode}
          selected={selected()}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {link}
        </StyledLink>
      </StyledContainer>
    );
  }
);

export default ModeButtons;
