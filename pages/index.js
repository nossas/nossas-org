import Head from 'next/head'
import styled from 'styled-components'
import Button from "../stories/Button"

const Title = styled.h1`
  font-size: 50px;
`

export default function Home({ theme }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>My page</Title>
      </main>

      <Button>Botão</Button>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}
