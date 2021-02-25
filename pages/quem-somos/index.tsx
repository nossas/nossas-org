import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { Body, Section, TagAsTitle } from "../../components/Page";
import Hero from "../../components/Hero";
import Timeline from "./_timeline";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const ImpactNumber = ({ numberText, description }) => (
  <Flex direction="column">
    <Heading as="h4" display="flex" flexDirection="column">
      <Text as="span" size="lg" color="nossas.pink">
        {numberText}
      </Text>
      <Text as="span" size="sm">
        {description}
      </Text>
    </Heading>
  </Flex>
);

const QuemSomos: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>
    {/* Cover */}
    <Hero
      bgColor="white"
      Title={
        <Heading
          as="h1"
          size="4xl"
          fontWeight="700"
          color="nossas.blue"
          maxW={[710]}
        >
          {t("content:covers.home.title")}
        </Heading>
      }
    />
    {/* History */}
    <Section direction={["column", "row"]} spacing={["40px", "115px"]}>
      <TagAsTitle>{t("content:blocks.about.history.title")}</TagAsTitle>
      <Text maxW={["925px"]}>
        {t("content:blocks.about.history.description")}
      </Text>
    </Section>
    {/* Timeline */}
    <Timeline t={t} isMobile={ua.isMobile} />
    {/* Impacto */}
    <Section direction={["column", "row"]} spacing={["50px", "150px"]}>
      <Heading as="h2" size="lg" color="nossas.pink">
        <div
          dangerouslySetInnerHTML={{
            __html: t("content:blocks.about.numbers.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Heading>
      <SimpleGrid columns={2} gridColumnGap="95px" gridRowGap="45px">
        <ImpactNumber
          numberText="+3 milhões"
          description="de reais arrecadados em financiamento coletivo"
        />
        <ImpactNumber
          numberText="+5.400"
          description="voluntárias e voluntários cadastrados"
        />
        <ImpactNumber
          numberText="+120"
          description="mudanças de política pública"
        />
        <ImpactNumber numberText="+200" description="campanhas lançadas" />
        <ImpactNumber
          numberText="+26 mil"
          description="pessoas já fizeram doações"
        />
        <ImpactNumber
          numberText="+1 milhão"
          description="de pessoas mobilizadas"
        />
      </SimpleGrid>
    </Section>
  </Body>
);

QuemSomos.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(withTranslation(["common", "content"])(QuemSomos));
