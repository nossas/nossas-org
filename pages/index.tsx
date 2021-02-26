import { NextPage } from "next";
import { Flex, Heading, Image, Text, Stack, Link } from "@chakra-ui/react";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import Hero from "../components/Hero";
import { Body, Section } from "../components/Page";
import { SliderPanel } from "../components/Slider";
import Media from "../components/Media";
import Donation from "../components/Donation";
import { withTranslation, I18nInitialProps } from "../i18n";

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
    <Heading
      as="h4"
      size="sm"
      color="nossas.blue"
      textTransform="uppercase"
      fontWeight="bold"
    >
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
            size="lg"
            fontWeight="bold"
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
        justifyContent={["flex-start", "center"]}
        alignItems={["flex-start", "center"]}
        direction={["column", "row"]}
        py={["30px", "130px"]}
        spacing={["30px", "60px"]}
      >
        <Image
          maxW={[155, 250]}
          src="/static/media/s3/etudonossas.png"
          alt={t("content:images.home.etudonossas")}
        />
        <Stack spacing={6} direction="column" maxW="500px">
          <Text>{t("content:blocks.home.etudonossas")}</Text>
          <Link
            href="#"
            title={t("content:links.knowmore")}
            color="nossas.pink"
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
      <Section>
        <Heading as="h2" size="lg" color="nossas.pink">
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.home.actionnow", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <SliderPanel
          isMobile={ua.isMobile}
          items={[
            {
              alt: "teste",
              src: "/static/media/s3/rendabasica.png",
              title: t("sliders:home.actionnow.1.title"),
              description: t("sliders:home.actionnow.1.description"),
              link: t("content:links.actionnow"),
              href: "#",
            },
            {
              alt: "teste",
              src: "/static/media/s3/programademobilizadores.png",
              title: t("sliders:home.actionnow.2.title"),
              description: t("sliders:home.actionnow.2.description"),
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
        <Stack flex={1.5} spacing={8} alignItems={["center", "left"]}>
          <Heading as="h2" size="lg" color="nossas.green">
            <div
              dangerouslySetInnerHTML={{
                __html: t("content:blocks.home.doacao.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          </Heading>
          <Text textAlign={["center", "left"]}>
            {t("content:blocks.home.doacao.description")}
          </Text>
          <Donation maxW={190}>
            {t("content:blocks.home.doacao.button")}
          </Donation>
        </Stack>
      </Section>
      <Media
        title={
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.home.media.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        }
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
