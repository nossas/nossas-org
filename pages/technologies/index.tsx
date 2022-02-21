import React from "react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
  MegaphonePink,
  Email,
  Subscription,
  Money,
} from "../../components/IconsSVG/Functionalities";

const Technologies: React.FC<WithUserAgentProps> = ({ ua }) => {
  const { t } = useTranslation("technologies");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="380px"
        videoUrl="/static/media/covers/technologies.mp4"
        title={t("cover")}
        titleColor="white"
        titleAlign="center"
      />

      <Section>
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("begin.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={t("begin.description")}
        />
      </Section>

      <ImageTextListBox
        maxWidth="1400px"
        title={t("functionalities.title")}
        items={[
          {
            icon: <Computer />,
            description: t("functionalities.items.computer"),
          },
          {
            icon: <Email />,
            description: t("functionalities.items.email"),
          },
          {
            icon: <Money />,
            description: t("functionalities.items.money"),
          },
          {
            icon: <Subscription />,
            description: t("functionalities.items.subscription"),
          },
          {
            icon: <MegaphonePink />,
            description: t("functionalities.items.communication"),
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
            <Heading as="h2" color="green" maxW="300px" size="lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: t("use.title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </Heading>
            <Text marginBottom="25px">{t("use.description")}</Text>
            <Button
              onClick={() => window.open("https://www.bonde.org/", "_target")}
              maxW="190px"
            >
              {t("use.action")}
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
        <Heading as="h2" color="blue.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("who-used.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
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
            <Link
              href="https://www.institutomariellefranco.org/"
              target="_blank"
            >
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
          <div
            dangerouslySetInnerHTML={{
              __html: t("campaigns.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <SliderPanel
          infiniteLoop
          isMobile={ua?.isMobile || false}
          items={[
            {
              src: "/static/media/s3/saldaoamazonia.png",
              alt: "Saldão da Amazônia",
              title: "Saldão da Amazônia",
              description: t("campaigns.carousel.amazonia"),
              href: "https://www.saldaodaamazonia.org.br/",
            },
            {
              src: "/static/media/s3/maisquepalmas.png",
              alt: "Mais do que palmas",
              title: "Mais do que palmas",
              description: t("campaigns.carousel.palmas"),
              href: "http://www.mais-que-palmas.bonde.org/",
            },
            {
              src: "/static/media/s3/ahoraeagora.png",
              alt: "A hora é agora",
              title: "A hora é agora",
              description: t("campaigns.carousel.agora"),
              href: "https://www.stf.alloutbrasil.org/",
            },
          ]}
        />
      </Section>
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "technologies"])),
    },
  };
};

export default withUserAgent(Technologies);
