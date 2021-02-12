import styled from 'styled-components';

const AgencyTitle = styled.p`
  color: aqua;
  font-size: large;
  font-weight: bold;
  margin-bottom: 4px;
  padding: 0;
  text-align: center;
`;

const TextInfo = styled.h6`
  margin: 0;
`;

const DateInfo = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 16px;
  margin: 0;
`;

const NumberOfDay = styled.h1`
  font-size: 100px;
  margin: 0;
`;

const AgencySection = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default { NumberOfDay, DateInfo, TextInfo, AgencyTitle, AgencySection };
