import React from "react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Heading } from "@chakra-ui/react";

import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import Header from "../../content/Header";
import WeAreDoing from "../../content/WeAreDoing";
import { SliderPanel } from "../../components/Slider";

const Mobilizations: React.FC<WithUserAgentProps> = ({ ua }) => {
  const { t } = useTranslation("mobilizations");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="470px"
        bgImage="/static/media/covers/mobilizations.png"
        title={t("cover")}
        titleColor="white"
        titleAlign="center"
      />
      <Section>
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("action-now.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={t("action-now.description")}
        />
      </Section>

      <WeAreDoing ua={ua} />

      <Section direction={["column"]} spacing="30px" bgColor="gray.light">
        <Heading as="h2" color="blue.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("our-victories.title", {
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
              src: "/static/media/our-victories/acolhimento-não-se-terceiriza.png",
              alt: t("our-victories.carousel.1.title"),
              title: t("our-victories.carousel.1.title"),
              description: t("our-victories.carousel.1.description"),
              href: "https://www.acolhimentonaoseterceiriza.minhasampa.org.br/",
            },
            {
              src: "/static/media/our-victories/meia-entrada-sim.png",
              alt: t("our-victories.carousel.2.title"),
              title: t("our-victories.carousel.2.title"),
              description: t("our-victories.carousel.2.description"),
              href: "https://www.meiaentradasim.minhasampa.org.br/",
            },
            {
              src: "/static/media/our-victories/meu-corpo-meu-diu.png",
              alt: t("our-victories.carousel.3.title"),
              title: t("our-victories.carousel.3.title"),
              description: t("our-victories.carousel.3.description"),
              href: "https://www.meucorpomeudiu.nossas.org/",
            },
            {
              src: "/static/media/our-victories/camarotedavacina.jpg",
              alt: t("our-victories.carousel.4.title"),
              title: t("our-victories.carousel.4.title"),
              description: t("our-victories.carousel.4.description"),
              href: "https://www.camarotedavacinanao.nossas.org.br/",
            },
            {
              src: "/static/media/our-victories/restingaemangue.png",
              alt: t("our-victories.carousel.5.title"),
              title: t("our-victories.carousel.5.title"),
              description: t("our-victories.carousel.5.description"),
              href: "https://www.restingaemangueficam.nossas.org/",
            },
            {
              src: "/static/media/our-victories/rededeprotecao.jpg",
              alt: t("our-victories.carousel.6.title"),
              title: t("our-victories.carousel.6.title"),
              description: t("our-victories.carousel.6.description"),
              href: "https://www.auxilioparasaude.nossas.org.br/",
            },
            {
              src: "/static/media/our-victories/semaulasemenem.jpg",
              alt: t("our-victories.carousel.7.title"),
              title: t("our-victories.carousel.7.title"),
              description: t("our-victories.carousel.7.description"),
              href: "https://www.semaulasemenem.nossas.org.br/",
            },
            {
              src: "/static/media/our-victories/renda-basica.jpg",
              alt: t("our-victories.carousel.8.title"),
              title: t("our-victories.carousel.8.title"),
              description: t("our-victories.carousel.8.description"),
              href: "https://www.rendabasica.org.br/",
            },
            {
              src: "/static/media/our-victories/paulista.jpg",
              alt: t("our-victories.carousel.9.title"),
              title: t("our-victories.carousel.9.title"),
              description: t("our-victories.carousel.9.description"),
              href: "https://www.paulistaaberta.minhasampa.org.br/",
            },
            {
              src: "/static/media/our-victories/escola.jpg",
              alt: t("our-victories.carousel.10.title"),
              title: t("our-victories.carousel.10.title"),
              description: t("our-victories.carousel.10.description"),
              href: "https://www.escolanaosedestroi.meurio.org.br/",
            },
            {
              src: "/static/media/our-victories/rio-sem-canudo.jpg",
              alt: t("our-victories.carousel.11.title"),
              title: t("our-victories.carousel.11.title"),
              description: t("our-victories.carousel.11.description"),
              href: "https://www.riosemcanudo.meurio.org.br/",
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
      ...(await serverSideTranslations(locale, ["common", "mobilizations"])),
    },
  };
};

export default withUserAgent(Mobilizations);
