import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: #080e1e;
  background: radial-gradient(
    circle,
    rgb(65, 102, 202) -60%,
    rgba(0, 0, 0, 0.8901960784313725) 75%
  );
  background: -webkit-radial-gradient(
    circle,
    rgb(65, 102, 202) -60%,
    rgba(0, 0, 0, 0.8901960784313725) 75%
  );
  background: -moz-radial-gradient(
    circle,
    rgb(65, 102, 202) -60%,
    rgba(0, 0, 0, 0.8901960784313725) 75%
  );
  background: -o-radial-gradient(
    circle,
    rgb(65, 102, 202) -60%,
    rgba(0, 0, 0, 0.8901960784313725) 75%
  );
`;

export default { Container };
