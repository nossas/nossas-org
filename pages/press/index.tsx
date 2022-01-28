import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { WithUserAgentProps } from "next-useragent";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Header } from "../../content";
import { Text, Link, Stack } from "@chakra-ui/react";
import SocialMedia from "./SocialMedia";
import { useTranslation } from "next-i18next";

const Press: React.FC<WithUserAgentProps> = () => {
  const { t } = useTranslation("press");

  const nossasEmail = (
    <Link href="mailto:imprensa@nossas.org">imprensa@nossas.org</Link>
  );

  return (
    <Body>
      <Hero
        bgImage="/static/media/covers/header-press.png"
        title="Imprensa"
        titleColor="white"
        titleAlign="center"
      />

      <Section>
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("journalist.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={
            <Stack spacing={7} maxW={725}>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p1", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p2", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p3", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p4", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p5", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />{" "}
                {nossasEmail}
              </Text>
            </Stack>
          }
        />
      </Section>

      <Section bgColor="gray.light">
        <Header
          titleColor="pink.main"
          title={t("journalist.about")}
          description={
            <>
              <Stack spacing={7}>
                <Text>{t("journalist.description")}</Text>
                <Text>{t("journalist.description2")}</Text>
                <SocialMedia />
              </Stack>
            </>
          }
        ></Header>
      </Section>
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "press"])),
    },
  };
};

export default Press;
