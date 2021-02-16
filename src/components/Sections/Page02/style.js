import styled from 'styled-components';

const SlopeBegin = styled.div`
  background-color: #20232f;
  clip-path: polygon(20vw 0, 70% 0, calc(70% - 20vw) 100%, 0 100%);
  position: relative;
  width: 120%;
  height: 100%;
  cursor: pointer;
`;

const SlopeEnd = styled.div`
  clip-path: polygon(70% 0, 100% 0, calc(100% - 20vw) 100%, calc(70% - 20vw) 100%);
  background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
  position: relative;
  width: 120%;
  height: 100%;
  cursor: pointer;
`;

const Header = styled.div`
  margin-left: 20%;
  font-size: 40px;
  color: white;
  pointer-events: none;
  justify-content: start;
  text-transform: uppercase;
  align-items: center;
`;

const Stripe = styled.div`
  height: 4px;
  width: 300px;
  background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
`;

const Numbers = styled.div`
  font-size: 250px;
  color: #373c4c;
  span {
    display: inline-block;
    position: relative;
    transform: translate3d(-55%, 0, 0);
  }
`;

export default { Numbers, Header, SlopeEnd, SlopeBegin, Stripe };
