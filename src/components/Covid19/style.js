import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
`;

const Content = styled.div`
  box-sizing: border-box;
  background: transparent;
  width: 100vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  overflow: hidden;
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.p`
  width: fit-content;
`;

const Agency = styled.p`
  background: #26547c;
  width: fit-content;
`;

export default { Agency, Title, Row, Content, Container };
