import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import GoogleFonts from "next-google-fonts";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Body = ({ children, isMobile }) => (
  <Flex minH="100vh" direction="column">
    <GoogleFonts href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Bebas+Neue:400,700" />
    <Head>
      <title>NOSSAS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex id="page-container" direction="column" flex="1">
      <Navbar isMobile={isMobile} />
      <Container as="main" id="page-wrap" flex="1" maxW="none" padding="0">
        {children}
      </Container>
      <Footer />
    </Flex>
  </Flex>
);

export default Body;
