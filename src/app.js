import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "./themes/theme";
import Home from "./pages/Home";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.text.normal};
    font-family:  ${({ theme }) => theme.fontFamily};
    overflow: hidden;
  }
`;

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
);

export default App;
