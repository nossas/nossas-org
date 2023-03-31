import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";

import ImpactNumber from "./_impactNumber";
import Donation from "../../components/Donation";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { ContentMedia } from "../../content/ContentMedia";
import Timeline from "./_timeline";
import { BoardMembers, TeamMembers, LeadersMembers } from "./_team";

const QuemSomos: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <Body>
      <Hero
        maxWidth="860px"
        bgColor="blue.main"
        left="50%"
        title={t("cover")}
        titleColor="white"
        titleAlign="left"
        titleMarginTop={["50px", "65px", "40px", "70px", "0"]}
      />

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
          mb={18}
        >
          <Image
            src="/static/media/s3/incubations-tudonossas.png"
            margin="0 auto"
          />

          <Text>{t("history.description")}</Text>
        </SimpleGrid>

        <SimpleGrid
          columns={[1, null, null, 2]}
          templateColumns={["auto", null, null, "582px auto"]}
          rowGap="30px"
        >
          <Heading as="h2" variant="tag">
            {t("history.title")}
          </Heading>

          <Text>{t("history.about")}</Text>
        </SimpleGrid>
      </Section>

      <Section padding={["50px 0", null, null, null, ""]}>
        <Timeline />
      </Section>

      {/* Impacto */}
      <Section bgColor="gray.light">
        <SimpleGrid
          columns={[1, null, null, 2]}
          templateColumns={["auto", null, null, "582px auto"]}
          rowGap="50px"
        >
          <Box>
            <Heading
              as="h2"
              size="lg"
              color="orange.main"
              dangerouslySetInnerHTML={{
                __html: t("impact.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
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
      <Section spacing={["60px", null, null, null, "100px"]}>
        <BoardMembers />
        <LeadersMembers />
        <TeamMembers />
      </Section>

      {/* Quem financia */}
      <Section spacing={["30px", "170px"]}>
        <SimpleGrid
          columns={[1, null, null, 2]}
          templateColumns={["auto", null, null, "582px auto"]}
          rowGap="30px"
        >
          <Image
            margin="0 auto"
            maxW={[226, 282]}
            maxH={[232, 374]}
            src="/static/media/s3/sustentabilidade2.png"
            alt={t("who-finances.alt")}
          />

          <Stack flex={2} spacing={8} alignItems={["center", "flex-start"]}>
            <Heading
              as="h2"
              size="lg"
              color="green"
              dangerouslySetInnerHTML={{
                __html: t("who-finances.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />

            <Text>{t("who-finances.description")}</Text>

            <Stack direction="row" spacing="20px">
              <Donation
                size="sm"
                colorScheme="blue"
                display={["none", "block"]}
              >
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
            columns={[2, null, null, null, 5]}
            rowGap={["20px", null, null, null, "45px"]}
            columnGap="20px"
            pt="75px"
          >
            <Link href="https://www.opensocietyfoundations.org/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/opensociety.png"
                alt="Open Society Foundations"
              />
            </Link>
            <Link href="https://luminategroup.com/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/luminate.png"
                alt="Luminate"
              />
            </Link>
            <Link href="https://oakfnd.org/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/oak.png"
                alt="OAK Foundation"
              />
            </Link>
            <Link href="https://skoll.org/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/skoll.png"
                alt="Skoll Foundation"
              />
            </Link>
            <Link href="https://www.svri.org/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/svri.png"
                alt="fundação SVRI"
              />
            </Link>
            <Link href="https://www.climaesociedade.org/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/ics.png"
                alt="Instituto Clima e Sociedade"
              />
            </Link>
            <Link href="https://institutogalodamanha.org.br/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/galodamanha.png"
                alt="Instituto galo da manhã"
              />
            </Link>
            <Link href="https://www.co-impact.org/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/coimpact.png"
                alt="Fundação co-impact"
              />
            </Link>
            <Link href="https://www.unicef.org/brazil/" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/unicef1.png"
                alt="Instituto Unicef"
              />
            </Link>
            <Link href="https://www.laudesfoundation.org/br" isExternal>
              <Image
                m="0 auto"
                objectFit="cover"
                src="/static/media/foundations/laudes.png"
                alt="Fundação Laudes"
              />
            </Link>
          </SimpleGrid>
        </Stack>
      </Section>

      {/* Na midia */}
      <ContentMedia
        title={
          <div
            dangerouslySetInnerHTML={{
              __html: t("common:media", {
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

export default QuemSomos;
