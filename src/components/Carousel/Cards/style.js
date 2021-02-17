import styled from 'styled-components';

const Flag = styled.img`
  position: absolute;
  top: 15%;
  border-radius: 6px;
  max-width: 230px;
`;

const TextInfo = styled.p`
  font-size: 1rem;
`;

const DateInfo = styled.div`
  font-size: 1rem;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  background: #5f91ff;
  display: flex;
  flex-direction: column;
`;

const Stats = styled.div`
  height: 100%;
  width: 100%;
  background: #5f91ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default { Flag, TextInfo, DateInfo, Content, Stats };
