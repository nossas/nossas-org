import React from "react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Heading, Stack, Text, Img, Link } from "@chakra-ui/react";
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

interface ImageTextProps {
  src: string;
  alt?: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export const ImageText: React.FC<ImageTextProps> = ({
  alt,
  src,
  title,
  description,
  href,
  linkText,
}) => {
  return (
    <Stack
      direction={["column", "column", null, null, "row"]}
      spacing="70px"
      alignItems="center"
    >
      <Img
        objectFit="cover"
        boxSize={["357px", null, null, null, "357px", "427px"]}
        src={src}
        alt={alt}
      />
      <Stack spacing="10px" textAlign="left">
        <Link href={href} target="_blank">
          <Heading as="h3" color="blue.main" fontWeight="bold" size="md">
            {title}
          </Heading>
        </Link>
        <Text>{description}</Text>
        <Link href={href} target="_blank" variant="pink">
          {`${linkText} +`}
        </Link>
      </Stack>
    </Stack>
  );
};

const ImageIcon = styled(Img)`
  transform: scale(${(props) => props.scale});
`;

ImageIcon.defaultProps = {
  scale: 0.7,
};

const Incubations: React.FC<WithUserAgentProps> = ({ ua }) => {
  const { t } = useTranslation("incubations");

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
            <ImageText
              src="/static/media/s3/meacolhelgbt.png"
              title={t("projects.carousel.1.title")}
              description={t("projects.carousel.1.description")}
              href="https://www.acolhelgbt.org/"
              linkText={t("projects.carousel.1.action")}
            />,
            <ImageText
              src="/static/media/s3/paneladepressao.png"
              title={t("projects.carousel.2.title")}
              description={t("projects.carousel.2.description")}
              linkText={t("projects.carousel.2.action")}
            />,
            <ImageText
              src="/static/media/s3/merepresenta.png"
              title={t("projects.carousel.3.title")}
              description={t("projects.carousel.3.description")}
              href="https://merepresenta.org.br/"
              linkText={t("projects.carousel.3.action")}
            />,
            <ImageText
              src="/static/media/s3/incubacoes-meurecife.jpg"
              title={t("projects.carousel.4.title")}
              description={t("projects.carousel.4.description")}
              href="https://www.meurecife.org.br/"
              linkText={t("projects.carousel.4.action")}
            />,
            <ImageText
              src="/static/media/s3/defezap.jpg"
              title={t("projects.carousel.5.title")}
              description={t("projects.carousel.5.description")}
              href="http://www.saibamais.defezap.org.br/"
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
          infiniteLoop
          showStatus
          isMobile={ua?.isMobile || false}
          items={[
            <ImageText
              src="/static/media/s3/mapadoacolhimento.png"
              title={t("current-projects.carousel.1.title")}
              description={t("current-projects.carousel.1.description")}
              href="https://www.mapadoacolhimento.org/"
              linkText={t("current-projects.carousel.1.action")}
            />,
            <ImageText
              src="/static/media/s3/incubacoes-meurio.jpg"
              title={t("current-projects.carousel.2.title")}
              description={t("current-projects.carousel.2.description")}
              href="https://www.meurio.org.br/"
              linkText={t("current-projects.carousel.2.action")}
            />,
            <ImageText
              src="/static/media/s3/incubacoes-msp.jpg"
              title={t("current-projects.carousel.3.title")}
              description={t("current-projects.carousel.3.description")}
              href="https://www.minhasampa.org.br/"
              linkText={t("current-projects.carousel.3.action")}
            />,
            <ImageText
              src="/static/media/s3/incubacoes-rnc.jpg"
              title={t("current-projects.carousel.4.title")}
              description={t("current-projects.carousel.4.description")}
              href="https://www.redenossascidades.org/"
              linkText={t("current-projects.carousel.4.action")}
            />,
            <ImageText
              src="/static/media/s3/incubacoes-bonde.jpg"
              title={t("current-projects.carousel.5.title")}
              description={t("current-projects.carousel.5.description")}
              href="https://www.bonde.org/"
              linkText={t("current-projects.carousel.5.action")}
            />,
            <ImageText
              src="/static/media/s3/incubacoes-beta.jpg"
              title={t("current-projects.carousel.6.title")}
              description={t("current-projects.carousel.6.description")}
              href="https://www.beta.org.br/"
              linkText={t("current-projects.carousel.6.action")}
            />,
          ]}
        />
      </Section>

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
          widgetId={parseInt(process.env.NEXT_PUBLIC_INCUBATIONS_WIDGET_ID)}
          title={t("incubate.form.title")}
          submitText={t("incubate.form.submit")}
          textSuccess={t("incubate.form.success")}
        />
      </DescriptionBox>
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
