import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { WithUserAgentProps } from "next-useragent";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Header } from "../../content";
import { Text, Link, Stack, VStack } from "@chakra-ui/react";
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
        {/* -------------------- */}
        {/* // Nesse trecho a tradução funciona */}
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
            <VStack spacing={7} maxW={725}>
              {/* -------------------- */}
              {/* Já esse trecho não está sendo traduzido */}
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                Nos mobilizamos por inúmeras causas tanto de alcance nacional,
                quanto no âmbito local, por meio da Rede Nossas Cidades, do
                Norte ao Sul do Brasil.
              </Text>
              <Text>
                Foram 15 campanhas vitoriosas em 2021 que mobilizaram milhares
                de pessoas, voluntários e organizações parceiras em todo o país,
                e cujo impacto transformou positivamente a vida de milhares de
                brasileiros.
              </Text>
              <Text>
                Justamente por isso, somos uma fonte quase inesgotável de
                grandes histórias e personagens; desde aqueles que colocam a mão
                na massa para fazer do mundo um lugar mais solidário e
                democrático, àqueles cujas vidas são para sempre transformadas
                pelo nosso trabalho.
              </Text>
              <Text>
                Se você deseja saber mais sobre o que estamos fazendo agora ou
                sobre alguma das nossas campanhas ativas, escreva para a gente
                em {nossasEmail}.
              </Text>
            </VStack>
          }
        />
      </Section>

      <Section bgColor="gray.light">
        <Header
          titleColor="pink.main"
          title={
            <>
              Sobre <b>o Nossas</b>
            </>
          }
          description={
            <>
              <Stack spacing={7}>
                <Text>
                  O NOSSAS impulsiona o ativismo solidário e democrático no
                  Brasil. Temos como missão fortalecer os movimentos e pessoas
                  que estejam se organizando para fazer a diferença no país, e
                  fazemos isso compartilhando metodologias, dando treinamentos e
                  oferecendo uma plataforma online de petições e campanhas, o
                  BONDE.
                </Text>
                <Text>Acompanhe o nosso trabalho pelos nossos canais:</Text>
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
      ...(await serverSideTranslations(locale, ["common", "trainings"])),
    },
  };
};

export default Press;
