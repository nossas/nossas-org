import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Header } from "../../content";
import { VStack, Text } from "@chakra-ui/react";

const Press: React.FC = () => (
  <Body>
    <Hero
      bgImage="/static/media/covers/header-press.png"
      title="Imprensa"
      titleColor="white"
      titleAlign="center"
    />

    <Section>
      <Header
        title={
          <>
            Jornalista, <br />
            esse espaço <br />
            <b>é para você</b>
          </>
        }
        description={
          <VStack spacing={5} maxW={725}>
            <Text>
              Se você tem interesse em conversar conosco sobre alguma pauta,
              saber mais sobre algum dos nossos projetos ou campanhas em
              andamento, esse espaço é para você!
            </Text>

            <Text>
              Nos mobilizamos por inúmeras causas tanto de alcance nacional,
              quanto no âmbito local, por meio da Rede Nossas Cidades, do Norte
              ao Sul do Brasil.
            </Text>

            <Text>
              Foram 15 campanhas vitoriosas em 2021 que mobilizaram milhares de
              pessoas, voluntários e organizações parceiras em todo o país, e
              cujo impacto transformou positivamente a vida de milhares de
              brasileiros.
            </Text>

            <Text>
              Justamente por isso, somos uma fonte quase inesgotável de grandes
              histórias e personagens; desde aqueles que colocam a mão na massa
              para fazer do mundo um lugar mais solidário e democrático, àqueles
              cujas vidas são para sempre transformadas pelo nosso trabalho.
            </Text>

            <Text>
              Se você deseja saber mais sobre o que estamos fazendo agora ou
              sobre alguma das nossas campanhas ativas, escreva para a gente em
              <Text textColor="#2D00A1" fontWeight="bold">
                <a href="mailto:imprensa@nossas.org">imprensa@nossas.org</a>.
              </Text>
            </Text>
          </VStack>
        }
      />
    </Section>
  </Body>
);

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "trainings"])),
    },
  };
};

export default Press;
