import * as React from 'react';
import styled from 'styled-components';

const Border = styled.div`
  overflow: hidden;
  z-index: 500;
  color: white;
  position: absolute;
  height: 90vh;
  width: 105px;
  border-radius: 5px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 16vh;
`;

export default { Border };
