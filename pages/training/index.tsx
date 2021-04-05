import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
// import { Heading, Link, Text, Stack, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Heading, Text, Image, Stack, Button, Box } from "@chakra-ui/react";
import { SliderPanel } from "../../components/Slider";
// import { DescriptionBox, SubscribeForm, ImageTextListBox } from "../../content";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Mobilizations: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    {/* Cover */}
    <Hero
      maxWidth="1440px"
      bgImage="/static/media/covers/capa-treinamento.png"
      title={t("content:covers.training.title")}
      titleColor="white"
      titleAlign="center"
    />

    <Section
      direction={["column", null, null, "row"]}
      spacing={["30px", null, null, "254px"]}
    >
      <Heading as="h2" color="blue.main" maxW="270px">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.training.done.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <Text maxW="668px">{t("content:blocks.training.done.description")}</Text>
    </Section>

    <Section direction={["column"]} spacing={["30px"]}>
      <Heading as="h2" color="pink.main">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.training.doing.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <SliderPanel
        isMobile={ua.isMobile}
        infiniteLoop
        items={[
          {
            src: "/static/media/s3/muvuca.png",
            alt: t("content:blocks.training.doing.carousel.1.title"),
            title: t("content:blocks.training.doing.carousel.1.title"),
            description: t(
              "content:blocks.training.doing.carousel.1.description"
            ),
            href: "https://www.muvuca.nossas.org/",
            link: t("content:blocks.training.doing.carousel.1.action"),
          },
          {
            src: "/static/media/s3/programademobilizadores.png",
            alt: t("content:blocks.training.doing.carousel.2.title"),
            title: t("content:blocks.training.doing.carousel.2.title"),
            description: t(
              "content:blocks.training.doing.carousel.2.description"
            ),
            href: "https://mobilizadores.nossas.org/",
            link: t("content:blocks.training.doing.carousel.2.action"),
          },
          {
            src: "/static/media/s3/jovens-mobilizadoras.png",
            alt: t("content:blocks.training.doing.carousel.3.title"),
            title: t("content:blocks.training.doing.carousel.3.title"),
            description: t(
              "content:blocks.training.doing.carousel.3.description"
            ),
            href: "https://www.programademobilizadoras.nossas.org/",
            link: t("content:blocks.training.doing.carousel.3.action"),
          },
        ]}
      />
    </Section>

    <Section direction={["column"]} spacing="30px" bgColor="gray.light">
      <Heading as="h2" color="blue.main">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.training.victories.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <SliderPanel
        infiniteLoop
        isMobile={ua.isMobile}
        items={[
          {
            src: "/static/media/s3/boonline.png",
            alt: t("content:blocks.training.victories.carousel.1.title"),
            title: t("content:blocks.training.victories.carousel.1.title"),
            description: t(
              "content:blocks.training.victories.carousel.1.description"
            ),
            href: "https://www.boonlineparaelas.bonde.org/",
            link: t("content:blocks.training.victories.carousel.action"),
          },
          {
            src: "/static/media/s3/revitalizacao.png",
            alt: t("content:blocks.training.victories.carousel.2.title"),
            title: t("content:blocks.training.victories.carousel.2.title"),
            description: t(
              "content:blocks.training.victories.carousel.2.description"
            ),
            href: "https://revitalizafarol.bonde.org",
            link: t("content:blocks.training.victories.carousel.action"),
          },
        ]}
      />
    </Section>

    <Section
      alignItems="center"
      direction={["column", null, null, "row"]}
      spacing={["30px"]}
    >
      <Box flex="1">
        <Image src="/static/media/s3/man.png" margin="0 auto" />
      </Box>
      <Stack
        textAlign={["center", null, null, "left"]}
        spacing={["20px"]}
        flex="1"
      >
        <Heading as="h2" maxW="510px" color="green">
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.training.program.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <Text>{t("content:blocks.training.program.description")}</Text>
        <Button maxW="190px" marginX={["auto", null, null, "0"]}>
          {t("content:blocks.training.program.button")}
        </Button>
      </Stack>
    </Section>
  </Body>
);

Mobilizations.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Mobilizations)
);
