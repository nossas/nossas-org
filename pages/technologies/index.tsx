import React from "react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box, Heading, Link, Img as Image, SimpleGrid } from "@chakra-ui/react";

import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { ImageTextListBox } from "../../content";
import { SliderPanel } from "../../components/Slider";
import Header from "../../content/Header";
import { Carousel } from "../../components/Slider";
import { ImageTextIncubations } from "../../components/Slider/ImageTextIncubations";

import {
  Computer,
  Megaphone,
  Redes,
  Money,
} from "../../components/IconsSVG/Functionalities";

const Technologies: React.FC<WithUserAgentProps> = ({ ua }) => {
  const { t } = useTranslation("technologies");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="380px"
        videoUrl="/static/media/covers/technologies.mp4"
        title={t("cover")}
        titleColor="white"
        titleAlign="center"
      />

      <Section>
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("begin.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={t("begin.description")}
        />
      </Section>

      <ImageTextListBox
        maxWidth="1400px"
        title={t("functionalities.title")}
        description={t("functionalities.description")}
        items={[
          {
            icon: <Computer />,
            description: t("functionalities.items.computer"),
          },
          {
            icon: <Redes />,
            description: t("functionalities.items.redes"),
          },
          {
            icon: <Megaphone />,
            description: t("functionalities.items.communication"),
          },
          {
            icon: <Money />,
            description: t("functionalities.items.money"),
          },
        ]}
      />

      <Section direction="column" spacing={8}>
        <Heading as="h2" size="lg" color="blue.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("technologies.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <Carousel
          infiniteLoop
          showStatus
          items={[
            <ImageTextIncubations
              src="/static/media/s3/bonde.png"
              title={t("technologies.carousel.1.title")}
              description={t("technologies.carousel.1.description")}
              href="https://bonde.org/"
              linkText={t("technologies.carousel.1.action")}
            />,
            <ImageTextIncubations
              src="/static/media/s3/pdp.png"
              title={t("technologies.carousel.2.title")}
              description={t("technologies.carousel.2.description")}
            />,
            <ImageTextIncubations
              src="/static/media/s3/defezap.png"
              title={t("technologies.carousel.3.title")}
              description={t("technologies.carousel.3.description")}
              href="https://www.defezap.org.br/"
              linkText={t("technologies.carousel.3.action")}
            />,
            <ImageTextIncubations
              src="/static/media/s3/mapadoacolhimento.png"
              title={t("technologies.carousel.4.title")}
              description={t("technologies.carousel.4.description")}
              href="https://www.mapadoacolhimento.org/"
              linkText={t("technologies.carousel.4.action")}
            />,
            <ImageTextIncubations
              src="/static/media/s3/beta.png"
              title={t("technologies.carousel.5.title")}
              description={t("technologies.carousel.5.description")}
              href="https://www.beta.org.br/"
              linkText={t("technologies.carousel.5.action")}
            />,
          ]}
        />
      </Section>

      <Section
        direction={["column", null, null, "row"]}
        justifyContent="space-between"
        spacing={8}
        backgroundColor="#F7F7F7"
      >
        <Heading as="h2" color="blue.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("who-used.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>

        <Box>
          <SimpleGrid
            columns={[1, null, null, 3]}
            gap="30px"
            alignItems="center"
            justifyItems="center"
            marginBottom="30px"
          >
            <Link href="https://igarape.org.br/" target="_blank">
              <Image src="/static/media/s3/institutoigarape.png" />
            </Link>
            <Link href="http://www.global.org.br/" target="_blank">
              <Image src="/static/media/s3/justicaglobal.png" />
            </Link>
            <Link
              href="https://transparenciainternacional.org.br/"
              target="_blank"
            >
              <Image src="/static/media/s3/transparenciainternacional.png" />
            </Link>
            <Link href="https://www.techo.org/" target="_blank">
              <Image src="/static/media/s3/teto.png" />
            </Link>
            <Link href="https://www.conectas.org/" target="_blank">
              <Image src="/static/media/s3/conectas.png" />
            </Link>
            <Link
              href="https://www.institutomariellefranco.org/"
              target="_blank"
            >
              <Image src="/static/media/s3/mariellefranco.png" />
            </Link>
          </SimpleGrid>
          <SimpleGrid
            columns={[1, null, null, 4]}
            rowGap="30px"
            alignItems="center"
            justifyItems="center"
          >
            <Link href="https://abong.org.br/" target="_blank">
              <Image src="/static/media/s3/abong.png" />
            </Link>
            <Link href="https://www.wwf.org.br/" target="_blank">
              <Image src="/static/media/s3/wwf.png" />
            </Link>
            <Link href="https://allout.org/pt" target="_blank">
              <Image src="/static/media/s3/allout.png" />
            </Link>
            <Link href="https://soudapaz.org/" target="_blank">
              <Image src="/static/media/s3/institutosoudapaz.png" />
            </Link>
          </SimpleGrid>
        </Box>
      </Section>

      <Section direction="column" spacing="30px">
        <Heading as="h2" color="orange.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("campaigns.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <SliderPanel
          infiniteLoop
          isMobile={ua?.isMobile || false}
          items={[
            {
              src: "/static/media/s3/saldaoamazonia.png",
              alt: "Saldão da Amazônia",
              title: "Saldão da Amazônia",
              description: t("campaigns.carousel.amazonia"),
              href: "https://www.saldaodaamazonia.org.br/",
            },
            {
              src: "/static/media/s3/maisquepalmas.png",
              alt: "Mais do que palmas",
              title: "Mais do que palmas",
              description: t("campaigns.carousel.palmas"),
              href: "http://www.mais-que-palmas.bonde.org/",
            },
            {
              src: "/static/media/s3/ahoraeagora.png",
              alt: "A hora é agora",
              title: "A hora é agora",
              description: t("campaigns.carousel.agora"),
              href: "https://www.stf.alloutbrasil.org/",
            },
          ]}
        />
      </Section>
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "technologies"])),
    },
  };
};

export default withUserAgent(Technologies);
