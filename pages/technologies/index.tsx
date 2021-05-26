import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Img as Image,
  SimpleGrid,
} from "@chakra-ui/react";

import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { ImageTextListBox } from "../../content";
import { SliderPanel } from "../../components/Slider";
import Header from "../../content/Header";

import {
  Computer,
  Communication,
  Email,
  Subscription,
  Money,
} from "../../components/IconsSVG/Functionalities";

const Technologies: React.FC<WithUserAgentProps> = ({ ua }) => (
  <Body>
    {/* Cover */}
    <Hero
      maxWidth="380px"
      videoUrl="/static/media/covers/technologies.mp4"
      title="Conheça o BONDE, nossa ferramenta de tecnologia"
      titleColor="white"
      titleAlign="center"
    />

    <Section>
      <Header
        title={
          <>
            Assim surgiu <br />
            <b>o BONDE</b>
          </>
        }
        description={`
          Temos a ferramenta perfeita para espalhar sua causa por aí :) O BONDE é
          a plataforma criada pelo nosso time de tecnologia para movimentar nossas
          mobilizações: ela agora está disponível para outras organizações
          causarem também.
        `}
      />
    </Section>

    <ImageTextListBox
      maxWidth="1400px"
      title="Funcionalidades"
      items={[
        {
          icon: <Computer />,
          description: "Crie páginas para suas campanhas de mobilização",
        },
        {
          icon: <Email />,
          description:
            "Pressione tomadores de decisão por email, telefone ou petição",
        },
        {
          icon: <Money />,
          description: "Faça um financiamento coletivo para o seu projeto",
        },
        {
          icon: <Subscription />,
          description: "Receba inscrições de voluntários para a sua causa",
        },
        {
          icon: <Communication />,
          description: "Crie uma rede de solidariedade e aumente o seu impacto",
        },
      ]}
    />

    <Section>
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "582px auto"]}
        rowGap="30px"
        alignItems="flex-start"
      >
        <Box>
          <Image
            src="/static/media/s3/computer.png"
            alt="Computer Image"
            transform="scale(0.8)"
          />
        </Box>
        <Box>
          <Heading as="h2" color="green" maxW="249px" size="lg">
            Use o BONDE para <b>causar</b>
          </Heading>
          <Text marginBottom="25px">
            Com nossa tecnologia você pode fazer campanhas de pressão,
            financiamento coletivo, petições, ou ainda criar redes de
            solidariedade sem precisar sacar nadinha de programação.
          </Text>
          <Button
            onClick={() => window.open("https://www.bonde.org/", "_target")}
            maxW="190px"
          >
            Contrate agora
          </Button>
        </Box>
      </SimpleGrid>
    </Section>

    <Section
      direction={["column", null, null, "row"]}
      justifyContent="space-between"
      spacing={8}
      backgroundColor="#F7F7F7"
    >
      <Heading as="h2" color="blue.main" maxW={["100%", null, null, "350px"]}>
        Quem já causou <b>com o BONDE</b>
      </Heading>

      <Box>
        <SimpleGrid
          columns={[1, null, null, 3]}
          gap="30px"
          alignItems="center"
          justifyItems="center"
          marginBottom="30px"
        >
          <Link href="https://igarape.org.br/" target="_blank">
            <Image src="/static/media/s3/institutoigarape.png" />
          </Link>
          <Link href="http://www.global.org.br/" target="_blank">
            <Image src="/static/media/s3/justicaglobal.png" />
          </Link>
          <Link
            href="https://transparenciainternacional.org.br/"
            target="_blank"
          >
            <Image src="/static/media/s3/transparenciainternacional.png" />
          </Link>
          <Link href="https://www.techo.org/" target="_blank">
            <Image src="/static/media/s3/teto.png" />
          </Link>
          <Link href="https://www.conectas.org/" target="_blank">
            <Image src="/static/media/s3/conectas.png" />
          </Link>
          <Link href="https://www.institutomariellefranco.org/" target="_blank">
            <Image src="/static/media/s3/mariellefranco.png" />
          </Link>
        </SimpleGrid>
        <SimpleGrid
          columns={[1, null, null, 4]}
          rowGap="30px"
          alignItems="center"
          justifyItems="center"
        >
          <Link href="https://abong.org.br/" target="_blank">
            <Image src="/static/media/s3/abong.png" />
          </Link>
          <Link href="https://www.wwf.org.br/" target="_blank">
            <Image src="/static/media/s3/wwf.png" />
          </Link>
          <Link href="https://allout.org/pt" target="_blank">
            <Image src="/static/media/s3/allout.png" />
          </Link>
          <Link href="https://soudapaz.org/" target="_blank">
            <Image src="/static/media/s3/institutosoudapaz.png" />
          </Link>
        </SimpleGrid>
      </Box>
    </Section>

    <Section direction="column" spacing="30px">
      <Heading as="h2" color="pink.main">
        Campanhas que <b>fizeram história</b>
      </Heading>
      <SliderPanel
        infiniteLoop
        isMobile={ua.isMobile}
        items={[
          {
            src: "/static/media/s3/saldaoamazonia.png",
            alt: "Saldão da Amazônia",
            title: "Saldão da Amazônia",
            description:
              "Um projeto de lei que facilitaria a grilagem foi posto em pauta na Câmara dos Deputados, mas graças à campanha mais de 30 mil pessoas se mobilizaram e conseguiram barrar o PL.",
            href: "https://www.saldaodaamazonia.org.br/",
          },
          {
            src: "/static/media/s3/maisquepalmas.png",
            alt: "Mais do que palmas",
            title: "Mais do que palmas",
            description:
              "Um pacote de emergência para oferecer melhores condições a trabalhadores da saúde na linha de frente do combate à Covid19 foi aprovado depois de uma enorme pressão na Câmara dos Deputados.",
            href: "http://www.mais-que-palmas.bonde.org/",
          },
          {
            src: "/static/media/s3/ahoraeagora.png",
            alt: "A hora é agora",
            title: "A hora é agora",
            description:
              "A campanha fez pressão no Supremo Tribunal Federal para tornar crime a discriminação contra pessoas LGBTQ+. Foram mais de 90 dias de mobilização e a campanha conseguiu reunir mais de 700 mil assinaturas. O projeto foi aprovado!",
            href: "https://www.stf.alloutbrasil.org/",
          },
        ]}
      />
    </Section>
  </Body>
);

export default withUserAgent(Technologies);

// mobilizations
// pressure
// donation
// form
// redes
