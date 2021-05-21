import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Heading, Text, Image, Stack, Button, Box } from "@chakra-ui/react";

import { I18nInitialProps, withTranslation } from "../../i18n";
import Header from "../../content/Header";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { SliderPanel, Carousel, ImageText } from "../../components/Slider";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Trainings: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body>
    {/* Cover */}
    <Hero
      maxWidth="1440px"
      videoUrl="/static/media/covers/trainings.mp4"
      // title={t("content:covers.training.title")}
      title="Receba treinamento em metodologias de ativismo"
      titleColor="white"
      titleAlign="center"
    />

    <Section>
      <Header
        title={
          <>
            Vem <b>aprender!</b>
          </>
        }
        description={`
          Temos um programa de treinamento e mentoria para ativistas iniciantes
          e experientes do Brasil inteiro! Confira nossa agenda para não perder
          sua inscrição.
        `}
      />
    </Section>

    <Section direction={["column"]} spacing={["30px"]}>
      <Heading as="h2" color="pink.main">
        {/* <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.training.doing.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        /> */}
        Rolando <b>agora</b>
      </Heading>
      <SliderPanel
        isMobile={ua.isMobile}
        infiniteLoop
        items={[
          {
            src: "/static/media/s3/muvuca.png",
            href: "https://www.muvuca.nossas.org/",
            // alt: t("content:blocks.training.doing.carousel.1.title"),
            // title: t("content:blocks.training.doing.carousel.1.title"),
            // description: t("content:blocks.training.doing.carousel.1.description"),
            // link: t("content:blocks.training.doing.carousel.1.action"),
            alt: "MUVUCA",
            title: "MUVUCA",
            description:
              "O primeiro programa de ativismo climático do NOSSAS vai oferecer treinamento ao longo de seis meses para jovens que lutam por um futuro viável para nosso planeta.",
            link: "Saiba mais",
          },
          {
            src: "/static/media/s3/programademobilizadores.png",
            href: "https://mobilizadores.nossas.org/",
            // alt: t("content:blocks.training.doing.carousel.2.title"),
            // title: t("content:blocks.training.doing.carousel.2.title"),
            // description: t("content:blocks.training.doing.carousel.2.description"),
            // link: t("content:blocks.training.doing.carousel.2.action"),
            alt: "PROGRAMA DE MOBILIZADORES",
            title: "PROGRAMA DE MOBILIZADORES",
            description:
              "As turmas deste programa recebem gratuitamente treinamento em mobilizações, comunicação de campanhas e tecnologias de ativismo.",
            link: "Inscreva-se para a próxima turma",
          },
          {
            src: "/static/media/s3/jovens-mobilizadoras.png",
            href: "https://www.programademobilizadoras.nossas.org/",
            // alt: t("content:blocks.training.doing.carousel.3.title"),
            // title: t("content:blocks.training.doing.carousel.3.title"),
            // description: t("content:blocks.training.doing.carousel.3.description"),
            // link: t("content:blocks.training.doing.carousel.3.action"),
            alt: "PROGRAMA DE JOVENS MOBILIZADORAS",
            title: "PROGRAMA DE JOVENS MOBILIZADORAS",
            description:
              "O programa é voltado para jovens estudantes do Ensino Médio. Esta edição realizada em parceria com a Girl Up! está treinando 100 jovens meninas no tema pobreza menstrual.",
            link: "Saiba mais",
          },
        ]}
      />
    </Section>

    <Section direction={["column"]} spacing="30px" bgColor="gray.light">
      <Heading as="h2" color="blue.main">
        {/* <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.training.victories.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        /> */}
        Vitórias dos <b>mobilizadores</b>
      </Heading>
      <SliderPanel
        infiniteLoop
        isMobile={ua.isMobile}
        items={[
          {
            src: "/static/media/s3/boonline.png",
            href: "https://www.boonlineparaelas.bonde.org/",
            // alt: t("content:blocks.training.victories.carousel.1.title"),
            // title: t("content:blocks.training.victories.carousel.1.title"),
            // description: t("content:blocks.training.victories.carousel.1.description"),
            // link: t("content:blocks.training.victories.carousel.action"),
            alt: "B.O Online para elas - Minas Gerais",
            title: "B.O Online para elas - Minas Gerais",
            description:
              "O Coletivo Abertha conseguiu implementar a Delegacia Virtual do Estado de Minas Gerais depois de uma campanha que recebeu nossa mentoria. Agora, mulheres podem fazer seus boletins de ocorrência sem sair de casa.",
            link: "Saiba mais",
          },
          {
            src: "/static/media/s3/revitalizacao.png",
            href: "https://revitalizafarol.bonde.org",
            // alt: t("content:blocks.training.victories.carousel.2.title"),
            // title: t("content:blocks.training.victories.carousel.2.title"),
            // description: t("content:blocks.training.victories.carousel.2.description"),
            // link: t("content:blocks.training.victories.carousel.action"),
            alt: "Revitalização do Farol - Maranhão",
            title: "Revitalização do Farol - Maranhão",
            description:
              "Os ex-estudantes do Centro São José Operário, em São Luiz, participaram de nossa primeira turma e conseguiram através de uma campanha de pressão, a revitalização do Farol, onde acontecem atividades educacionais para a comunidade.",
            link: "Saiba mais",
          },
        ]}
      />
    </Section>

    <Section direction="column" spacing="30px">
      <Heading as="h2" color="pink.main" size="lg">
        {/* <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.incubations.projects.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        /> */}
        <b>Depoimentos</b>
      </Heading>
      <Carousel
        infiniteLoop
        showStatus
        items={[
          <ImageText
            src="/static/media/s3/depoimento.png"
            description={`"Ai, gente! Muito lindo e muito potente participar disso e ver tanta gente junto fazendo acontecer. Muito histórico." Ana Clara - Programa de Mobilizadores Região Amazônica(Jul. 2020)`}
          />,
          <ImageText
            src="/static/media/s3/depoimento2.png"
            description={`"Queria agradecer ao NOSSAS. Vocês são maravilhosas, o treinamento é incrível, a metodologia, é tudo muito organizado! Vocês arrasam demais! Parabéns!!" Bruna B. - Programa de Jovens Mobilizadoras (Nov 2020)`}
          />,
          <ImageText
            src="/static/media/s3/depoimento3.png"
            description={`"Gente, eu to me arrepiando a cada módulo. É tão potente nosso poder de transformação coletiva. Tô sentindo uma conexão tão potente, uma vibração tão forte. Estou muito feliz e grata por esta oportunidade de formação" Bruna M. - Programa de Mobilizadores Região Amazônica (Jul. 2020)`}
          />,
        ]}
      />
    </Section>

    <Section
      alignItems="center"
      direction={["column", null, null, "row"]}
      spacing={["30px"]}
    >
      <Box flex="1">
        <Image src="/static/media/s3/man.png" margin="0 auto" />
      </Box>
      <Stack
        textAlign={["center", null, null, "left"]}
        spacing={["20px"]}
        flex="1"
      >
        <Heading as="h2" maxW="510px" color="green">
          {/* <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.training.program.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          /> */}
          Participe do <b>programa de treinamento</b>
        </Heading>
        <Text>
          {/* {t("content:blocks.training.program.description")} */}
          Temos treinamentos temáticos acontecendo durante o ano inteiro. Clique
          para saber os cronogramas e temas para 2021.
        </Text>
        <Button maxW="190px" marginX={["auto", null, null, "0"]}>
          <a
            href="https://www.mobilizadores.nossas.org/#block-35353"
            target="blank"
          >
            {/* {t("content:blocks.training.program.button")} */}
            Quero saber
          </a>
        </Button>
      </Stack>
    </Section>
  </Body>
);

Trainings.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(withTranslation(["common", "content"])(Trainings));
