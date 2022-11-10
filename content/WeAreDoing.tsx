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
            src: "/static/media/we-are-doing/amazonia-de-pe.png",
            href: "https://amazoniadepe.org.br/",
            alt: t("we-are-doing.sliders.1.title"),
            title: t("we-are-doing.sliders.1.title"),
            description: t("we-are-doing.sliders.1.description"),
            link: t("we-are-doing.sliders.1.navigate"),
          },
          {
            src: "/static/media/we-are-doing/cpi-não-é-inquisição.png",
            href: "https://www.cpinaoeinquisicao.mapadoacolhimento.org.br/",
            alt: t("we-are-doing.sliders.cpi-não-é-inquisição.title"),
            title: t("we-are-doing.sliders.cpi-não-é-inquisição.title"),
            description: t(
              "we-are-doing.sliders.cpi-não-é-inquisição.description"
            ),
            link: t("we-are-doing.sliders.cpi-não-é-inquisição.navigate"),
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
        ]}
      />
    </Section>
  );
};

export default WeAreDoing;
