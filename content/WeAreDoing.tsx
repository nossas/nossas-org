import React from "react";
import { useTranslation } from "next-i18next";
import { Heading } from "@chakra-ui/react";

import { Section } from "../components/Page";
import { SliderPanel } from "../components/Slider";

type Props = {
  ua: any;
  backgroundColor?: string;
};

const WeAreDoing: React.FC<Props> = ({ ua, backgroundColor }) => {
  const { t } = useTranslation("common");

  return (
    <Section
      id="we-are-doing"
      direction="column"
      spacing={8}
      backgroundColor={backgroundColor}
    >
      <Heading
        as="h2"
        size="lg"
        color="pink.main"
        dangerouslySetInnerHTML={{
          __html: t("we-are-doing.title", {
            interpolation: { escapeValue: false },
          }),
        }}
      ></Heading>

      <SliderPanel
        infiniteLoop
        isMobile={ua?.isMobile || false}
        items={[
          {
            src: "/static/media/we-are-doing/estação-acolhedora.png",
            href: "https://estacaoacolhedora.minhasampa.org.br/",
            alt: t("we-are-doing.sliders.estação-acolhedora.title"),
            title: t("we-are-doing.sliders.estação-acolhedora.title"),
            description: t(
              "we-are-doing.sliders.estação-acolhedora.description"
            ),
            link: t("we-are-doing.sliders.estação-acolhedora.navigate"),
          },
          {
            src: "/static/media/we-are-doing/amazonia-de-pe.png",
            href: "https://amazoniadepe.org.br/",
            alt: t("we-are-doing.sliders.1.title"),
            title: t("we-are-doing.sliders.1.title"),
            description: t("we-are-doing.sliders.1.description"),
            link: t("we-are-doing.sliders.1.navigate"),
          },
          {
            src: "/static/media/we-are-doing/observatorio-cidade-integrada.png",
            href: "https://www.observatoriocidadeintegrada.org/",
            alt: t("we-are-doing.sliders.2.title"),
            title: t("we-are-doing.sliders.2.title"),
            description: t("we-are-doing.sliders.2.description"),
            link: t("we-are-doing.sliders.2.navigate"),
          },
          {
            src: "/static/media/we-are-doing/lei-de-cotas.png",
            href: "https://www.cotasraciais.org/",
            alt: t("we-are-doing.sliders.4.title"),
            title: t("we-are-doing.sliders.4.title"),
            description: t("we-are-doing.sliders.4.description"),
            link: t("we-are-doing.sliders.4.navigate"),
          },
          {
            src: "/static/media/we-are-doing/aposentadoria-maes.png",
            href: "https://aposentadoriaparamaes.nossas.org/",
            alt: t("we-are-doing.sliders.7.title"),
            title: t("we-are-doing.sliders.7.title"),
            description: t("we-are-doing.sliders.7.description"),
            link: t("we-are-doing.sliders.7.navigate"),
          },
          {
            src: "/static/media/we-are-doing/trabalho-infantil-nao.png",
            href: "https://trabalhoinfantilnao.nossas.org/",
            alt: t("we-are-doing.sliders.8.title"),
            title: t("we-are-doing.sliders.8.title"),
            description: t("we-are-doing.sliders.8.description"),
            link: t("we-are-doing.sliders.8.navigate"),
          },
          {
            src: "/static/media/we-are-doing/honra-nao-e-desculpa.png",
            href: "https://www.honranaoedesculpa.nossas.org/",
            alt: t("we-are-doing.sliders.9.title"),
            title: t("we-are-doing.sliders.9.title"),
            description: t("we-are-doing.sliders.9.description"),
            link: t("we-are-doing.sliders.9.navigate"),
          },
          {
            src: "/static/media/we-are-doing/meu-nome-importa.png",
            href: "https://www.meunomeimporta.minhamanaus.org.br/",
            alt: t("we-are-doing.sliders.11.title"),
            title: t("we-are-doing.sliders.11.title"),
            description: t("we-are-doing.sliders.11.description"),
            link: t("we-are-doing.sliders.11.navigate"),
          },
          {
            src: "/static/media/we-are-doing/pl-da-boiada-nao.png",
            href: "https://www.pldaboiadanao.org/",
            alt: t("we-are-doing.sliders.14.title"),
            title: t("we-are-doing.sliders.14.title"),
            description: t("we-are-doing.sliders.14.description"),
            link: t("we-are-doing.sliders.14.navigate"),
          },
          {
            src: "/static/media/we-are-doing/em-luta.png",
            href: "https://www.emluta.org.br/",
            alt: t("we-are-doing.sliders.16.title"),
            title: t("we-are-doing.sliders.16.title"),
            description: t("we-are-doing.sliders.16.description"),
            link: t("we-are-doing.sliders.16.navigate"),
          },
        ]}
      />
    </Section>
  );
};

export default WeAreDoing;
