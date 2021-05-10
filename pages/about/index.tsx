import React from "react";
// import { NextPage } from "next";
// import { I18nInitialProps, withTranslation } from "../../i18n";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { withUserAgent } from "next-useragent";
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
import Media from "../../content/Media";
import Timeline from "./_timeline";
import { BoardMembers, LeadersMembers } from "./_team";

const ImpactNumber = ({ numberText, description }) => (
  <Flex direction="column">
    <Heading as="span" size="lg" color="pink.main" fontWeight="bold">
      {numberText}
    </Heading>
    <Text as="span" size="sm">
      {description}
    </Text>
  </Flex>
);

const QuemSomos = ({ ua }) => {
  const { t } = useTranslation("common");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="860px"
        bgColor="blue.main"
        left="50%"
        title={t("content:covers.about.title")}
        titleColor="white"
        titleAlign="left"
      />
      {/* Tudo Nossas */}
      <Section
        justifyContent={["flex-start", null, null, "center"]}
        alignItems={["flex-start", null, null, "center"]}
        direction={["column", null, null, "row"]}
        spacing={["30px", "115px"]}
      >
        <Image
          maxW={[155, 165]}
          src="/static/media/s3/etudonossas.png"
          alt={t("content:images.about.etudonossas")}
        />
        <Stack spacing={6} direction="column" maxW="500px">
          <Text>{t("content:blocks.about.etudonossas")}</Text>
        </Stack>
      </Section>
      {/* History */}
      <Section
        direction={["column", null, null, "row"]}
        spacing={["40px", null, null, "115px"]}
      >
        <Heading as="h2" variant="tag" minW="110px">
          {t("content:blocks.about.history.title")}
        </Heading>
        <Text maxW={["925px"]}>
          {t("content:blocks.about.history.description")}
        </Text>
      </Section>
      {/* Timeline */}
      <Timeline t={t} isMobile={ua ? ua.isMobile : false} />
      {/* Impacto */}
      <Section direction={["column", "row"]} spacing={["50px", "150px"]}>
        <Heading as="h2" size="lg" color="pink.main">
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
            maxW={[226, 282]}
            maxH={[232, 374]}
            src="/static/media/s3/sustentabilidade2.png"
            alt={t("content:blocks.about.financiers.imageText")}
          />
        </Flex>
        <Stack flex={2} spacing={8} alignItems={["center", "flex-start"]}>
          <Heading as="h2" size="lg" color="green">
            <div
              dangerouslySetInnerHTML={{
                __html: t("content:blocks.about.financiers.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          </Heading>
          <Text>{t("content:blocks.about.financiers.description")}</Text>
          <Button padding="14px 37.5px">
            {t("content:blocks.about.financiers.button")}
          </Button>
        </Stack>
      </Section>
      {/* Equipe */}
      <Section direction="column" spacing="100px">
        <BoardMembers />
        <LeadersMembers />
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
      />
      <Section
        direction={["column", "row"]}
        backgroundColor="blue.main"
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
          borderLeftColor="pink.main"
          paddingLeft="30px"
          marginLeft={["30px", "0"]}
        >
          contato@nossas.org
        </Text>
      </Section>
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "content", "team"])),
  },
});

export default withUserAgent(QuemSomos);
