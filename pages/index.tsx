import Head from "next/head";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import NextI18n from "../i18n";
import GoogleFonts from "next-google-fonts";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const { withTranslation, i18n } = NextI18n;

const Home = ({ t }) => {
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt-BR" ? "en" : "pt-BR");
  };

  return (
    <Flex minH="100vh" direction="column">
      <GoogleFonts href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Bebas+Neue:400,700" />
      <Head>
        <title>NOSSAS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex id="page-container" direction="column" flex="1">
        <Navbar />
        <Container as='main' id='page-wrap' flex='1' maxW='none' padding='0'>
          <Flex p={10} m={15} bg='lightblue' alignItems='center' direction='column'>
            <Text>{t('Welcome')}</Text>
            <Button onClick={changeLanguage} maxW={200} mt={5}>
              {t("Change Language")}
            </Button>
          </Flex>
          <Slider />
        </Container>
      </Flex>
      <Footer t={t} />
    </Flex>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "footer"],
});

export default withTranslation()(Home);
