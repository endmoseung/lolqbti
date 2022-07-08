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

@font-face {
  font-family: "galmuri";
  src: url('https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css');
}

@font-face {
    font-family: 'CookieRun-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export default GlobalStyle;
