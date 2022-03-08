import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box, Heading, Link, Stack, SimpleGrid } from "@chakra-ui/layout";
import { Button, Image, Text } from "@chakra-ui/react";

import Header from "../../content/Header";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import {
  ComputerBlue,
  Trio,
  Pair,
  MegaphoneYellow,
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
          O NOSSAS é uma organização que impulsiona o ativismo democrático e
          solidário no Brasil. Juntos, nossos membros defendem a democracia e
          fazem pressão pública por um país mais justo e solidário. Somos uma
          organização sem fins lucrativos e por trás de tudo isso estão pessoas:
          mobilizadores, programadores, psicólogas, advogadas, comunicadores,
          cientistas de dados, designers.
        `}
      />
    </Section>

    <Section direction="column" spacing={[10]} bgColor="gray.light">
      <Heading as="h2" color="green">
        NOSSAS <b>VAGAS</b>
      </Heading>

      <Stack
        maxW="1600px"
        direction={["column", "column", "row"]}
        spacing={[10, 14, 20, 138, 188]}
        justifyContent="center"
        textAlign="center"
      >
        <Stack alignItems="center" spacing={4}>
          <ComputerBlue />

          <Text
            fontFamily="Bebas Neue"
            fontSize="30px"
            color="black"
            fontWeight="bold"
            maxW="210px"
          >
            DESENVOLVEDORA FULL-STACK | REMOTO
          </Text>

          <Link
            href="https://nossas.recruitee.com/o/programadora-web-pleno"
            target="blank"
          >
            <Button size="sm" width="140px">
              Saiba mais
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Stack
        maxW="1600px"
        direction={["column", "column", "row"]}
        spacing={[10, 14, 20, 138, 188]}
        justifyContent="center"
        textAlign="center"
      ></Stack>
    </Section>

    <Section display="flex">
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "582px auto"]}
        rowGap="30px"
        alignItems="center"
      >
        <Box>
          <Image
            transform="scale(0.8)"
            objectFit="cover"
            src="/static/media/s3/workwithus.png"
            margin="0 auto"
          />
        </Box>
        <Text textAlign={["center", null, null, "left"]}>
          Somos uma equipe comprometida com justiça e equidade, mas nossa
          composição ainda não reflete de forma adequada a diversidade do país
          onde vivemos. Por isso, em nossos processos seletivos priorizamos a
          candidatura de pessoas não-brancas (pretas, pardas e indígenas),
          pessoas trans e moradoras de periferias do Brasil.
        </Text>
      </SimpleGrid>
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
