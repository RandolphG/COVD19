import styled from 'styled-components';

const Preloader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #181818;
  z-index: 999;
  visibility: visible;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-drag: none;

  .preloader--hidden {
    animation-name: hide;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

const Loader = styled.div`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  border: 8px solid #f0f0f0;
  border-top: 8px solid #696969;
  border-radius: 50%;
  animation: spin 2s linear infinite;
`;

const Txt = styled.div`
  padding: 10px;
  color: #f0f0f0;
`;

export default { Txt, Loader, Content, Preloader };
