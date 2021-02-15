import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");

  body {
    padding: 0;
    margin: 0;
    font-family: "Merriweather", serif;
  }

  div, h4, h3, h2, h1{
    font-family: "Merriweather", serif;
  }

`;
export default GlobalStyle;
