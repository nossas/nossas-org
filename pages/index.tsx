import { NextPage, NextPageContext } from "next";
import {
  Flex,
  Button,
  Heading,
  Image,
  Text,
  Stack,
  Link,
} from "@chakra-ui/react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import Hero from "../components/Hero";
import { withTranslation, I18nInitialProps } from "../i18n";
import { Body, Section } from "../components/Page";
import { SliderPanel } from "../components/Slider";
import Media from "../components/Media";

const ImageTitle = ({ src, title, alt, w = ["40%", 300], ...props }: any) => (
  <Stack
    direction="column"
    spacing={6}
    w={w}
    h={[250, 345]}
    alignItems="center"
    justifyContent="flex-end"
    textAlign="center"
  >
    <Image src={src} alt={alt} {...props} />
    <Heading as="h4" size="lg" color="nossas.blue" textTransform="uppercase">
      {title}
    </Heading>
  </Stack>
);

interface Props extends WithUserAgentProps {
  t: any;
}

const Home: NextPage<Props, I18nInitialProps> = ({ t, ua }) => {
  return (
    <Body isMobile={ua.isMobile}>
      <Hero
        Title={
          <Heading
            as="h1"
            fontSize={["3xl", "6xl"]}
            color="white"
            textAlign="center"
          >
            {t("content:covers.home.title")}
          </Heading>
        }
        // bgImage="/static/media/bg-example.png"
        videoUrl="/static/media/video-example.mp4"
      />
      <Section
        alignItems={["flex-start", "center"]}
        direction={["column", "row"]}
        px={["60px", "300px"]}
        py={["30px", "130px"]}
        spacing={[30, 60]}
      >
        <Image
          maxW={[155, 250]}
          src="/static/media/s3/etudonossas.png"
          alt={t("content:images.home.etudonossas")}
        />
        <Stack spacing={6} direction="column">
          <Text fontSize={["xl", "2xl"]} color="nossas.darkgrey">
            {t("content:blocks.home.etudonossas")}
          </Text>
          <Link
            href="#"
            title={t("content:links.knowmore")}
            color="nossas.pink"
            fontWeight="700"
            fontSize={["xl", "2xl"]}
          >
            {t("content:links.knowmore")} +
          </Link>
        </Stack>
      </Section>
      <Section
        alignItems="center"
        justifyContent="center"
        direction="row"
        flexWrap="wrap"
        spacing={[4, 16]}
        px={["10px", "90px"]}
        py={0}
      >
        <ImageTitle
          src="/static/media/s3/mobilizacaohome.png"
          alt={t("content:images.home.etudonossas")}
          transform="rotate(10deg)"
          w={["40%", 280]}
          title={t("content:blocks.home.grid.mobilization")}
        />
        <ImageTitle
          src="/static/media/s3/materiaiseducativoshome.png"
          alt={t("content:images.home.etudonossas")}
          title={t("content:blocks.home.grid.books")}
        />
        <ImageTitle
          src="/static/media/s3/treinamentohome.png"
          alt={t("content:images.home.etudonossas")}
          title={t("content:blocks.home.grid.learning")}
        />
        <ImageTitle
          src="/static/media/s3/apoioprojetohome.png"
          alt={t("content:images.home.etudonossas")}
          title={t("content:blocks.home.grid.support")}
        />
        <ImageTitle
          src="/static/media/s3/tecnologiashome.png"
          alt={t("content:images.home.etudonossas")}
          title={t("content:blocks.home.grid.tech")}
        />
      </Section>
      <Section px={["20px"]}>
        <Heading
          px={[0, "70px"]}
          as="h2"
          color="nossas.pink"
          size="2xl"
          fontWeight="normal"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.home.actionnow", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <SliderPanel
          height={50}
          isMobile={ua.isMobile}
          items={[
            {
              alt: "teste",
              src: "/static/media/s3/programademobilizadores.png",
              title: t("sliders:home.actionnow.rendabasica.title"),
              description: t("sliders:home.actionnow.rendabasica.description"),
              link: t("content:links.actionnow"),
              href: "#",
            },
            {
              alt: "teste",
              src: "/static/media/s3/rendabasica.png",
              title: t("sliders:home.actionnow.programamobilizadores.title"),
              description: t(
                "sliders:home.actionnow.programamobilizadores.description"
              ),
              link: t("content:links.actionnow"),
              href: "#",
            },
          ]}
        />
      </Section>
      <Section
        alignItems={["center"]}
        direction={["column", "row"]}
        px={["30px", "90px"]}
        py={["60px", "60px"]}
        spacing={[30, 0]}
      >
        <Flex flex={1} justifyContent="space-around">
          <Image
            maxW={[226, 339]}
            maxH={[232, 347]}
            src="/static/media/s3/sustentabilidade.png"
            alt={t("content:images.home.doacao")}
          />
        </Flex>
        <Stack flex={1} spacing={8} alignItems="center">
          <Heading as="h2" color="nossas.green" size="2xl" fontWeight="normal">
            <div
              dangerouslySetInnerHTML={{
                __html: t("content:blocks.home.doacao.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          </Heading>
          <Text fontSize={["xl", "2xl"]} textAlign={["center", "left"]}>
            {t("content:blocks.home.doacao.description")}
          </Text>
          <Button color="white" maxW={190} backgroundColor="nossas.blue">
            {t("content:blocks.home.doacao.button")}
          </Button>
        </Stack>
      </Section>
      <Media
        title="NA MÍDIA"
        logos={[
          "/static/media/s3/dias.png",
          "/static/media/s3/reuters.png",
          "/static/media/s3/nyt.png",
          "/static/media/s3/piaui.png",
          "/static/media/s3/elpais.png",
          "/static/media/s3/forbes.png",
          "/static/media/s3/ted.png",
          "/static/media/s3/zeitgeist.png",
        ]}
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
