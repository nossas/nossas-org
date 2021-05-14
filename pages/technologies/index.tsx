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

import { I18nInitialProps, withTranslation } from "../../i18n";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { ImageTextListBox } from "../../content";
import { SliderPanel } from "../../components/Slider";

import {
  Computer,
  Communication,
  Email,
  Subscription,
  Money,
} from "../../components/IconsSVG/Functionalities";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Technologies: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body>
    {/* Cover */}
    <Hero
      maxWidth="380px"
      videoUrl="/static/media/covers/technologies.mp4"
      title="Conheça o BONDE, nossa ferramenta de tecnologia"
      titleColor="white"
      titleAlign="center"
    />

    <Section
      columns={[1, null, null, 2]}
      templateColumns={["auto", null, null, "260px 1fr"]}
      columnGap="225px"
      rowGap="25px"
    >
      <Heading as="h2" color="blue.main">
        Assim surgiu <b>o BONDE</b>
      </Heading>
      <Text>
        Temos a ferramenta perfeita para espalhar sua causa por aí :) O BONDE é
        a plataforma criada pelo nosso time de tecnologia para movimentar nossas
        mobilizações: ela agora está disponível para outras organizações
        causarem também.
      </Text>
    </Section>

    <ImageTextListBox
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

    <Section
      direction={["column", null, null, "row"]}
      spacing={["40px", null, "109px"]}
      justifyContent="center"
    >
      <Image src="/static/media/s3/computer.png" alt="Computer Image" />
      <Box>
        <Heading as="h2" color="green" maxW="249px" size="lg">
          Use o BONDE para <b>causar</b>
        </Heading>
        <Text maxW="569px" marginBottom="25px">
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
            link: "Saber mais",
            href: "https://www.saldaodaamazonia.org.br/",
          },
          {
            src: "/static/media/s3/amazoniacontracovid.png",
            alt: "Amazônia Contra a Covid",
            title: "Amazônia Contra a Covid",
            description:
              "Os povos da floresta foram muito afetados durante a pandemia. Uma campanha de financiamento coletivo arrecadou mais de R$1 milhão para distribuir alimentos e outros suplementos para mais de 10 etnias indígenas.",
            link: "Saber mais",
            href: "https://www.amazoniacontracovid.org.br/",
          },
          {
            src: "/static/media/s3/maisquepalmas.jpg",
            alt: "Mais do que palmas",
            title: "Mais do que palmas",
            description:
              "Foi uma campanha para que um pacote de emergência que daria melhores condições de trabalho aos médicos, enfermeiros, fisioterapeutas intensivistas, técnicos e auxiliares de enfermagem na linha de frente na guerra para combater a COVID-19 virasse lei.",
            link: "Saber mais",
            href: "https://www.maisdoquepalmas.com.br/",
          },
          {
            src: "/static/media/s3/ahoraeagora.jpg",
            alt: "A hora é agora",
            title: "A hora é agora",
            description:
              "A All Out realizou uma campanha de pressão no Supremo Tribunal Federal para tornar crime a discriminação contra pessoas LGBTQ+. Foram mais de 90 dias de mobilização e a campanha conseguiu reunir mais de 700 mil assinaturas. O projeto foi aprovado!",
            link: "Saber mais",
            href: "https://www.stf.alloutbrasil.org/",
          },
        ]}
      />
    </Section>
  </Body>
);

Technologies.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Technologies)
);

// mobilizations
// pressure
// donation
// form
// redes
