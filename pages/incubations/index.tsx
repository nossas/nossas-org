import React from "react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Heading, Img } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Carousel } from "../../components/Slider";
import {
  Header,
  DescriptionBox,
  SubscribeForm,
  ImageTextListBox,
} from "../../content";
import {
  MegaphoneGreen,
  People,
  ThumbsUp,
  Transfer,
} from "../../components/IconsSVG/Functionalities";
import { ImageTextIncubations } from "../../components/Slider/ImageTextIncubations";

const ImageIcon = styled(Img)`
  transform: scale(${(props) => props.scale});
`;

ImageIcon.defaultProps = {
  scale: 0.7,
};

const Incubations: React.FC<WithUserAgentProps> = ({ ua }) => {
  const { t, i18n } = useTranslation("incubations");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="380px"
        videoUrl="/static/media/covers/incubations.mp4"
        title={t("cover")}
        titleColor="white"
        titleAlign="center"
      />
      {/* Content */}
      <Section>
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("whats-is.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={t("whats-is.description")}
        />
      </Section>
      <ImageTextListBox
        width="330px"
        title={t("we-offer.title")}
        items={[
          {
            icon: <MegaphoneGreen />,
            description: t("we-offer.1"),
          },
          {
            icon: <Transfer />,
            description: t("we-offer.2"),
          },
          {
            icon: <ThumbsUp />,
            description: t("we-offer.3"),
          },
          {
            icon: <People />,
            description: t("we-offer.4"),
          },
        ]}
      />
      <Section
        id="projects"
        direction="column"
        spacing="110px"
        bgColor="gray.light"
      >
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("projects.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={t("projects.description")}
        />
        <Carousel
          infiniteLoop
          showStatus
          items={[
            <ImageTextIncubations
              src="/static/media/s3/meacolhelgbt.png"
              title={t("projects.carousel.1.title")}
              description={t("projects.carousel.1.description")}
              href="https://www.acolhelgbt.org/"
              linkText={t("projects.carousel.1.action")}
            />,
            <ImageTextIncubations
              src="/static/media/s3/merepresenta.png"
              title={t("projects.carousel.2.title")}
              description={t("projects.carousel.2.description")}
              href="https://merepresenta.org.br/"
              linkText={t("projects.carousel.2.action")}
            />,
            <ImageTextIncubations
              src="/static/media/s3/defezap.jpg"
              title={t("projects.carousel.3.title")}
              description={t("projects.carousel.3.description")}
              href="http://www.saibamais.defezap.org.br/"
              linkText={t("projects.carousel.3.action")}
            />,
            <ImageTextIncubations
              src="/static/media/s3/incubacoes-rnc.jpg"
              title={t("projects.carousel.4.title")}
              description={t("projects.carousel.4.description")}
              href="https://www.redenossascidades.org/"
              linkText={t("projects.carousel.4.action")}
            />,
            <ImageTextIncubations
              src="/static/media/s3/incubacoes-beta.jpg"
              title={t("projects.carousel.5.title")}
              description={t("projects.carousel.5.description")}
              href="https://www.beta.org.br/"
              linkText={t("projects.carousel.5.action")}
            />,
          ]}
        />
      </Section>
      <Section direction="column" spacing="30px">
        <Heading as="h2" color="green" size="lg">
          <div
            dangerouslySetInnerHTML={{
              __html: t("current-projects.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>

        <Carousel
          isMobile={ua?.isMobile || false}
          items={[
            <ImageTextIncubations
              src="/static/media/s3/mapadoacolhimento.png"
              title={t("current-projects.carousel.1.title")}
              description={t("current-projects.carousel.1.description")}
              href="https://www.mapadoacolhimento.org/"
              linkText={t("current-projects.carousel.1.action")}
            />,
          ]}
        />
      </Section>
      {i18n.language === "pt-BR" && (
        <DescriptionBox
          color="pink"
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("incubate.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={t("incubate.description")}
        >
          <SubscribeForm
            color="blue"
            kind="incubations"
            title={t("incubate.form.title")}
            submitText={t("incubate.form.submit")}
            textSuccess={t("incubate.form.success")}
          />
        </DescriptionBox>
      )}
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "incubations"])),
    },
  };
};

export default withUserAgent(Incubations);
