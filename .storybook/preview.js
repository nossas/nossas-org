import React from "react";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { resetCss, theme } from '../utils'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const GlobalStyle = createGlobalStyle`
  {resetCss}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];