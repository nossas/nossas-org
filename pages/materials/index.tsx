import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { Link as LinkStyled, Text, Stack, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import {
  DescriptionBox,
  SubscribeForm,
  ImageTextListBox,
  Header,
} from "../../content";
import {
  Eye,
  Pressure,
  Question,
} from "../../components/IconsSVG/Functionalities";

const ImageIcon = styled(Image)`
  transform: scale(${(props) => props.scale});
`;

ImageIcon.defaultProps = {
  scale: 0.7,
};

const Materials: React.FC = () => {
  const { t } = useTranslation("materials");

  return (
    <Body>
      {/* Cover */}
      <Hero
        maxWidth="520px"
        videoUrl="/static/media/covers/materials.mp4"
        title={t("cover")}
        titleColor="white"
        titleAlign="center"
      />
      <Section>
        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("manual.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={
            <Stack direction="column" spacing="30px">
              <Text maxW="670px">{t("manual.description")}</Text>
              <Link href="/materials#manual">
                <LinkStyled variant="pink">{t("manual.action")}</LinkStyled>
              </Link>
            </Stack>
          }
        />
      </Section>
      <ImageTextListBox
        title={t("manual.explain.title")}
        items={[
          {
            icon: <Eye />,
            description: t("manual.explain.1"),
          },
          {
            icon: <Pressure />,
            description: t("manual.explain.2"),
          },
          {
            icon: <Question />,
            description: t("manual.explain.3"),
          },
        ]}
      />

      <div id="manual">
        <DescriptionBox
          color="pink"
          title={
            <span>
              <div
                dangerouslySetInnerHTML={{
                  __html: t("mobilization.title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </span>
          }
          description={t("mobilization.description")}
        >
          <SubscribeForm
            color="blue"
            kind="materials"
            title={t("mobilization.form.title")}
            submitText={t("mobilization.form.submit")}
            textSuccess={t("mobilization.form.success")}
          />
        </DescriptionBox>
      </div>
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "materials"])),
    },
  };
};

export default Materials;
