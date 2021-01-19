import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { resetCss, theme } from '../utils'

const GlobalStyle = createGlobalStyle`
  {resetCss}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}