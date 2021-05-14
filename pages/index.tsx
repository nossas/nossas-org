import { NextPage } from "next";
import { Flex, Heading, Image, Text, Stack, Link } from "@chakra-ui/react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";

import Hero from "../components/Hero";
import { Body, Section } from "../components/Page";
import { SliderPanel } from "../components/Slider";
import Donation from "../components/Donation";
import { Navigation } from "../components/Accordion";
import Media from "../content/Media";
import { withTranslation, I18nInitialProps } from "../i18n";

interface Props extends WithUserAgentProps {
  t: any;
}

const Home: NextPage<Props, I18nInitialProps> = ({ t, ua }) => {
  return (
    <Body>
      {/* Cover */}
      <Hero
        // title={t("content:covers.home.title")}
        title="O NOSSAS IMPULSIONA O ATIVISMO DEMOCRÁTICO E SOLIDÁRIO NO BRASIL"
        videoUrl="/static/media/covers/home.mp4"
      />
      <Section
        id="join-us"
        justifyContent={["flex-start", null, null, "space-between"]}
        alignItems={["flex-start", "flex-start"]}
        direction={["column", null, null, null, "row"]}
        spacing="30px"
      >
        <Heading as="h2" color="pink.main" size="lg" minW="245px">
          {/* <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.home.etudonossas.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          /> */}
          Junte-se <b>a nós</b>
        </Heading>
        <Stack maxW="700px">
          <Text>
            {/* {t("content:blocks.home.etudonossas.description")} */}O NOSSAS
            apoia indivíduos, coletivos e organizações em sua luta por direitos
            e melhores políticas públicas. Compartilhamos oportunidades de ação,
            metodologias e ferramentas para a criação de mobilizações de
            impacto. Explore nosso espaço de ativismo e impulsione seu movimento
            com a gente!
          </Text>
          {/* <Link
            href="/about"
            target="_self"
            title={t("content:links.knowmore")}
            color="pink.main"
          >
            {t("content:links.knowmore")} +
          </Link> */}
        </Stack>
      </Section>
      <Section
        alignItems="center"
        justifyContent="center"
        direction={["column", null, null, "row"]}
        flexWrap="wrap"
        spacing={16}
        px={["10px", "90px"]}
      >
        <Navigation
          items={[
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="265px">
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: t("content:blocks.home.grid.mobilization.title", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  /> */}
                  Junte-se a uma de <b>nossas campanhas</b>
                </Heading>
              ),
              image: "/static/media/s3/mobilizacaohome.png",
              // about: t("content:blocks.home.grid.mobilization.about"),
              about:
                "Conheça as causas nas quais estamos engajados no momento e participe de nossa luta pela defesa de direitos e fortalecimento da democracia.",
              navigation: {
                href: "/mobilizations",
                // title: t("content:blocks.home.grid.mobilization.link"),
                title: "Veja as campanhas ativas",
              },
            },
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="295px">
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: t("content:blocks.home.grid.books.title", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  /> */}
                  Acesse nossos <b>materiais educativos</b>
                </Heading>
              ),
              image: "/static/media/s3/materiaiseducativoshome.png",
              // about: t("content:blocks.home.grid.books.about"),
              about:
                "Disponibilizamos um material super completo e com várias dicas para ajudar seu coletivo ou organização a aumentar o seu impacto.",
              navigation: {
                href: "/materials",
                // title: t("content:blocks.home.grid.books.link"),
                title: "Acesse a página",
              },
            },
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="365px">
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: t("content:blocks.home.grid.learning.title", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  /> */}
                  Seja treinado em <b>metodologias de ativismo</b>
                </Heading>
              ),
              image: "/static/media/s3/treinamentohome.png",
              // about: t("content:blocks.home.grid.learning.about"),
              about:
                "Realizamos ao longo do ano programas de treinamento em ativismo, temáticos e gratuitos, para pessoas do Brasil inteiro. Veja quais turmas estão abertas agora.",
              navigation: {
                href: "/trainings",
                // title: t("content:blocks.home.grid.learning.link"),
                title: "Confira nosso cronograma",
              },
            },
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="235px">
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: t("content:blocks.home.grid.support.title", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  /> */}
                  Incube seu <b>projeto conosco</b>
                </Heading>
              ),
              image: "/static/media/s3/apoioprojetohome.png",
              // about: t("content:blocks.home.grid.support.about"),
              about:
                "Receba capacitação, apoio e mentoria através do programa de incubação. Nós aceleramos projetos de mobilização e solidariedade que querem causar impacto no mundo.",
              navigation: {
                href: "/incubations",
                // title: t("content:blocks.home.grid.support.link"),
                title: "Acesse a página",
              },
            },
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="345px">
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: t("content:blocks.home.grid.tech.title", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  /> */}
                  Use as melhores <b>tecnologias de ativismo</b>
                </Heading>
              ),
              image: "/static/media/s3/tecnologiashome.png",
              // about: t("content:blocks.home.grid.tech.about"),
              about:
                "Conheça o BONDE, nossa plataforma de tecnologia, especialmente desenvolvida para ativistas amadores ou experientes criarem suas campanhas sob medida.",
              navigation: {
                href: "/technologies",
                // title: t("content:blocks.home.grid.tech.link"),
                title: "Conheça o BONDE",
              },
            },
          ]}
        />
      </Section>
      <Section
        id="we-are-doing"
        direction="column"
        spacing={8}
        backgroundColor="#F7F7F7;
