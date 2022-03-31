import React from "react";
import NextApp from "next/app";
import { appWithTranslation } from "next-i18next";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import apm from "../lib/apm";
// import NextI18n from "../i18n";
import { nossas } from "../theme";
// add global css
import "../styles/globals.css";

const theme = extendTheme(nossas);

apm.setInitialPageLoadName("Home NOSSAS");

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

App.getInitialProps = async (appContext) => ({
  ...(await NextApp.getInitialProps(appContext)),
});

export default appWithTranslation(App);
