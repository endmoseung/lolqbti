import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  text-decoration: none;
}
button{
  border: none;
  outline: none;
}
@font-face {
  font-family: "FrizQuadrataBold";
  font-weight: 300;
  src: url(../src/styles/fonts/Friz\ Quadrata\ Bold.otf) format("opentype");
}

`;

export default GlobalStyle;
