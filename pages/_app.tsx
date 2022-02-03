import React from "react";
import dynamic from "next/dynamic";
import NextApp from "next/app";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { TinaEditProvider } from "tinacms/dist/edit-state";

import apm from "../lib/apm";
// import NextI18n from "../i18n";
import { nossas } from "../theme";
import { createApolloClient } from "../lib";
// add global css
import "../styles/globals.css";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });

const branch = process.env.NEXT_PUBLIC_EDIT_BRANCH || "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

const theme = extendTheme(nossas);

apm.setInitialPageLoadName("Home NOSSAS");

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <ApolloProvider client={createApolloClient({}, {}) as any}>
          <TinaEditProvider
            editMode={
              <TinaCMS apiURL={apiURL}>
                <Component {...pageProps} />
              </TinaCMS>
            }
          >
            <Component {...pageProps} />
          </TinaEditProvider>
        </ApolloProvider>
      </ChakraProvider>
    );
  }
}

App.getInitialProps = async (appContext) => ({
  ...(await NextApp.getInitialProps(appContext)),
});

export default appWithTranslation(App);
