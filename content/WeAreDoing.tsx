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
            src: "/static/media/we-are-doing/fora-ibaneis.png",
            href: "https://foraibaneis.org.br/",
            alt: t("we-are-doing.sliders.0.title"),
            title: t("we-are-doing.sliders.0.title"),
            description: t("we-are-doing.sliders.0.description"),
            link: t("we-are-doing.sliders.0.navigate"),
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
            src: "/static/media/we-are-doing/honra-nao-e-desculpa.png",
            href: "https://honranaoedesculpa.nossas.org/",
            alt: t("we-are-doing.sliders.honra-não-é-desculpa.title"),
            title: t("we-are-doing.sliders.honra-não-é-desculpa.title"),
            description: t(
              "we-are-doing.sliders.honra-não-é-desculpa.description"
            ),
            link: t("we-are-doing.sliders.honra-não-é-desculpa.navigate"),
          },
          {
            src: "/static/media/we-are-doing/nao-estatuto-nascituro.png",
            href: "https://naoaoestatutodonascituro.mapadoacolhimento.org.br",
            alt: t("we-are-doing.sliders.estatuto-nascituro.title"),
            title: t("we-are-doing.sliders.estatuto-nascituro.title"),
            description: t(
              "we-are-doing.sliders.estatuto-nascituro.description"
            ),
            link: t("we-are-doing.sliders.estatuto-nascituro.navigate"),
          },
          {
            src: "/static/media/we-are-doing/auxilio-realengo.png",
            href: "https://www.parquerealengoverde.meurio.org.br/",
            alt: t("we-are-doing.sliders.auxilio-realengo.title"),
            title: t("we-are-doing.sliders.auxilio-realengo.title"),
            description: t("we-are-doing.sliders.auxilio-realengo.description"),
            link: t("we-are-doing.sliders.auxilio-realengo.navigate"),
          },
        ]}
      />
    </Section>
  );
};

export default WeAreDoing;
