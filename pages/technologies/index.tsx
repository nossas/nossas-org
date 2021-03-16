// https://youtu.be/I946ueDvVmI
import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
// import styled from "@emotion/styled";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import Media from "../../components/Media";
import { Button, Heading, Text, Link, Stack, Image } from "@chakra-ui/react";
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
      templateColumns={["auto", null, null, "270px 1fr"]}
      columnGap="245px"
      rowGap="25px"
    >
      <Heading as="h2" color="blue.main" size="lg">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.technologies.emergence.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <Stack>
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
          src: "/static/media/assets/icon-eyelash.png",
          alt: "Icone Eyelash",
          description: t(
            "content:blocks.technologies.functionalities.mobilizations"
          ),
        },
        {
          src: "/static/media/assets/icon-launch.png",
          alt: "Icone Launch",
          description: t(
            "content:blocks.technologies.functionalities.pressure"
          ),
        },
        {
          src: "/static/media/assets/icon-question.png",
          alt: "Icone Question",
          description: t(
            "content:blocks.technologies.functionalities.donation"
          ),
        },
        {
          src: "/static/media/assets/icon-launch.png",
          alt: "Icone Launch",
          description: t("content:blocks.technologies.functionalities.form"),
        },
        {
          src: "/static/media/assets/icon-question.png",
          alt: "Icone Question",
          description: t("content:blocks.technologies.functionalities.redes"),
        },
      ]}
    />
    <Media
      title={
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.technologies.partners", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      }
      logos={[
        "/static/media/s3/dias.png",
        "/static/media/s3/reuters.png",
        "/static/media/s3/nyt.png",
        "/static/media/s3/piaui.png",
        "/static/media/s3/elpais.png",
        "/static/media/s3/forbes.png",
        "/static/media/s3/ted.png",
        "/static/media/s3/zeitgeist.png",
      ]}
    />
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
        isMobile={ua.isMobile}
        items={[
          {
            src: "/static/media/s3/doing-carousel/x1.png",
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
            src: "/static/media/s3/doing-carousel/x2.png",
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
        <Heading as="h2" color="green" maxW="230px">
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
