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
            src: "/static/media/we-are-doing/essa-conta.png",
            href: "https://essacontaeunaopago.minhamanaus.org.br/",
            alt: t("we-are-doing.sliders.1.title"),
            title: t("we-are-doing.sliders.1.title"),
            description: t("we-are-doing.sliders.1.description"),
            link: t("we-are-doing.sliders.1.navigate"),
          },
          {
            src: "/static/media/we-are-doing/aposentadoria-maes.png",
            href: "https://aposentadoriaparamaes.nossas.org/",
            alt: t("we-are-doing.sliders.2.title"),
            title: t("we-are-doing.sliders.2.title"),
            description: t("we-are-doing.sliders.2.description"),
            link: t("we-are-doing.sliders.2.navigate"),
          },
          {
            src: "/static/media/we-are-doing/trabalho-infantil-nao.png",
            href: "https://trabalhoinfantilnao.nossas.org/",
            alt: t("we-are-doing.sliders.3.title"),
            title: t("we-are-doing.sliders.3.title"),
            description: t("we-are-doing.sliders.3.description"),
            link: t("we-are-doing.sliders.3.navigate"),
          },
          {
            src: "/static/media/we-are-doing/cada-voto-conta.png",
            href: "https://www.cadavotoconta.org.br/",
            alt: t("we-are-doing.sliders.4.title"),
            title: t("we-are-doing.sliders.4.title"),
            description: t("we-are-doing.sliders.4.description"),
            link: t("we-are-doing.sliders.4.navigate"),
          },
          {
            src: "/static/media/we-are-doing/honra-nao-e-desculpa.png",
            href: "https://www.honranaoedesculpa.nossas.org/",
            alt: t("we-are-doing.sliders.5.title"),
            title: t("we-are-doing.sliders.5.title"),
            description: t("we-are-doing.sliders.5.description"),
            link: t("we-are-doing.sliders.5.navigate"),
          },
          {
            src: "/static/media/we-are-doing/supervia.png",
            href: "https://www.superviaaumentonao.meurio.org.br/",
            alt: t("we-are-doing.sliders.6.title"),
            title: t("we-are-doing.sliders.6.title"),
            description: t("we-are-doing.sliders.6.description"),
            link: t("we-are-doing.sliders.6.navigate"),
          },
          {
            src: "/static/media/we-are-doing/geracao-que-move.png",
            href: "https://geracaoquemove.nossas.org/",
            alt: t("we-are-doing.sliders.7.title"),
            title: t("we-are-doing.sliders.7.title"),
            description: t("we-are-doing.sliders.7.description"),
            link: t("we-are-doing.sliders.7.navigate"),
          },
          {
            src: "/static/media/we-are-doing/meu-nome-importa.png",
            href: "https://www.meunomeimporta.minhamanaus.org.br/",
            alt: t("we-are-doing.sliders.8.title"),
            title: t("we-are-doing.sliders.8.title"),
            description: t("we-are-doing.sliders.8.description"),
            link: t("we-are-doing.sliders.8.navigate"),
          },
          {
            src: "/static/media/we-are-doing/petar-sem-concessao.png",
            href: "https://www.petarsemconcessao.minhasampa.org.br/",
            alt: t("we-are-doing.sliders.9.title"),
            title: t("we-are-doing.sliders.9.title"),
            description: t("we-are-doing.sliders.9.description"),
            link: t("we-are-doing.sliders.9.navigate"),
          },
          {
            src: "/static/media/we-are-doing/lutar-nao-e-crime.png",
            href: "https://www.lutarnaoecrime.org/",
            alt: t("we-are-doing.sliders.10.title"),
            title: t("we-are-doing.sliders.10.title"),
            description: t("we-are-doing.sliders.10.description"),
            link: t("we-are-doing.sliders.10.navigate"),
          },
          {
            src: "/static/media/we-are-doing/pl-da-boiada-nao.png",
            href: "https://www.pldaboiadanao.org/",
            alt: t("we-are-doing.sliders.11.title"),
            title: t("we-are-doing.sliders.11.title"),
            description: t("we-are-doing.sliders.11.description"),
            link: t("we-are-doing.sliders.11.navigate"),
          },
          {
            src: "/static/media/we-are-doing/sem-licença-pra-matar.png",
            href: "https://www.semlicencapramatar.org.br/",
            alt: t("we-are-doing.sliders.12.title"),
            title: t("we-are-doing.sliders.12.title"),
            description: t("we-are-doing.sliders.12.description"),
            link: t("we-are-doing.sliders.12.navigate"),
          },
          {
            src: "/static/media/we-are-doing/em-luta.png",
            href: "https://www.emluta.org.br/",
            alt: t("we-are-doing.sliders.13.title"),
            title: t("we-are-doing.sliders.13.title"),
            description: t("we-are-doing.sliders.13.description"),
            link: t("we-are-doing.sliders.13.navigate"),
          },
          {
            src: "/static/media/we-are-doing/por-do-sol-sem-cerca.png",
            href: "https://www.pordosolsemcerca.minhasampa.org.br/",
            alt: t("we-are-doing.sliders.14.title"),
            title: t("we-are-doing.sliders.14.title"),
            description: t("we-are-doing.sliders.14.description"),
            link: t("we-are-doing.sliders.14.navigate"),
          },
          {
            src: "/static/media/we-are-doing/parque-realengo-verde.png",
            href: "https://www.parquerealengoverde.meurio.org.br/",
            alt: t("we-are-doing.sliders.15.title"),
            title: t("we-are-doing.sliders.15.title"),
            description: t("we-are-doing.sliders.15.description"),
            link: t("we-are-doing.sliders.15.navigate"),
          },
          {
            src: "/static/media/we-are-doing/livre-para-menstruar.png",
            href: "https://www.sp.livreparamenstruar.org/",
            alt: t("we-are-doing.sliders.16.title"),
            title: t("we-are-doing.sliders.16.title"),
            description: t("we-are-doing.sliders.16.description"),
            link: t("we-are-doing.sliders.16.navigate"),
          },
          {
            src: "/static/media/we-are-doing/sai-da-fossa-manaus.png",
            href: "https://www.saidafossa.minhamanaus.org.br/",
            alt: t("we-are-doing.sliders.17.title"),
            title: t("we-are-doing.sliders.17.title"),
            description: t("we-are-doing.sliders.17.description"),
            link: t("we-are-doing.sliders.17.navigate"),
          },
        ]}
      />
    </Section>
  );
};

export default WeAreDoing;
