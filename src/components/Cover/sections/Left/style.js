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
  background: linear-gradient(to right, deeppink 0%, coral 100%);
  position: relative;
  width: 120%;
  height: 100%;
  cursor: pointer;
`;

const Header = styled.div`
  position: absolute;
  right: 30vw;
  top: 30vh;
  height: 50vh;
  width: 40vh;
  pointer-events: none;
  justify-content: center;
`;

const Description = styled.span`
  height: 50vh;
  overflow: hidden;
  position: absolute;
  right: -15vw;
  top: 3vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: white;
  font-size: 30px;
  position: absolute;
  top: -6vh;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.61);
`;

const Stripe = styled.span`
  height: 14px;
  position: absolute;
  top: 7vh;
  width: 400px;
  background: linear-gradient(to right, deeppink 0%, coral 100%);
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

const Text = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
  top: 10vh;
`;

const TextA = styled.span`
  text-transform: uppercase;
  font-size: 38px;
  color: white;
  display: flex;
  top: 1vh;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.61);
`;

export default { Numbers, Header, SlopeEnd, SlopeBegin, Stripe, Text, Description, Title, TextA };
