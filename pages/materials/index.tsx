import React from "react";
import { Heading, Link, Text, Stack, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { DescriptionBox, SubscribeForm, ImageTextListBox } from "../../content";

const ImageIcon = styled(Image)`
  transform: scale(${(props) => props.scale});
`;

ImageIcon.defaultProps = {
  scale: 0.7,
};

const Materials = () => {
  const { t } = useTranslation("common");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="520px"
        bgColor="white"
        left="30%"
        title={t("content:covers.materials.title")}
        titleColor="green"
        titleAlign="left"
      />
      <Section
        direction={["column", null, null, "row"]}
        spacing={["30px", null, null, "145px"]}
      >
        <Heading as="h2" color="blue.main" maxW={["auto", null, null, "300px"]}>
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
          <Link variant="pink">
            {t("content:blocks.materials.manual.link")}
          </Link>
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
          t={t}
          widgetId={parseInt(process.env.NEXT_PUBLIC_MATERIALS_WIDGET_ID)}
          title={t("content:blocks.materials.manualform.form.title")}
          submitText={t("content:blocks.materials.manualform.form.submit")}
          textSuccess={t("content:blocks.materials.manualform.form.success")}
        />
      </DescriptionBox>
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "content"])),
  },
});

export default Materials;
