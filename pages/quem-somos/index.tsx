import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import {
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Body, Section, TagAsTitle } from "../../components/Page";
import Hero from "../../components/Hero";
import Timeline, {
  ImageText,
  TimelineController,
} from "../../components/Timeline";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const QuemSomos: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    <Hero
      bgColor="white"
      Title={
        <Heading
          as="h1"
          size="4xl"
          fontWeight="700"
          color="nossas.blue"
          maxW={[710]}
        >
          {t("covers.home.title")}
        </Heading>
      }
    />
    <Section direction="row" spacing="115px">
      <TagAsTitle>História</TagAsTitle>
      <Text maxW={["925px"]}>
        O NOSSAS nasceu em 2011. De lá para cá, reunimos milhares de pessoas em
        torno de causas, desenvolvemos projetos, fizemos inúmeras campanhas de
        impacto, conseguimos a implementação de políticas públicas importantes e
        avançamos na construção de redes de solidariedade.
      </Text>
    </Section>
    <Section direction="column" spacing="55px">
      <TagAsTitle>Linha do tempo</TagAsTitle>
      <TimelineController
        isMobile={ua.isMobile}
        items={{
          2011: [
            {
              src: "/static/media/timeline/meurio.png",
              text: t("timeline.2011.meurio"),
            },
          ],
          2014: [
            {
              src: "/static/media/timeline/minhasampa.png",
              text: t("timeline.2014.minhasampa"),
            },
            {
              src: "/static/media/timeline/rnc.png",
              text: t("timeline.2014.rnc"),
            },
          ],
          2016: [
            {
              src: "/static/media/timeline/defezap.png",
              text: t("timeline.2016.defezap"),
            },
            {
              src: "/static/media/timeline/mapadoacolhimento.png",
              text: t("timeline.2016.mapadoacolhimento"),
            },
          ],
          2017: [
            {
              src: "/static/media/timeline/instintodevida.png",
              text: t("timeline.2017.instintodevida"),
            },
            {
              src: "/static/media/timeline/beta.png",
              text: t("timeline.2017.beta"),
            },
          ],
        }}
      />
    </Section>
  </Body>
);

QuemSomos.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(withTranslation("content")(QuemSomos));
