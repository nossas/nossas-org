import { SimpleGrid, Heading, Image, Text, Stack } from "@chakra-ui/react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "../components/Hero";
import Header from "../content/Header";
import { Body, Section } from "../components/Page";
import Donation from "../components/Donation";
import { Navigation } from "../components/Accordion";
import WeAreDoing from "../content/WeAreDoing";
import { ContentMedia } from "../content/ContentMedia";

const Home: React.FC<WithUserAgentProps> = ({ ua }) => {
  const { t } = useTranslation("home");

  return (
    <Body>
      <Hero title={t("cover")} videoUrl="/static/media/covers/home.mp4" />

      <Section id="join-us">
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("header.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          titleColor="orange.main"
          description={t("header.description")}
        />
      </Section>

      <Section
        alignItems="center"
        justifyContent="center"
        direction={["column", null, null, "row"]}
        flexWrap="wrap"
        spacing={16}
        px={["10px", "90px"]}
      >
        <Navigation
          items={[
            {
              title: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("navigation.join-us.title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              ),
              image: "/static/media/s3/mobilizacaohome.png",
              about: t("navigation.join-us.about"),
              navigation: {
                href: "/mobilizations",
                title: t("navigation.join-us.navigate"),
              },
            },
            {
              title: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("navigation.materials.title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              ),
              image: "/static/media/s3/materiaiseducativoshome.png",
              about: t("navigation.materials.about"),
              navigation: {
                href: "/materials",
                title: t("navigation.materials.navigate"),
              },
            },
            {
              title: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("navigation.trainings.title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              ),
              image: "/static/media/s3/treinamentohome.png",
              about: t("navigation.trainings.about"),
              navigation: {
                href: "/trainings",
                title: t("navigation.trainings.navigate"),
              },
            },
            {
              title: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("navigation.incubations.title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              ),
              image: "/static/media/s3/apoioprojetohome.png",
              about: t("navigation.incubations.about"),
              navigation: {
                href: "/incubations",
                title: t("navigation.incubations.navigate"),
              },
            },
            {
              title: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("navigation.technologies.title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              ),
              image: "/static/media/s3/tecnologiashome.png",
              about: t("navigation.technologies.about"),
              navigation: {
                href: "/technologies",
                title: t("navigation.technologies.navigate"),
              },
            },
          ]}
        />
      </Section>

      <WeAreDoing ua={ua} backgroundColor="gray.light" />

      <Section
        alignItems="center"
        direction={["column", null, null, "row"]}
        spacing={["30px"]}
      >
        <SimpleGrid columns={[1, null, null, 2]}>
          <Image
            maxW={[226, 339]}
            maxH={[232, 347]}
            margin="0 auto"
            src="/static/media/s3/sustentabilidade.png"
            alt="Sustentabilidade"
          />

          <Stack
            flex={1.5}
            spacing={8}
            alignItems={["center", null, null, "flex-start"]}
          >
            <Heading
              as="h2"
              size="lg"
              color="green.light"
              mt={7}
              dangerouslySetInnerHTML={{
                __html: t("sustainability.donate", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />

            <Text textAlign={["center", "left"]}>
              {t("sustainability.description")}
            </Text>

            <Donation colorScheme="blue">
              {t("sustainability.navigate")}
            </Donation>
          </Stack>
        </SimpleGrid>
      </Section>

      <ContentMedia
        title={
          <div
            dangerouslySetInnerHTML={{
              __html: t("common:media", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        }
      />
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};

export default withUserAgent(Home);
