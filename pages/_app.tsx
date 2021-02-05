import React from "react";
import NextApp from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import NextI18n from "../i18n";
import { nossas } from "../theme";
import { createApolloClient } from "../lib";
import "../components/Navbar/styles.css";

const theme = extendTheme(nossas);

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <ApolloProvider client={createApolloClient({}, {}) as any}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    );
  }
}

App.getInitialProps = async (appContext) => ({
  ...(await NextApp.getInitialProps(appContext)),
});

export default NextI18n.appWithTranslation(App);
