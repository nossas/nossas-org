import React from "react";
import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import GoogleFonts from "next-google-fonts";

import Navbar from "../Navbar";
import Footer from "../Footer";

const Body: React.FC = ({ children }) => (
  <Flex minH="100vh" direction="column">
    <GoogleFonts href="https://fonts.googleapis.com/css?family=Droid+Sans:100,400,700" />
    <Head>
      <title>NOSSAS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex id="page-container" direction="column" flex="1">
      <Navbar />
      <Container as="main" id="page-wrap" flex="1" maxW="none" padding="0">
        {children}
      </Container>
      <Footer />
    </Flex>
  </Flex>
);

export default Body;
