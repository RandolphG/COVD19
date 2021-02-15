import styled, { css } from 'styled-components';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  height: 66vh;
  width: 100%;
  border-radius: 0.5vw;
  background-color: #fff;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding-bottom: 86.25%;
  background-color: #5d9cec;
  background-image: url(${props => props && props.url});
  background-size: cover;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.35);
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 150%;
    height: 100%;
    background-color: #fff;
    transform: rotate(-5deg);
    transform-origin: 0 0;
  }
`;

const Title = styled.h2`
  font-size: 3vw;
  font-weight: 500;
  line-height: 1;
  z-index: 10;
  position: absolute;
  bottom: 15vh;
  left: 6.25%;
  width: 75%;
  padding-bottom: 9%;
  color: #fff;
  text-transform: uppercase;
  transform: rotate(-5deg);
  transform-origin: 0 0;
`;

const Content = styled.div`
  position: absolute;
  right: 0;
  bottom: -5vh;
  left: 0;
  padding: 0 8px 18.75% 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Details = styled.p`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-50%);
`;

const InfoStyling = css`
  font-size: 2vw;
  font-weight: 600;
  line-height: 1;
  color: #656d78;
`;

const Description = styled.span`
  ${InfoStyling};
  float: left;
`;

const Amount = styled.span`
  ${InfoStyling};
  float: right;
`;

const Join = css`
  position: absolute;
  right: 6.25vw;
  bottom: -3vh;
  z-index: 10;
  background-color: #5d9cec;
  padding: 2vw 3vw;
  color: #e6e9ed;
  font-size: 2vw;
  font-weight: 600;
  line-height: 1;
  border-radius: 0.5vw;
  transition: background-color 0.2s linear;
  transform: rotate(-5deg);
  transform-origin: 0 0;
`;

const Button = styled.button.attrs(props => ({
  type: 'button',
}))`
  -webkit-appearance: none;
  margin: 0;
  border: 0;
  overflow: visible;
  font: inherit;
  text-transform: none;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover,
  &:focus {
    outline: none;
    text-decoration: none;
  }
  &:not(:disabled) {
    cursor: pointer;
  }

  ${Join};
`;

export default {
  Amount,
  Join,
  Button,
  Description,
  Content,
  Title,
  Header,
  Card,
  Details,
  InfoStyling,
};
