import React from "react";
import NextApp from "next/app";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import apm from "../lib/apm";
// import NextI18n from "../i18n";
import { nossas } from "../theme";
import { createApolloClient } from "../lib";
// add global css
import "../styles/globals.css";

const theme = extendTheme(nossas);

apm.setInitialPageLoadName("Home NOSSAS");

if (
  !(
    "NEXT_PUBLIC_BONDE_API_GRAPHQL_URL" in process.env &&
    "CONTENT_API_GRAPHQL_URL" in process.env &&
    "CONTENT_API_GRAPHQL_TOKEN" in process.env
  )
) {
  console.log(
    `CONTENT_API_GRAPHQL_URL, CONTENT_API_GRAPHQL_TOKEN, NEXT_PUBLIC_BONDE_API_GRAPHQL_URL must be defined`,
    process.env
  );
  process.exit();
}

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

export default appWithTranslation(App);
