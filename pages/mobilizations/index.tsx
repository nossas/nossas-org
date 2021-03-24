import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
// import { Heading, Link, Text, Stack, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Heading, Text } from "@chakra-ui/react";
import { SliderPanel } from "../../components/Slider";
// import { DescriptionBox, SubscribeForm, ImageTextListBox } from "../../content";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Mobilizations: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    {/* Cover */}
    <Hero
      maxWidth="470px"
      bgImage="/static/media/covers/mobilizations.png"
      title={t("content:covers.mobilizations.title")}
      titleColor="white"
      titleAlign="center"
    />
    <Section
      columns={[1, null, null, 2]}
      templateColumns={["auto", null, null, "100px 1fr"]}
      columnGap="100px"
      rowGap="25px"
    >
      <Heading as="h2" variant="tag">
        {t("content:blocks.mobilizations.done.title")}
      </Heading>
      <Text>{t("content:blocks.mobilizations.done.description")}</Text>
    </Section>
    <Section direction={["column"]} spacing="30px">
      <Heading as="h2" color="pink.main">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.mobilizations.doing.title", {
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
            src: "/static/media/s3/auxilioemergencial.png",
            alt: t("content:blocks.mobilizations.doing.carousel.1.title"),
            title: t("content:blocks.mobilizations.doing.carousel.1.title"),
            description: t(
              "content:blocks.mobilizations.doing.carousel.1.description"
            ),
            href: "https://www.auxilioateofimdapandemia.org/",
            link: t("content:blocks.mobilizations.doing.carousel.action"),
          },
          {
            src: "/static/media/s3/respiramanaus.png",
            alt: t("content:blocks.mobilizations.doing.carousel.2.title"),
            title: t("content:blocks.mobilizations.doing.carousel.2.title"),
            description: t(
              "content:blocks.mobilizations.doing.carousel.2.description"
            ),
            href: "https://www.respiramanaus.nossas.org/",
            link: t("content:blocks.mobilizations.doing.carousel.action"),
          },
        ]}
      />
    </Section>
    <Section direction={["column"]} spacing="30px" bgColor="gray.light">
      <Heading as="h2" color="blue.main">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.mobilizations.victories.title", {
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
            src: "/static/media/s3/restingaemangue.png",
            alt: t("content:blocks.mobilizations.victories.carousel.1.title"),
            title: t("content:blocks.mobilizations.victories.carousel.1.title"),
            description: t(
              "content:blocks.mobilizations.victories.carousel.1.description"
            ),
            href: "https://www.restingaemangueficam.org.br/",
            link: t("content:blocks.mobilizations.victories.carousel.action"),
          },
          {
            src: "/static/media/s3/4gpraestudar.png",
            alt: t("content:blocks.mobilizations.victories.carousel.2.title"),
            title: t("content:blocks.mobilizations.victories.carousel.2.title"),
            description: t(
              "content:blocks.mobilizations.victories.carousel.2.description"
            ),
            href: "https://www.4gparaestudar.org.br/",
            link: t("content:blocks.mobilizations.victories.carousel.action"),
          },
          {
            src: "/static/media/s3/auxiliosaude.png",
            alt: t("content:blocks.mobilizations.victories.carousel.3.title"),
            title: t("content:blocks.mobilizations.victories.carousel.3.title"),
            description: t(
              "content:blocks.mobilizations.victories.carousel.3.description"
            ),
            href: "#",
            link: t("content:blocks.mobilizations.victories.carousel.action"),
          },
        ]}
      />
    </Section>
  </Body>
);

Mobilizations.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Mobilizations)
);
