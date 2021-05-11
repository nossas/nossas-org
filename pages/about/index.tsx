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
  Box,
} from "@chakra-ui/react";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import Media from "../../content/Media";
import Timeline from "./_timeline";
import { EmployeeTeam } from "../../components/Employee";
import { board, leaders, team } from "./_team";

interface PageProps extends WithUserAgentProps {
  t: any;
}

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

const QuemSomos: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    {/* Cover */}
    <Hero
      maxWidth="860px"
      bgColor="blue.main"
      left="50%"
      title={t("content:covers.about.title")}
      titleColor="white"
      titleAlign="left"
    />
    {/* About */}
    <Section
      direction={["column", null, null, "row"]}
      spacing={["30px", null, null, null, "245px"]}
      alignItems="center"
    >
      <Box flex="1">
        <Image src="/static/media/s3/incubations-tudonossas.png" />
      </Box>
      <Text maxW={["600px"]}>
        {t("content:blocks.about.description.title")}
      </Text>
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
    <Timeline t={t} isMobile={ua.isMobile} />
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
      <EmployeeTeam
        title={t("content:blocks.about.team.board")}
        members={board}
      />
      <EmployeeTeam
        title={t("content:blocks.about.team.leaders")}
        members={leaders}
      />
      <EmployeeTeam
        title={t("content:blocks.about.team.team")}
        members={team}
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
    />
  </Body>
);

QuemSomos.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(withTranslation(["common", "content"])(QuemSomos));
