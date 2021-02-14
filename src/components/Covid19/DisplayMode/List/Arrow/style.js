import styled from 'styled-components';

const Up = styled.div`
  position: relative;
  cursor: pointer;
  background-color: rgba(155, 155, 155, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 0 25px 3px 0;
  &:before {
    content: '';
    position: absolute;
    border-top: solid 4px #f0f0f0;
    border-right: solid 4px #f0f0f0;
    width: 16px;
    height: 16px;
    left: 10px;
    top: 14px;
    transform: rotate(-45deg);
  }
`;

const Down = styled.div`
  position: relative;
  cursor: pointer;
  background-color: rgba(155, 155, 155, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 0 25px 25px 0;
  &:before {
    content: '';
    position: absolute;
    border-top: solid 4px #f0f0f0;
    border-right: solid 4px #f0f0f0;
    width: 16px;
    height: 16px;
    left: 10px;
    bottom: 14px;
    transform: rotate(135deg);
  }
`;

const Arrow = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
`;

export default { Arrow, Up, Down };
