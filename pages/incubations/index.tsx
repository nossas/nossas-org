import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Heading, Stack, Text, Image, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { I18nInitialProps, withTranslation } from "../../i18n";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Carousel, SliderPanel } from "../../components/Slider";
import { DescriptionBox, SubscribeForm, ImageTextListBox } from "../../content";

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
  const imageSizes = {
    maxW: ["510px", null, null, null, "610px"],
    height: "auto",
  };

  return (
    <Stack
      direction={["column", null, null, "row"]}
      spacing="70px"
      alignItems="center"
    >
      <Image src={src} alt={alt} {...imageSizes} />
      <Stack spacing="10px" textAlign="left">
        <Heading as="h3" color="nossas.blue" fontWeight="bold">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Link href={href} target="_self" variant="pink">
          {linkText}
        </Link>
      </Stack>
    </Stack>
  );
};

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
        textColor="blue.main"
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
    <ImageTextListBox
      title={t("content:blocks.incubations.offer.title")}
      items={[
        {
          src: "/static/media/assets/icon-eyelash.png",
          alt: "Icone Eyelash",
          description: t("content:blocks.incubations.offer.mobilization"),
        },
        {
          src: "/static/media/assets/icon-launch.png",
          alt: "Icone Launch",
          description: t("content:blocks.incubations.offer.peoples"),
        },
        {
          src: "/static/media/assets/icon-question.png",
          alt: "Icone Question",
          description: t("content:blocks.incubations.offer.communication"),
        },
      ]}
    />
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
    <DescriptionBox
      title={
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.incubations.incubate.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      }
      description={t("content:blocks.incubations.incubate.description")}
    >
      <SubscribeForm
        title={t("content:blocks.incubations.incubate.form.title")}
        submitText={t("content:blocks.incubations.incubate.form.submit")}
      />
    </DescriptionBox>
  </Body>
);

Incubations.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Incubations)
);
