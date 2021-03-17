import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Heading, Link, Text, Stack, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { DescriptionBox, SubscribeForm, ImageTextListBox } from "../../content";

const ImageIcon = styled(Image)`
  transform: scale(${(props) => props.scale});
`;

ImageIcon.defaultProps = {
  scale: 0.7,
};

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Materials: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    {/* Cover */}
    <Hero
      maxWidth="520px"
      bgColor="white"
      left="30%"
      title={t("content:covers.materials.title")}
      titleColor="green"
      titleAlign="left"
    />
    <Section direction={["column", null, null, "row"]} spacing="145px">
      <Heading as="h2" color="blue.main" maxW="370px">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.materials.manual.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <Stack direction="column" spacing="30px">
        <Text>{t("content:blocks.materials.manual.description")}</Text>
        <Link variant="pink">{t("content:blocks.materials.manual.link")}</Link>
      </Stack>
    </Section>
    <ImageTextListBox
      title={t("content:blocks.materials.learning.title")}
      items={[
        {
          src: "/static/media/assets/icon-eyelash-color.png",
          alt: "Icone Eyelash",
          description: t("content:blocks.materials.learning.strategy"),
        },
        {
          src: "/static/media/assets/icon-launch-color.png",
          alt: "Icone Launch",
          description: t("content:blocks.materials.learning.target"),
        },
        {
          src: "/static/media/assets/icon-question-color.png",
          alt: "Icone Question",
          description: t("content:blocks.materials.learning.create"),
        },
      ]}
    />
    <DescriptionBox
      title={
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.materials.manualform.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      }
      description={t("content:blocks.materials.manualform.description")}
    >
      <SubscribeForm
        title={t("content:blocks.materials.manualform.form.title")}
        submitText={t("content:blocks.materials.manualform.form.submit")}
      />
    </DescriptionBox>
  </Body>
);

Materials.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(withTranslation(["common", "content"])(Materials));