"
      >
        <Heading as="h2" size="lg" color="pink.main">
          {/* <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.home.actionnow", {
                interpolation: { escapeValue: false },
              }),
            }}
          /> */}
          O que estamos <b>fazendo</b>
        </Heading>
        <SliderPanel
          infiniteLoop
          isMobile={ua.isMobile}
          items={[
            {
              src: "/static/media/s3/liberaotablet.jpg",
              href: "https://www.liberaotablet.minhasampa.org.br/",
              alt: t("sliders:home.liberaotablet.title"),
              title: t("sliders:home.liberaotablet.title"),
              description: t("sliders:home.liberaotablet.description"),
              link: t("sliders:home.liberaotablet.action"),
            },
            {
              src: "/static/media/s3/metroaumentonao.png",
              href: "https://www.metroaumentonao.meurio.org.br/",
              alt: t("sliders:home.metroaumentonao.title"),
              title: t("sliders:home.metroaumentonao.title"),
              description: t("sliders:home.metroaumentonao.description"),
              link: t("sliders:home.metroaumentonao.action"),
            },
            {
              src: "/static/media/s3/rendabasica.png",
              href: "https://www.auxilioateofimdapandemia.org/",
              alt: t("sliders:home.rendabasica.title"),
              title: t("sliders:home.rendabasica.title"),
              description: t("sliders:home.rendabasica.description"),
              link: t("sliders:home.rendabasica.action"),
            },
            {
              src: "/static/media/s3/temgentecomfome.png",
              href: "https://www.temgentecomfome.com.br/",
              alt: t("sliders:home.temgentecomfome.title"),
              title: t("sliders:home.temgentecomfome.title"),
              description: t("sliders:home.temgentecomfome.description"),
              link: t("sliders:home.temgentecomfome.action"),
            },
          ]}
        />
      </Section>
      <Section
        alignItems="center"
        direction={["column", null, null, "row"]}
        spacing={["30px"]}
      >
        <Flex flex={1}>
          <Image
            maxW={[226, 339]}
            maxH={[232, 347]}
            margin="0 auto"
            src="/static/media/s3/sustentabilidade.png"
            // alt={t("content:images.home.doacao")}
            alt="Sustentabilidade"
          />
        </Flex>
        <Stack
          flex={1.5}
          spacing={8}
          alignItems={["center", null, null, "flex-start"]}
        >
          <Heading as="h2" size="lg" color="green">
            {/* <div
              dangerouslySetInnerHTML={{
                __html: t("content:blocks.home.doacao.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            /> */}
            Faça uma <b>doação</b>
          </Heading>
          <Text textAlign={["center", "left"]} maxW="711px">
            {/* {t("content:blocks.home.doacao.description")} */}O NOSSAS vive
            de doações de pessoas e fundações que acreditam em nosso trabalho.
            Não recebemos dinheiro de concessionárias de serviços públicos,
            empresas privadas ou partidos políticos, e auditamos anualmente
            nossas contas com profissionais independentes. Contribua você
            também!
          </Text>
          <Donation maxW={190}>
            {/* {t("content:blocks.home.doacao.button")} */}
            Quero doar
          </Donation>
        </Stack>
      </Section>
      <Media
        title={
          <div
            dangerouslySetInnerHTML={{
              __html: t("common:media.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        }
      />
    </Body>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "sliders", "content"],
});

export default withUserAgent(
  withTranslation(["common", "sliders", "content"])(Home)
);
