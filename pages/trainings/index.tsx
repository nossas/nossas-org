import React from "react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Heading,
  Text,
  Image,
  Stack,
  SimpleGrid,
  Button,
  Box,
} from "@chakra-ui/react";

import Header from "../../content/Header";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { SliderPanel, Carousel, ImageText } from "../../components/Slider";

const Trainings: React.FC<WithUserAgentProps> = ({ ua }) => {
  const { t, i18n } = useTranslation("trainings");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="1440px"
        videoUrl="/static/media/covers/trainings.mp4"
        title={t("cover")}
        titleColor="white"
        titleAlign="center"
        titleMaxW={518}
      />

      <Section>
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("learning.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={t("learning.description")}
        />
      </Section>

      <Section direction={["column"]} spacing={["30px"]}>
        <Heading as="h2" color="orange.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("now.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <SliderPanel
          isMobile={ua?.isMobile || false}
          infiniteLoop
          items={[
            {
              src: "/static/media/trainings/geracao-que-move.png",
              href: "https://geracaoquemove.nossas.org/",
              alt: t("now.carousel.1.title"),
              title: t("now.carousel.1.title"),
              description: t("now.carousel.1.description"),
              link: t("now.carousel.1.action"),
            },

            {
              src: "/static/media/trainings/programa-de-mobilizadores.png",
              href: "https://mobilizadores.nossas.org/",
              alt: t("now.carousel.3.title"),
              title: t("now.carousel.3.title"),
              description: t("now.carousel.3.description"),
              link: t("now.carousel.3.action"),
            },
          ]}
        />
      </Section>

      <Section direction={["column"]} spacing="30px" bgColor="gray.light">
        <Heading as="h2" color="blue.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("victories.title", {
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
              src: "/static/media/trainings/our-victories/muvuca.png",
              href: "https://www.muvuca.nossas.org/",
              alt: t("victories.carousel.muvuca.title"),
              title: t("victories.carousel.muvuca.title"),
              description: t("victories.carousel.muvuca.description"),
              link: t("victories.carousel.muvuca.action"),
            },
            {
              src:
                "/static/media/trainings/our-victories/jovens-mobilizadoras.png",
              href: "https://www.programademobilizadoras.nossas.org/",
              alt: t("victories.carousel.jovens-mobilizadoras.title"),
              title: t("victories.carousel.jovens-mobilizadoras.title"),
              description: t(
                "victories.carousel.jovens-mobilizadoras.description"
              ),
              link: t("victories.carousel.jovens-mobilizadoras.action"),
            },
            {
              src: "/static/media/s3/boonline.png",
              href: "https://www.boonlineparaelas.bonde.org/",
              alt: t("victories.carousel.1.title"),
              title: t("victories.carousel.1.title"),
              description: t("victories.carousel.1.description"),
              link: t("victories.carousel.1.action"),
            },
            {
              src: "/static/media/s3/revitalizacao.png",
              href: "https://revitalizafarol.bonde.org",
              alt: t("victories.carousel.2.title"),
              title: t("victories.carousel.2.title"),
              description: t("victories.carousel.2.description"),
              link: t("victories.carousel.2.action"),
            },
          ]}
        />
      </Section>

      <Section direction="column" spacing="30px">
        <Heading as="h2" color="orange.main" size="lg" fontWeight="bold">
          <div
            dangerouslySetInnerHTML={{
              __html: t("testimonials.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <Carousel
          infiniteLoop
          showStatus
          items={[
            <ImageText
              src="/static/media/s3/depoimento.jpg"
              description={t("testimonials.carousel.1.description")}
              userName={t("testimonials.carousel.1.people")}
            />,
            <ImageText
              src="/static/media/s3/depoimento2.jpg"
              description={t("testimonials.carousel.2.description")}
              userName={t("testimonials.carousel.2.people")}
            />,
            <ImageText
              src="/static/media/s3/depoimento3.jpg"
              description={t("testimonials.carousel.3.description")}
              userName={t("testimonials.carousel.3.people")}
            />,
          ]}
        />
      </Section>

      {i18n.language === "pt-BR" && (
        <Section>
          <SimpleGrid
            columns={[1, null, null, 2]}
            templateColumns={["auto", null, null, "582px auto"]}
            rowGap="30px"
          >
            <Box>
              <Image src="/static/media/s3/man.png" margin="0 auto" />
            </Box>
            <Stack
              textAlign={["center", null, null, "left"]}
              spacing={["20px"]}
            >
              <Heading as="h2" color="green">
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("participate.title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Heading>
              <Text>{t("participate.description")}</Text>
            </Stack>
          </SimpleGrid>
        </Section>
      )}
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "trainings"])),
    },
  };
};

export default withUserAgent(Trainings);
