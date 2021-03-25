// https://youtu.be/I946ueDvVmI
import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
// import styled from "@emotion/styled";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import {
  Button,
  Heading,
  Text,
  Link,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
// import { SliderPanel } from "../../components/Slider";
import { ImageTextListBox } from "../../content";
import { SliderPanel } from "../../components/Slider";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Technologies: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    {/* Cover */}
    <Hero
      maxWidth="470px"
      videoUrl="/static/media/covers/technologies.mp4"
      title={t("content:covers.technologies.title")}
      titleColor="white"
      titleAlign="center"
    />
    <Section
      columns={[1, null, null, 2]}
      templateColumns={["auto", null, null, "260px 1fr"]}
      columnGap="225px"
      rowGap="25px"
    >
      <Heading as="h2" color="blue.main">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.technologies.emergence.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <Stack spacing={6}>
        <Text>{t("content:blocks.technologies.emergence.description")}</Text>
        <Link
          href="#"
          variant="pink"
          title={t("content:blocks.technologies.emergence.more")}
        >
          {t("content:blocks.technologies.emergence.more")}
        </Link>
      </Stack>
    </Section>
    <ImageTextListBox
      title={t("content:blocks.technologies.functionalities.title")}
      items={[
        {
          src: "/static/media/assets/icon-computer.png",
          alt: "Icone Mobiização",
          description: t(
            "content:blocks.technologies.functionalities.mobilizations"
          ),
        },
        {
          src: "/static/media/assets/icon-mail.png",
          alt: "Icone Pressão",
          description: t(
            "content:blocks.technologies.functionalities.pressure"
          ),
        },
        {
          src: "/static/media/assets/icon-money.png",
          alt: "Icone Doação",
          description: t(
            "content:blocks.technologies.functionalities.donation"
          ),
        },
        {
          src: "/static/media/assets/icon-hand.png",
          alt: "Icone Formulário",
          description: t("content:blocks.technologies.functionalities.form"),
        },
        {
          src: "/static/media/assets/icon-megaphone.png",
          alt: "Icone Rede Solidariedade",
          description: t("content:blocks.technologies.functionalities.redes"),
        },
      ]}
    />
    <Section
      direction={["column", null, null, "row"]}
      spacing={["30px", null, null, "140px"]}
    >
      <Heading as="h2" color="blue.main" maxW={["100%", null, null, "350px"]}>
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.technologies.partners", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <SimpleGrid
        columns={[1, null, null, 3]}
        rowGap="30px"
        alignItems="center"
        justifyItems="center"
      >
        <Link href="https://www.institutomariellefranco.org/" target="_blank">
          <Image src="/static/media/s3/mariellefranco.png" />
        </Link>
        <Link href="https://allout.org/pt" target="_blank">
          <Image src="/static/media/s3/allout.png" />
        </Link>
        <Link href="https://criola.org.br/" target="_blank">
          <Image src="/static/media/s3/criola.png" />
        </Link>
      </SimpleGrid>
    </Section>
    <Section direction="column" spacing="30px">
      <Heading as="h2" color="pink.main">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.technologies.campaingStories.title", {
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
            src: "/static/media/s3/saldaoamazonia.png",
            alt: t(
              "content:blocks.technologies.campaingStories.carousel.1.title"
            ),
            title: t(
              "content:blocks.technologies.campaingStories.carousel.1.title"
            ),
            description: t(
              "content:blocks.technologies.campaingStories.carousel.1.description"
            ),
            link: t(
              "content:blocks.technologies.campaingStories.carousel.action"
            ),
            href: "#",
          },
          {
            src: "/static/media/s3/amazoniacontracovid.png",
            alt: t(
              "content:blocks.technologies.campaingStories.carousel.2.title"
            ),
            title: t(
              "content:blocks.technologies.campaingStories.carousel.2.title"
            ),
            description: t(
              "content:blocks.technologies.campaingStories.carousel.1.description"
            ),
            link: t(
              "content:blocks.technologies.campaingStories.carousel.action"
            ),
            href: "#",
          },
        ]}
      />
    </Section>
    <Section direction={["column", null, null, "row"]} spacing="120px">
      <Image
        src="/static/media/s3/technologies-computer.png"
        alt="Computer Image"
        transform="scale(0.8)"
      />
      <Stack spacing="30px">
        <Heading as="h2" color="green" maxW="300px" size="lg">
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.technologies.bonde.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <Text>{t("content:blocks.technologies.bonde.description")}</Text>
        <Button maxW="190px">
          {t("content:blocks.technologies.bonde.button")}
        </Button>
      </Stack>
    </Section>
  </Body>
);

Technologies.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Technologies)
);

// mobilizations
// pressure
// donation
// form
// redes
