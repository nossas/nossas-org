import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import {
  Button,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";

import { I18nInitialProps, withTranslation } from "../../i18n";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import Media from "../../content/Media";
import Timeline from "./_timeline";
import { BoardMembers, TeamMembers, LeadersMembers } from "./_team";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const ImpactNumber = ({ numberText, description }) => (
  <Flex direction="column">
    <Heading
      as="span"
      size="lg"
      color="pink.main"
      fontWeight="bold"
      lineHeight=".8"
    >
      {numberText}
    </Heading>
    <Text as="span" size="sm">
      {description}
    </Text>
  </Flex>
);

const QuemSomos: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body>
    {/* Cover */}
    <Hero
      maxWidth="860px"
      bgColor="blue.main"
      left="50%"
      // title={t("content:about.cover")}
      title="Desenvolvemos tecnologias, compartilhamos metodologias e articulamos pessoas para apoiar o ativismo democrático e solidário"
      titleColor="white"
      titleAlign="left"
    />
    {/* History */}
    <Section
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      spacing={["60px", null, null, "215px"]}
    >
      <Stack
        direction={["column", null, null, "row"]}
        spacing={["40px", null, null, "115px"]}
        alignItems="center"
        margin="0 auto"
      >
        <Image src="/static/media/s3/incubations-tudonossas.png" />
        {/* <Text maxW={["600px"]}>{t("content:about.description")}</Text> */}
        <Text maxW={["600px"]}>
          Somos uma organização sem fins lucrativos comprometida com o
          fortalecimento da democracia, da justiça social e da igualdade. Há
          mais de dez anos desenvolvemos projetos, táticas e estratégias de
          mobilização e solidariedade pelo Brasil inteiro.
        </Text>
      </Stack>
      <Stack
        direction={["column", null, null, "row"]}
        spacing={["30px", null, null, "115px"]}
      >
        <Heading as="h2" variant="tag" minW="110px">
          {/* {t("content:about.history.title")} */}
          História
        </Heading>
        {/* <Text maxW={["925px"]}>{t("content:about.history.description")}</Text> */}
        <Text maxW={["925px"]}>
          O NOSSAS nasceu em 2011. De lá para cá, reunimos milhares de pessoas
          em torno de causas, desenvolvemos dezenas de projetos, fizemos
          centenas de campanhas de impacto, conseguimos a implementação de
          políticas públicas importantes e contribuímos na construção de redes
          de solidariedade.
        </Text>
      </Stack>
    </Section>
    <Section>
      <Timeline t={t} isMobile={ua.isMobile} />
    </Section>
    {/* Impacto */}
    <Section
      direction={["column", "row"]}
      spacing={["50px", "150px"]}
      bgColor="gray.light"
      justifyContent="space-between"
    >
      <Heading as="h2" size="lg" color="pink.main">
        {/* <div
          dangerouslySetInnerHTML={{
            __html: t("content:about.impact.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        /> */}
        Números
        <br />
        <b>de impacto</b>
      </Heading>
      <SimpleGrid
        columns={2}
        gridColumnGap="95px"
        gridRowGap="45px"
        gridTemplateColumns="324px 324px"
      >
        {/* <ImpactNumber
          numberText={t("content:about.impact.donations.number")}
          description={t("content:about.impact.donations.text")}
        /> */}
        <ImpactNumber
          numberText="+4 milhões"
          description="de reais arrecadados em financiamento coletivo"
        />
        {/* <ImpactNumber
          numberText={t("content:about.impact.volunteers.number")}
          description={t("content:about.impact.volunteers.text")}
        /> */}
        <ImpactNumber
          numberText="+5,4 mil"
          description="voluntárias e voluntários cadastrados"
        />
        {/* <ImpactNumber
          numberText={t("content:about.impact.politicalChange.number")}
          description={t("content:about.impact.politicalChange.text")}
        /> */}
        <ImpactNumber
          numberText="+120"
          description="mudanças de política pública"
        />
        {/* <ImpactNumber
          numberText={t("content:about.impact.mobilizations.number")}
          description={t("content:about.impact.mobilizations.text")}
        /> */}
        <ImpactNumber numberText="+230" description="campanhas lançadas" />
        {/* <ImpactNumber
          numberText={t("content:about.impact.peopleDonations.number")}
          description={t("content:about.impact.peopleDonations.text")}
        /> */}
        <ImpactNumber
          numberText="+29 mil"
          description="pessoas já fizeram doações"
        />
        {/* <ImpactNumber
          numberText={t(
            "content:about.impact.peopleMobilizations.number"
          )}
          description={t(
            "content:about.impact.peopleMobilizations.text"
          )}
        /> */}
        <ImpactNumber
          numberText="+2,5 milhões"
          description="de pessoas mobilizadas"
        />
      </SimpleGrid>
    </Section>
    {/* Quem financia */}
    <Section spacing={[30, "170px"]}>
      <Stack
        display={["none", "flex"]}
        alignItems={["center"]}
        direction={["column", "row"]}
      >
        <Flex flex={1} justifyContent="space-around">
          <Image
            maxW={[226, 282]}
            maxH={[232, 374]}
            src="/static/media/s3/sustentabilidade2.png"
            // alt={t("content:about.financiers.imageText")}
            alt="Quem financia o NOSSAS"
          />
        </Flex>
        <Stack flex={2} spacing={8} alignItems={["center", "flex-start"]}>
          <Heading as="h2" size="lg" color="green">
            {/* <div
              dangerouslySetInnerHTML={{
                __html: t("content:about.financiers.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            /> */}
            Quem financia o <b>NOSSAS</b>
          </Heading>
          <Text>
            {/* {t("content:about.financiers.description")} */}
            Somos financiados por organizações brasileiras e internacionais e
            contamos também com o apoio de pessoas físicas que doam mensalmente
            para nossos projetos. Prezando pela boa gestão desses recursos,
            anualmente realizamos uma auditoria independente que verifica nossa
            contabilidade.
          </Text>
          <Stack direction="row" spacing="20px">
            <Button size="sm">
              {/* {t("content:about.financiers.button")} */}
              Baixar auditoria
            </Button>
            <Button size="sm" variant="pink">
              {/* {t("content:about.financiers.donate")} */}
              Fazer uma doação
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column">
        <Stack direction="row" justifyContent="space-between">
          <Heading as="h2" variant="tag">
            Fundações
          </Heading>
          <Text maxW="680px">
            Em 2020, o NOSSAS executou atividades financiadas pelas seguintes
            fundações:
          </Text>
        </Stack>
        <SimpleGrid columns={4} rowGap="45px" pt="75px">
          <Link href="https://www.opensocietyfoundations.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/opensociety.png"
              alt="Open Society Foundations"
            />
          </Link>
          <Link href="https://luminategroup.com/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/luminate.png"
              alt="Luminate"
            />
          </Link>
          <Link href="https://oakfnd.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/oak.png"
              alt="OAK Foundation"
            />
          </Link>
          <Link href="https://skoll.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/skoll.png"
              alt="Skoll Foundation"
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/urban.png"
              alt="Urban Movement"
            />
          </Link>
          <Link href="https://tinker.org/pt/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/tinker.png"
              alt="Tinker Foundation"
            />
          </Link>
          <Link href="https://www.sigrid-rausing-trust.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/sigrid.png"
            />
          </Link>
          <Link href="https://www.svri.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/svri.png"
            />
          </Link>
          <Link href="https://institutoavon.org.br/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/avon.png"
            />
          </Link>
          <Link href="https://www.climaesociedade.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/ics.png"
            />
          </Link>
          <Link href="https://www.tides.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/tides.png"
            />
          </Link>
          <Link href="https://malala.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/malala.png"
            />
          </Link>
        </SimpleGrid>
      </Stack>
    </Section>
    {/* Equipe */}
    <Section direction="column" spacing="100px">
      <BoardMembers t={t} />
      <LeadersMembers t={t} />
      <TeamMembers t={t} />
    </Section>
    {/* Na midia */}
    <Media
      title={
        <div
          dangerouslySetInnerHTML={{
            __html: t("common:media.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      }
    />
  </Body>
);

QuemSomos.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(withTranslation(["common", "content"])(QuemSomos));
