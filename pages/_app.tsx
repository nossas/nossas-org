import React, { useEffect } from "react";
import NextApp from "next/app";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactGA from "react-ga";

import apm from "../lib/apm";
// import NextI18n from "../i18n";
import { nossas } from "../theme";
import { createApolloClient } from "../lib";
// add global css
import "../styles/globals.css";
import { useRouter } from "next/router";
import { initializeGA, logPageView } from "../utils/analytics";

initializeGA("G-7R11G6KBCH");

const theme = extendTheme(nossas);

apm.setInitialPageLoadName("Home NOSSAS");
function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    logPageView(router.pathname);
  }, [router.pathname]);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={createApolloClient({}, {}) as any}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
