import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import {
  Button,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import Media from "../../components/Media";
import Timeline from "./_timeline";
import Team from "./_team";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const ImpactNumber = ({ numberText, description }) => (
  <Flex direction="column">
    <Heading as="h4" display="flex" flexDirection="column">
      <Text as="span" size="lg" color="nossas.pink">
        {numberText}
      </Text>
      <Text as="span" size="sm">
        {description}
      </Text>
    </Heading>
  </Flex>
);

const QuemSomos: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    {/* Cover */}
    <Hero
      bgColor="white"
      title={t("content:covers.home.title")}
      titleColor="nossas.blue"
      titleAlign="left"
    />
    {/* History */}
    <Section direction={["column", "row"]} spacing={["40px", "115px"]}>
      <Heading as="h2" variant="tag">
        {t("content:blocks.about.history.title")}
      </Heading>
      <Text maxW={["925px"]}>
        {t("content:blocks.about.history.description")}
      </Text>
    </Section>
    {/* Timeline */}
    <Timeline t={t} isMobile={ua.isMobile} />
    {/* Impacto */}
    <Section direction={["column", "row"]} spacing={["50px", "150px"]}>
      <Heading as="h2" size="lg" color="nossas.pink">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.about.numbers.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <SimpleGrid columns={2} gridColumnGap="95px" gridRowGap="45px">
        <ImpactNumber
          numberText={t("content:blocks.about.impact.donations.number")}
          description={t("content:blocks.about.impact.donations.text")}
        />
        <ImpactNumber
          numberText={t("content:blocks.about.impact.volunteers.number")}
          description={t("content:blocks.about.impact.volunteers.text")}
        />
        <ImpactNumber
          numberText={t("content:blocks.about.impact.politicalChange.number")}
          description={t("content:blocks.about.impact.politicalChange.text")}
        />
        <ImpactNumber
          numberText={t("content:blocks.about.impact.mobilizations.number")}
          description={t("content:blocks.about.impact.mobilizations.text")}
        />
        <ImpactNumber
          numberText={t("content:blocks.about.impact.peopleDonations.number")}
          description={t("content:blocks.about.impact.peopleDonations.text")}
        />
        <ImpactNumber
          numberText={t(
            "content:blocks.about.impact.peopleMobilizations.number"
          )}
          description={t(
            "content:blocks.about.impact.peopleMobilizations.text"
          )}
        />
      </SimpleGrid>
    </Section>
    {/* Quem financia */}
    <Section
      display={["none", "flex"]}
      alignItems={["center"]}
      direction={["column", "row"]}
      px={["30px", "90px"]}
      py={["60px", "60px"]}
      spacing={[30, 0]}
    >
      <Flex flex={1} justifyContent="space-around">
        <Image
          maxW={[226, 339]}
          maxH={[232, 347]}
          src="/static/media/s3/sustentabilidade.png"
          alt={t("content:blocks.about.financiers.imageText")}
        />
      </Flex>
      <Stack flex={1.5} spacing={8} alignItems={["center", "flex-start"]}>
        <Heading as="h2" size="lg" color="nossas.green">
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.about.financiers.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <Text textAlign={["center", "left"]}>
          {t("content:blocks.about.financiers.description")}
        </Text>
        <Button padding="14px 37.5px">
          {t("content:blocks.about.financiers.button")}
        </Button>
      </Stack>
    </Section>
    {/* Equipe */}
    <Section direction="column" backgroundColor="nossas.blue" spacing="20px">
      <Heading as="h2" color="white" fontWeight="700" size="lg">
        {t("content:blocks.about.team.title")}
      </Heading>
      <Team
        teams={[
          {
            description: t("content:blocks.about.team.directorship"),
            members: [
              {
                photo: "/static/media/team/alessandra-orofino.png",
                name: "Alessandra Orofino",
              },
              {
                photo: "/static/media/team/enrica-duncan.png",
                name: "Enrica Duncan",
              },
              {
                photo: "/static/media/team/virginia-rigot.png",
                name: "Virginia Rigot-Muller",
              },
            ],
          },
          {
            description: t("content:blocks.about.team.board"),
            members: [
              {
                photo: "/static/media/team/ana-carolina.png",
                name: "Ana Carolina Evangelista",
              },
              {
                photo: "/static/media/team/ana-paula.png",
                name: "Ana Paula Lisboa",
              },
              {
                photo: "/static/media/team/ines-lafer.png",
                name: "Inês Lafer",
              },
              {
                photo: "/static/media/team/bianca-vianna.png",
                name: "Bianca Vianna",
              },
              {
                photo: "/static/media/team/felipe-estefam.png",
                name: "Felipe Estefam",
              },
              {
                photo: "/static/media/team/roberto-andres.png",
                name: "Roberto Andres",
              },
            ],
          },
        ]}
      />
    </Section>
    {/* Na midia */}
    <Media
      title={
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.home.media.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      }
      logos={[
        "/static/media/s3/dias.png",
        "/static/media/s3/reuters.png",
        "/static/media/s3/nyt.png",
        "/static/media/s3/piaui.png",
        "/static/media/s3/elpais.png",
        "/static/media/s3/forbes.png",
        "/static/media/s3/ted.png",
        "/static/media/s3/zeitgeist.png",
      ]}
    />
    <Section
      direction={["column", "row"]}
      backgroundColor="nossas.blue"
      spacing={["20px", "280px"]}
    >
      <Heading as="h2" color="white">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.about.contact", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <Text
        display="inline-table"
        color="white"
        borderLeftWidth="6px"
        borderLeftColor="nossas.pink"
        paddingLeft="30px"
        marginLeft={["30px", "0"]}
      >
        contato@nossas.org
      </Text>
    </Section>
  </Body>
);

QuemSomos.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(withTranslation(["common", "content"])(QuemSomos));
