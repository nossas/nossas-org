import Head from 'next/head'
import { Button, Flex, Text } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar/Navbar';
import NextI18n from '../i18n'
import GoogleFonts from "next-google-fonts";
import Slider from './components/Slider';

const { withTranslation, i18n } = NextI18n;

const Home = ({ t }) => {

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt-BR' ? 'en' : 'pt-BR')
  }

  return (
    <Flex minH='100vh' direction='column'>
      <GoogleFonts href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Bebas+Neue:400,700" />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as='main' direction='column' flex='1'>
        <Navbar />
        <Flex p={10} m={15} bg='lightblue' alignItems='center' direction='column'>
          <Text>{t('Welcome')}</Text>
          <Button onClick={changeLanguage} maxW={200} mt={5}>
            {t('Change Language')}
          </Button>
        </Flex>
        <Slider />
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

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default withTranslation()(Home);
