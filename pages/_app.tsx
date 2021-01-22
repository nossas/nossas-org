import React from 'react';
import App from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import NextI18n from '../i18n';
import { nossas } from './theme';

const theme = extendTheme(nossas);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default NextI18n.appWithTranslation(MyApp);
