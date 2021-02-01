import React from "react";
import { NextPage } from "next";
import { I18nInitialProps } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Heading, Text } from "@chakra-ui/react";
import { Body } from "../../components/Page";
import Hero from "../../components/Hero";
import SubscribeForm from "./_form";

const QuemSomos: NextPage<WithUserAgentProps, I18nInitialProps> = ({ ua }) => (
  <Body isMobile={ua.isMobile}>
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
    <SubscribeForm />
  </Body>
);

QuemSomos.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withUserAgent(QuemSomos);
