import React from "react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

import Donation from "../../components/Donation";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import Media from "../../content/Media";
import Timeline from "./_timeline";
import { BoardMembers, TeamMembers, LeadersMembers } from "./_team";

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

const QuemSomos: React.FC<WithUserAgentProps> = ({ ua }) => {
  const { t } = useTranslation("about");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="860px"
        bgColor="blue.main"
        left="50%"
        title={t("cover")}
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
          <Text>{t("history.description")}</Text>
        </SimpleGrid>
        <SimpleGrid
          columns={[1, null, null, 2]}
          templateColumns={["auto", null, null, "582px auto"]}
          rowGap="30px"
        >
          <Box>
            <Heading as="h2" variant="tag">
              {t("history.title")}
            </Heading>
          </Box>
          <Text>{t("history.about")}</Text>
        </SimpleGrid>
      </Section>
      <Section padding={["50px 0", null, null, null, ""]}>
        <Timeline t={t} isMobile={ua?.isMobile || false} />
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
              <div
                dangerouslySetInnerHTML={{
                  __html: t("impact.title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </Heading>
          </Box>
          <SimpleGrid
            columns={[2, null, null, 2, 3]}
            gridColumnGap="20px"
            gridRowGap="45px"
            gridTemplateColumns={["auto auto"]}
          >
            <ImpactNumber
              numberText={t("impact.financial.number")}
              description={t("impact.financial.description")}
            />
            <ImpactNumber
              numberText={t("impact.volunteers.number")}
              description={t("impact.volunteers.description")}
            />
            <ImpactNumber
              numberText={t("impact.political.number")}
              description={t("impact.political.description")}
            />
            <ImpactNumber
              numberText={t("impact.campaigns.number")}
              description={t("impact.campaigns.description")}
            />
            <ImpactNumber
              numberText={t("impact.donations.number")}
              description={t("impact.donations.description")}
            />
            <ImpactNumber
              numberText={t("impact.activists.number")}
              description={t("impact.activists.description")}
            />
          </SimpleGrid>
        </SimpleGrid>
      </Section>
      {/* Equipe */}
      <Section direction="column" spacing={["60px", null, null, null, "100px"]}>
        <>
          <BoardMembers />
          <LeadersMembers />
          <TeamMembers />
        </>
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
              alt={t("who-finances.alt")}
            />
          </Box>
          <Stack flex={2} spacing={8} alignItems={["center", "flex-start"]}>
            <Heading as="h2" size="lg" color="green">
              <div
                dangerouslySetInnerHTML={{
                  __html: t("who-finances.title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </Heading>
            <Text>{t("who-finances.description")}</Text>
            <Stack direction="row" spacing="20px">
              <Donation size="sm" variant="pink" display={["none", "block"]}>
                {t("who-finances.donate_action")}
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
                {t("who-finances.foundations.title")}
              </Heading>
            </Box>
            <Text>{t("who-finances.foundations.description")}</Text>
          </SimpleGrid>
          <SimpleGrid
            columns={[2, null, null, null, 4]}
            rowGap={["20px", null, null, null, "45px"]}
            columnGap="20px"
            pt="75px"
          >
            <Link
              href="https://www.opensocietyfoundations.org/"
              target="_blank"
            >
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
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
};

export default withUserAgent(QuemSomos);
