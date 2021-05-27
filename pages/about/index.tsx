import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import {
  Box,
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
import Donation from "../../components/Donation";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import Media from "../../content/Media";
import Timeline from "./_timeline";
import {
  BoardMembers,
  TeamMembers,
  LeadersMembers,
  LeadersMembersMobile,
} from "./_team";

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
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "582px auto"]}
        rowGap="30px"
      >
        <Box margin="0 auto">
          <Image src="/static/media/s3/incubations-tudonossas.png" />
        </Box>
        <Text>
          Somos uma organização sem fins lucrativos comprometida com o
          fortalecimento da democracia, da justiça social e da igualdade. Há
          mais de dez anos desenvolvemos projetos, táticas e estratégias de
          mobilização e solidariedade pelo Brasil inteiro.
        </Text>
      </SimpleGrid>
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "582px auto"]}
        rowGap="30px"
      >
        <Box>
          <Heading as="h2" variant="tag">
            História
          </Heading>
        </Box>
        <Text>
          O NOSSAS nasceu em 2011. De lá para cá, reunimos milhares de pessoas
          em torno de causas, desenvolvemos dezenas de projetos, fizemos
          centenas de campanhas de impacto, conseguimos a implementação de
          políticas públicas importantes e contribuímos na construção de redes
          de solidariedade.
        </Text>
      </SimpleGrid>
    </Section>
    <Section padding={["50px 0", null, null, null, ""]}>
      <Timeline t={t} isMobile={ua.isMobile} />
    </Section>
    {/* Impacto */}
    <Section bgColor="gray.light">
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "582px auto"]}
        rowGap="50px"
      >
        <Box>
          <Heading as="h2" size="lg" color="pink.main">
            Números
            <br />
            <b>de impacto</b>
          </Heading>
        </Box>
        <SimpleGrid
          columns={[2, null, null, 2, 3]}
          gridColumnGap="20px"
          gridRowGap="45px"
          gridTemplateColumns={["auto auto"]}
        >
          <ImpactNumber
            numberText="+4 milhões"
            description="de reais arrecadados em financiamento coletivo"
          />
          <ImpactNumber
            numberText="+5,4 mil"
            description="voluntárias e voluntários cadastrados"
          />
          <ImpactNumber
            numberText="+120"
            description="mudanças de política pública"
          />
          <ImpactNumber numberText="+230" description="campanhas lançadas" />
          <ImpactNumber
            numberText="+29 mil"
            description="pessoas já fizeram doações"
          />
          <ImpactNumber
            numberText="+2,5 milhões"
            description="de pessoas mobilizadas"
          />
        </SimpleGrid>
      </SimpleGrid>
    </Section>
    {/* Equipe */}
    <Section direction="column" spacing={["60px", null, null, null, "100px"]}>
      {ua && ua.isMobile ? (
        <>
          <BoardMembers t={t} />
          <LeadersMembers t={t} />
          <TeamMembers t={t} />
        </>
      ) : (
        <>
          <BoardMembers t={t} />
          <LeadersMembers t={t} />
          <TeamMembers t={t} />
        </>
      )}
    </Section>
    {/* Quem financia */}
    <Section spacing={["30px", "170px"]}>
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "582px auto"]}
        rowGap="30px"
      >
        <Box>
          <Image
            margin="0 auto"
            maxW={[226, 282]}
            maxH={[232, 374]}
            src="/static/media/s3/sustentabilidade2.png"
            alt="Quem financia o NOSSAS"
          />
        </Box>
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
            <Button
              size="sm"
              onClick={() => {
                // window.open(
                //   "https://drive.google.com/file/d/1jPAFV2TI2W7BJospo-Z6EVsjP0ItphJO/view",
                //   "_blank"
                // );
              }}
            >
              Baixar auditoria
            </Button>
            <Donation size="sm" variant="pink" display="block">
              Fazer uma doação
            </Donation>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Stack direction="column">
        <SimpleGrid
          columns={[1, null, null, 2]}
          templateColumns={["auto", null, null, "582px auto"]}
          rowGap="30px"
        >
          <Box>
            <Heading as="h2" variant="tag">
              Fundações
            </Heading>
          </Box>
          <Text>
            Em 2020, o NOSSAS executou atividades financiadas pelas seguintes
            fundações:
          </Text>
        </SimpleGrid>
        <SimpleGrid
          columns={[2, null, null, null, 4]}
          rowGap={["20px", null, null, null, "45px"]}
          columnGap="20px"
          pt="75px"
        >
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
          <Link href="http://umifund.org/" target="_blank">
            <Image
              m="0 auto"
              objectFit="cover"
              src="/static/media/foundations/umi.png"
              alt="UMI fund"
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
