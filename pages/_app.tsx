import React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { nossas } from './theme';

const theme = extendTheme(nossas);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
