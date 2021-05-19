import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";

import { I18nInitialProps, withTranslation } from "../../i18n";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Box, Heading, Link, Stack } from "@chakra-ui/layout";
import { Button, Image, Text } from "@chakra-ui/react";
import { DescriptionBox, SubscribeForm } from "../../content";
import { SimpleFields } from "../../content/SubscribeForm";
import React from "react";
import {
  MegaphoneYellow,
  Pressure,
  TransferPink,
} from "../../components/IconsSVG/Functionalities";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const WorkWithUs: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body>
    <Hero
      maxWidth="1440px"
      videoUrl="/static/media/covers/trabalhe-conosco.mp4"
      title="Trabalhe conosco"
      titleColor="white"
      titleAlign="center"
    />

    <Section spacing={["30px", null, null, null, "245px"]}>
      <Stack
        direction={["column", null, null, "row"]}
        justifyContent="space-between"
      >
        <Heading as="h2" color="blue.main">
          O que é o <b>nossas?</b>
        </Heading>
        <Text maxW="702px">
          O NOSSAS é uma organização que impulsiona o ativismo democrático e
          solidário no Brasil. Juntos, nossos membros defendem a democracia e
          fazem pressão pública por um país mais justo e solidário. Somos uma
          organização sem fins lucrativos e por trás de tudo isso estão pessoas:
          mobilizadores, programadores, psicólogas, advogadas, comunicadores,
          cientistas de dados, designers.
        </Text>
      </Stack>
    </Section>

    <Section direction="column" spacing="60px" bgColor="gray.light">
      <Heading as="h2" color="green">
        Nossas <b>vagas</b>
      </Heading>

      <Stack
        direction={["column", null, "row"]}
        spacing={["50px", "100px", "300px"]}
        alignItems="center"
        justifyContent="center"
        mb="50px"
        textAlign="center"
      >
        <Stack alignItems="center" spacing={4}>
          <MegaphoneYellow />
          <Text fontFamily="Bebas Neue" color="black" fontSize="30px">
            <b>DIRETOR(A) DE CAMPANHAS</b>
          </Text>
          <Link
            href="https://nossas.recruitee.com/o/diretora-de-campanhas"
            target="blank"
          >
            <Button size="sm" width="140px">
              Saiba mais
            </Button>
          </Link>
        </Stack>
        <Stack alignItems="center" spacing={4}>
          <TransferPink />
          <Text fontFamily="Bebas Neue" fontSize="30px" color="black">
            <b>MOBILIZADOR(A) EM SÃO PAULO</b>
          </Text>
          <Link
            href="https://nossas.recruitee.com/o/mobilizadora-i-sao-paulo"
            target="blank"
          >
            <Button size="sm">Saiba mais</Button>
          </Link>
        </Stack>
      </Stack>
    </Section>

    <Section display="flex">
      <Stack
        alignItems="center"
        direction={["column", null, null, "row"]}
        spacing={["30px"]}
      >
        <Box flex="1">
          <Image src="/static/media/s3/workwithus.png" margin="0 auto" />
        </Box>
        <Text
          textAlign={["center", null, null, "left"]}
          spacing={["20px"]}
          flex="1"
        >
          Somos uma equipe comprometida com justiça e equidade, mas sua
          composição ainda não reflete de forma adequada a diversidade do país
          onde vivemos. Por isso, em nossos processos seletivos priorizamos a
          candidatura de pessoas não-brancas (pretas, pardas e indígenas),
          pessoas trans e moradoras de periferias do Brasil.
        </Text>
      </Stack>
    </Section>
  </Body>
);

WorkWithUs.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(WorkWithUs)
);
