import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import GoogleFonts from "next-google-fonts";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
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

export default Home;
