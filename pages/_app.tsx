import React from "react";
import NextApp from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NextI18n from "../i18n";
import { nossas } from "../theme";
import "../components/Navbar/styles.css";

const theme = extendTheme(nossas);

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

export default NextI18n.appWithTranslation(App);
