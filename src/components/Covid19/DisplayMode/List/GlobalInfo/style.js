import styled from 'styled-components';

const Deaths = styled.div`
  margin: 15px 15px 0 0;
  display: inline-block;
  h1 {
    color: #fb5e53;
  }
`;

const Recovered = styled.div`
  margin: 15px 15px 0 0;
  display: inline-block;
  h1 {
    color: #9c9;
  }
`;

const Cases = styled.div`
  margin: 15px 15px 0 0;
  display: inline-block;
  h1 {
    color: #eff318;
  }
`;

const Title = styled.div`
  margin: 15px 0;
  text-transform: uppercase;
  font-size: xx-large;
  font-weight: bold;
`;

const Global = styled.div`
  position: relative;
`;

export default { Global, Title, Cases, Deaths, Recovered };
