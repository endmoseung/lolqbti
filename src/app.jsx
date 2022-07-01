import React from "react";
import "./app.css";
import styled, { ThemeProvider } from "styled-components";
import RootRoute from "./routes/route";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./theme/theme";

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <RootRoute></RootRoute>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.h1`
  display: flex;
  justify-content: center;
  height: 100vh;
`;
