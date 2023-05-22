import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box, Heading, Stack, Link, Flex } from "@chakra-ui/layout";
import { Button, Image, Text } from "@chakra-ui/react";

import Header from "../../content/Header";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import {
  Computer,
  ComputerBlue,
  People,
  Trio,
} from "../../components/IconsSVG/Functionalities";

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

    <Section direction="column" spacing={[10]} bgColor="gray.light">
      <Heading as="h2" color="green.light">
        NOSSAS <b>VAGAS</b>
      </Heading>

      <Stack
        maxW="1600px"
        direction={["column", "column", "row"]}
        spacing={[10, 14, 20, 138, 188]}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {/* <Stack alignItems="center" spacing={4}>
          <ComputerBlue />

          <Text fontSize="30px" fontWeight="bold" maxW="210px">
            Name
          </Text>

          <Link href="https://bit.ly/AnalistaDeDados" target="blank">
            <Button size="md" width="140px">
              Saiba mais
            </Button>
          </Link>
        </Stack> */}

        {/* <Stack alignItems="center" spacing={4}>
          <Computer />

          <Text fontSize="30px" fontWeight="bold" maxW="210px">
            Name
          </Text>

          <Link
            href="https://nossas.recruitee.com/o/programadora-web-i"
            target="blank"
          >
            <Button size="md" width="140px">
              Saiba mais
            </Button>
          </Link>
        </Stack> */}

        <Text
          fontSize="30px"
          color="gray.soft"
          maxW={["300px", "450px", "297px", "297px"]}
        >
          Quando abrirmos novas vagas, elas estarão aqui!
        </Text>
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
