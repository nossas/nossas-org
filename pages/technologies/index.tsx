import React from "react";
import { withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Button,
  Heading,
  Text,
  Link,
  Stack,
  Img as Image,
  SimpleGrid,
  AspectRatio,
} from "@chakra-ui/react";

import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { ImageTextListBox } from "../../content";
import { SliderPanel } from "../../components/Slider";

const Technologies = ({ ua }) => {
  const { t } = useTranslation("common");

  return (
    <Body>
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
        <Text>{t("content:blocks.technologies.emergence.description")}</Text>
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
        justifyContent="space-between"
        spacing={8}
      >
        <Heading as="h2" variant="tag">
          {t("content:blocks.technologies.video.title")}
        </Heading>
        <AspectRatio
          maxH={["315px", null, null, null, "460px"]}
          width={["auto", null, "560px", null, "820px"]}
          ratio={16 / 9}
        >
          <iframe
            title="BONDE"
            src="https://www.youtube.com/embed/I946ueDvVmI"
          />
        </AspectRatio>
      </Section>
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
          isMobile={ua ? ua.isMobile : false}
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
              href: "https://www.saldaodaamazonia.org.br/",
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
                "content:blocks.technologies.campaingStories.carousel.2.description"
              ),
              link: t(
                "content:blocks.technologies.campaingStories.carousel.action"
              ),
              href: "https://www.amazoniacontracovid.org.br/",
            },
            {
              src: "/static/media/s3/maisquepalmas.jpg",
              alt: t(
                "content:blocks.technologies.campaingStories.carousel.3.title"
              ),
              title: t(
                "content:blocks.technologies.campaingStories.carousel.3.title"
              ),
              description: t(
                "content:blocks.technologies.campaingStories.carousel.3.description"
              ),
              link: t(
                "content:blocks.technologies.campaingStories.carousel.action"
              ),
              href: "https://www.maisdoquepalmas.com.br/",
            },
            {
              src: "/static/media/s3/ahoraeagora.jpg",
              alt: t(
                "content:blocks.technologies.campaingStories.carousel.4.title"
              ),
              title: t(
                "content:blocks.technologies.campaingStories.carousel.4.title"
              ),
              description: t(
                "content:blocks.technologies.campaingStories.carousel.4.description"
              ),
              link: t(
                "content:blocks.technologies.campaingStories.carousel.action"
              ),
              href: "https://www.stf.alloutbrasil.org/",
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
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "content"])),
  },
});

export default withUserAgent(Technologies);
