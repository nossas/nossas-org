import React from "react";
// import { withTranslation } from "../i18n";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Body } from "../../components/Page";
import Hero from "../../components/Hero";
// import Section from '../../components/Section';
import Slider, { SliderPanel } from "../../components/Slider";
import SubscribeForm from "./_form";

const QuemSomos = () => (
  <Body>
    <Hero
      bgColor="nossas.blue"
      Title={
        <Heading as="h1" size="4xl" color="white" maxW={[800]}>
          NOSSAS é a organização que impulsiona o ativismo democrático e
          solidário no Brasil
        </Heading>
      }
      Subtitle={
        <Text fontSize={["2xl"]} color="white" maxW={[500]}>
          Há 10 anos desenvolvemos{" "}
          <b>projetos, táticas e estratégias de mobilização</b> - tudo isso
          resultou em projetos de impacto.
        </Text>
      }
    />
    <Box py={75}>
      <Heading as="h2" color="nossas.green" size="2xl" mb={30} px={90}>
        PROJETOS ATUAIS
      </Heading>
      <Slider height={45} px={20}>
        <div>
          <SliderPanel />
        </div>
        <div>
          <SliderPanel />
        </div>
      </Slider>
    </Box>
    <SubscribeForm />
  </Body>
);

QuemSomos.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default QuemSomos;
