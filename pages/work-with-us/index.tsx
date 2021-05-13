import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";

import { I18nInitialProps, withTranslation } from "../../i18n";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import { DescriptionBox, SubscribeForm } from "../../content";
import { SimpleFields } from "../../content/SubscribeForm";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const WorkWithUs: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body>
    <Hero
      maxWidth="1440px"
      videoUrl="/static/media/covers/trabalheconosco.mp4"
      title={t("content:covers.workwithus.title")}
      titleColor="white"
      titleAlign="center"
    />

    <Section spacing={["30px", null, null, null, "245px"]}>
      <Stack
        direction={["column", null, null, "row"]}
        justifyContent="space-between"
      >
        <Heading as="h2" color="blue.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.workWithUs.about.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <Text maxW="702px">
          {t("content:blocks.workWithUs.about.description")}
        </Text>
      </Stack>
    </Section>

    <DescriptionBox
      color="green"
      title={
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.workWithUs.vacancies.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      }
      description={t("content:blocks.workWithUs.vacancies.description")}
    >
      <SubscribeForm
        color="blue"
        t={t}
        widgetId={parseInt(process.env.NEXT_PUBLIC_WORKWITHUS_WIDGET_ID)}
        title={t("content:blocks.workWithUs.form.title")}
        submitText={t("content:blocks.workWithUs.form.submit")}
        textSuccess={t("content:blocks.workWithUs.form.success")}
        fieldsComponent={SimpleFields}
      />
    </DescriptionBox>

    <Section display="flex">
      <Stack
        alignItems="center"
        direction={["column", null, null, "row"]}
        spacing={["30px"]}
      >
        <Box flex="1">
          <Image src="/static/media/s3/workwithus.png" margin="0 auto" />
        </Box>
        <Text
          textAlign={["center", null, null, "left"]}
          spacing={["20px"]}
          flex="1"
        >
          {t("content:blocks.workWithUs.equity.title")}
        </Text>
      </Stack>
    </Section>
  </Body>
);

WorkWithUs.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(WorkWithUs)
);
