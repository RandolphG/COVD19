import styled from 'styled-components';

const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 360px;
  height: 180px;
  transform: rotateY(20deg) skew(5deg);
  transform-style: preserve-3d;
  background-image: url('https://flags.fmcdn.net/data/flags/w580/ag.png');
  background-size: 0;
  background-position: -200% -200%;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 7.5px;
    height: 360px;
    background: transparent;
    left: 7px;
  }
`;

const Section = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  left: 14px;
  width: 15px;
  height: 100%;
  transform-origin: 0 0;
  background-repeat: no-repeat;
  background-size: 360px 100%;
  transform: translateZ(0.0001px) rotateY(14.1176470588deg);
  background-image: inherit;
  animation-name: wave;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;
