import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box, Heading, Stack, SimpleGrid } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";

import Header from "../../content/Header";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Trio } from "../../components/IconsSVG/Functionalities";

const WorkWithUs: React.FC = () => (
  <Body>
    <Hero
      maxWidth="1440px"
      videoUrl="/static/media/covers/trabalhe-conosco.mp4"
      title="Trabalhe conosco"
      titleColor="white"
      titleAlign="center"
    />
    <Section>
      <Header
        title={
          <>
            O que é o <b>nossas?</b>
          </>
        }
        description={`
          O NOSSAS é uma organização que impulsiona o ativismo democrático
          e solidário no Brasil. Juntos, defendemos a democracia e fazemos
          pressão pública por um país mais justo. Somos uma organização sem
          fins lucrativos e por trás de tudo isso estão pessoas: mobilizadoras,
          programadoras, comunicadoras, cientistas de dados, designers.
        `}
      />
    </Section>

    <Section spacing={[10]} bgColor="gray.light">
      <Stack
        direction={["column", "column", "row"]}
        alignItems="center"
        spacing={[10, 10, 0, 0]}
        justifyContent="space-between"
        maxW={1420}
      >
        <Stack alignItems={["center", "center", "baseline"]}>
          <Heading as="h2" color="green.light">
            NOSSAS <b>VAGAS</b>
          </Heading>

          <Text
            fontSize="30px"
            color="gray.soft"
            maxW={["300px", "450px", "297px", "297px"]}
          >
            Quando abrirmos novas vagas, elas estarão aqui!
          </Text>
        </Stack>

        <Image
          width={[300, 350, 500]}
          src="/static/media/s3/work-with-us.png"
        />
      </Stack>
    </Section>

    <Section direction="column">
      <Stack
        direction={["column", "column", "row"]}
        alignItems="center"
        spacing={[10, 10, 0, 0]}
        justifyContent="space-between"
      >
        <Image
          objectFit="cover"
          src="/static/media/s3/workwithus.png"
          width={[300, 350, 500]}
        />
        <Stack alignItems={["center", "center", "baseline"]}>
          <Heading as="h2" color="orange.main">
            POLÍTICA <b>AFIRMATIVA</b>
          </Heading>

          <Text maxW={600}>
            Somos uma equipe comprometida com justiça e equidade, mas nossa
            composição ainda não reflete de forma adequada a diversidade do país
            onde vivemos. Por isso, em nossos processos seletivos priorizamos a
            candidatura de pessoas não-brancas (pretas, pardas e indígenas),
            pessoas trans e moradoras de periferias do Brasil.
          </Text>
        </Stack>
      </Stack>
    </Section>
  </Body>
);

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "trainings"])),
    },
  };
};

export default WorkWithUs;
