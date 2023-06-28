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
        color="orange.main"
        maxW={[250, 250, 800]}
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
            src: "/static/media/we-are-doing/salve-floresta.png",
            href: "https://www.salveaflorestamanaos.minhamanaus.org.br/",
            alt: t("we-are-doing.sliders.salveaflorestamanaos.title"),
            title: t("we-are-doing.sliders.salveaflorestamanaos.title"),
            description: t(
              "we-are-doing.sliders.salveaflorestamanaos.description"
            ),
            link: t("we-are-doing.sliders.salveaflorestamanaos.navigate"),
          },
          {
            src: "/static/media/we-are-doing/tiraope.png",
            href: "https://www.tiraopedaminhaserra.org/",
            alt: t("we-are-doing.sliders.tiraope.title"),
            title: t("we-are-doing.sliders.tiraope.title"),
            description: t("we-are-doing.sliders.tiraope.description"),
            link: t("we-are-doing.sliders.tiraope.navigate"),
          },
          {
            src: "/static/media/we-are-doing/amazonia-de-pe.png",
            href: "https://amazoniadepe.org.br/",
            alt: t("we-are-doing.sliders.1.title"),
            title: t("we-are-doing.sliders.1.title"),
            description: t("we-are-doing.sliders.1.description"),
            link: t("we-are-doing.sliders.1.navigate"),
          },
        ]}
      />
    </Section>
  );
};

export default WeAreDoing;
