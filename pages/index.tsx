import Head from 'next/head'
import { Flex } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import View from './components/View';
import Navbar from './components/Navbar';
import GoogleFonts from "next-google-fonts";

export default function Home() {
  return (
    <Flex minH='100vh' direction='column'>
      <GoogleFonts href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Bebas+Neue:400,700" />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as='main' direction='column' flex='1'>
        <Navbar />
        <View component='p' margin='30px' padding='10px'>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </View>
      </Flex>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Flex>
  )
}
