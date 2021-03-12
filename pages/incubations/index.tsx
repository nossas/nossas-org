import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Box, SimpleGrid, Heading, Stack, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { I18nInitialProps, withTranslation } from "../../i18n";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Carousel, SliderPanel } from "../../components/Slider";

import IncubateForm from "./_form";
import { ImageText } from "./_slides";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const ImageIcon = styled(Image)`
  transform: scale(${(props) => props.scale});
`;

ImageIcon.defaultProps = {
  scale: 0.7,
};

const Incubations: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    {/* Cover */}
    <Hero
      maxWidth="380px"
      bgImage="/static/media/covers/incube-seu-projeto.png"
      imageDesc={t("content:covers.incubations.title")}
      title={t("content:covers.incubations.title")}
    />
    {/* Content */}
    <Section direction={["column", null, "row"]}>
      <Heading
        as="h2"
        textColor="nossas.blue"
        flex={1}
        marginBottom={["20px", null, 0]}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.incubations.about.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <Text flex={[1, null, 2, null, 3]}>
        {t("content:blocks.incubations.about.description")}
      </Text>
    </Section>
    <Section direction="column" spacing="60px">
      <Heading as="h2" variant="tag">
        {t("content:blocks.incubations.offer.title")}
      </Heading>
      <Stack
        direction={["column", null, "row"]}
        spacing="55px"
        textAlign="center"
        justifyItems="center"
        alignItems="flex-end"
      >
        <Stack alignItems="center">
          <ImageIcon
            src="/static/media/assets/icon-eyelash.png"
            alt="Icone Eyelash"
          />
          <Text>{t("content:blocks.incubations.offer.mobilization")}</Text>
        </Stack>
        <Stack alignItems="center">
          <ImageIcon
            src="/static/media/assets/icon-launch.png"
            alt="Icone Launch"
          />
          <Text>{t("content:blocks.incubations.offer.peoples")}</Text>
        </Stack>
        <Stack alignItems="center">
          <ImageIcon
            src="/static/media/assets/icon-question.png"
            alt="Icone Question"
          />
          <Text>{t("content:blocks.incubations.offer.communication")}</Text>
        </Stack>
      </Stack>
    </Section>
    <Section direction="column" spacing="110px" bgColor="nossas.bggray">
      <Stack
        direction={["column", null, null, "row"]}
        justifyContent="space-between"
      >
        <Heading as="h2" color="nossas.blue" maxW="210px">
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.incubations.projects.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <Text maxW="610px">
          {t("content:blocks.incubations.projects.description")}
        </Text>
      </Stack>
      <Carousel
        infiniteLoop
        items={[
          <ImageText
            src="/static/media/s3/defezap.png"
            title={t("content:blocks.incubations.projects.defezap.title")}
            description={t(
              "content:blocks.incubations.projects.defezap.description"
            )}
            href="#"
            linkText="Saiba mais +"
          />,
          <ImageText
            src="/static/media/s3/exemplo@1.png"
            title={t("content:blocks.incubations.projects.acolhe.title")}
            description={t(
              "content:blocks.incubations.projects.acolhe.description"
            )}
            href="#"
            linkText="Saiba mais +"
          />,
          <ImageText
            src="/static/media/s3/exemplo@1.png"
            title={t("content:blocks.incubations.projects.representa.title")}
            description={t(
              "content:blocks.incubations.projects.representa.description"
            )}
            href="#"
            linkText="Saiba mais +"
          />,
        ]}
      />
    </Section>
    <Section direction="column" spacing="30px">
      <Heading as="h2" color="nossas.green">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.incubations.current_projects.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <SliderPanel
        isMobile={ua.isMobile}
        items={[
          {
            src: "/static/media/s3/mapadoacolhimento.png",
            alt: t("content:blocks.incubations.current_projects.mapa.title"),
            title: t("content:blocks.incubations.current_projects.mapa.title"),
            description: t(
              "content:blocks.incubations.current_projects.mapa.description"
            ),
            href: "#",
            link: "Saiba mais",
          },
          {
            src: "/static/media/s3/minhamanaus.png",
            alt: t("content:blocks.incubations.current_projects.manaus.title"),
            title: t(
              "content:blocks.incubations.current_projects.manaus.title"
            ),
            description: t(
              "content:blocks.incubations.current_projects.manaus.description"
            ),
            href: "#",
            link: "Saiba mais",
          },
        ]}
      />
    </Section>
    <Section
      columns={[1, null, null, 2]}
      columnGap="120px"
      rowGap="35px"
      bgColor="nossas.bggray"
    >
      <Stack spacing="35px">
        <Heading as="h2" color="nossas.pink">
          {t("content:blocks.incubations.incubate.title")}
        </Heading>
        <Text>{t("content:blocks.incubations.incubate.description")}</Text>
      </Stack>
      <Box>
        <IncubateForm />
      </Box>
    </Section>
  </Body>
);

Incubations.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Incubations)
);
