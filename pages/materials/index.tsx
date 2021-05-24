import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Heading, Link, Text, Stack, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { I18nInitialProps, withTranslation } from "../../i18n";
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

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Materials: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body>
    {/* Cover */}
    <Hero
      maxWidth="520px"
      videoUrl="/static/media/covers/materials.mp4"
      title="Faça você mesmo sua própria campanha de impacto!"
      titleColor="white"
      titleAlign="center"
    />
    <Section>
      <Header
        title={
          <>
            Baixe agora <br />
            <b>seu manual</b>
          </>
        }
        description={
          <Stack direction="column" spacing="30px">
            <Text maxW="670px">
              Nosso manual de mobilização resume muito do que aprendemos em uma
              década de experiência com ativismo no Brasil. Saiba também como
              mobilizar pessoas em torno de causas e organizá-las em redes de
              solidariedade.
            </Text>
            <Link href="/materials#manual" variant="pink">
              Baixar manual
            </Link>
          </Stack>
        }
      />
    </Section>
    <ImageTextListBox
      title="O que você pode aprender com o manual?"
      items={[
        {
          icon: <Eye />,
          description:
            "Identificar qual mudança você quer no mundo e traçar estratégias para alcançar seu objetivo",
        },
        {
          icon: <Pressure />,
          description:
            "Entender como e quem pressionar, além de saber quem é o público que pode se mobilizar com você",
        },
        {
          icon: <Question />,
          description:
            "Criar narrativas interessantes que mobilizem seu público nas redes sociais e em outros espaços de convivência",
        },
      ]}
    />
    <div id="manual">
      <DescriptionBox
        color="pink"
        title={
          <span>
            Manual de <b>mobilização</b>
          </span>
        }
        description="Ao longo dos 10 capítulos você vai encontrar referências, casos de sucesso, exercícios e tudo que você precisa de informação para construir campanhas de impacto."
      >
        <SubscribeForm
          color="blue"
          t={t}
          widgetId={parseInt(process.env.NEXT_PUBLIC_MATERIALS_WIDGET_ID)}
          title="Baixar manual"
          submitText="Baixar"
          textSuccess="Super! Agora verifique seu e-mail (inclusive a caixa de spam) que já já o manual que vai te ajudar a colocar sua mobilização na rua chega para você :)"
        />
      </DescriptionBox>
    </div>
  </Body>
);

Materials.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(withTranslation(["common", "content"])(Materials));
