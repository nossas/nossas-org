import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  primary: {
    background: {
      main: '#2D00A1',
      hover: '#3707B4',
      focus: '#250086'

    },
    color: {
      main: '#fff'
    }
  },
  secondary: {
    background: {
      main: '#fff',
      hover: '#F7F7F7',
      focus: '#EEEEEE'

    },
    color: {
      main: '#2D00A1',
      focus: '#250086'
    }
  },
  flat: {
    color: {
      main: '#2D00A1',
      hover: '#3707B4',
      focus: '#250086'
    }
  }
}

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