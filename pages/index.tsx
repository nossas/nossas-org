import Head from "next/head";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { withTranslation } from "../i18n";
import Navbar from "../components/Navbar/Navbar";
import GoogleFonts from "next-google-fonts";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = ({ t }) => {
  return (
    <Flex minH="100vh" direction="column">
      <GoogleFonts href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Bebas+Neue:400,700" />
      <Head>
        <title>NOSSAS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex id="page-container" direction="column" flex="1">
        <Navbar />
        <Hero
          Title={
            <Heading
              as="h1"
              fontSize={["3xl", "6xl"]}
              color="white"
              textAlign="center"
            >
              {t("Hero")}
            </Heading>
          }
          // bgImage="/static/media/bg-example.png"
          videoUrl="/static/media/video-example.mp4"
        />
        {/* Examplo de Hero com titulo e subtitulo */}
        {/* <Hero
          Title={
            <Box maxWidth="800px">
              <Heading as="h1" fontSize={["3xl", "6xl"]} color="white">
                {t("Hero")}
              </Heading>
            </Box>
          }
          Subtitle={
            <Text fontSize={["md", "xl"]} color="white">
              {t("HeroSubtitle")}
            </Text>
          }
          bgColor="nossas.blue"
        /> */}
        <Container as="main" id="page-wrap" flex="1" maxW="none" padding="0">
          <Slider />
        </Container>
        <Footer />
      </Flex>
    </Flex>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
