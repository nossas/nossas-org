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

const ImageTitle = ({
  href,
  src,
  title,
  alt,
  w = ["80%", null, null, null, 300],
  titleProps,
  ...props
}: any) => (
  <Link href={href} target="_self">
    <Stack
      direction="column"
      spacing={6}
      w={w}
      h={[250, 345]}
      alignItems="center"
      justifyContent="flex-end"
      textAlign="center"
      margin="0 auto"
    >
      <Image src={src} alt={alt} {...props} />
      <Heading
        as="h4"
        size="sm"
        color="blue.main"
        textTransform="uppercase"
        fontWeight="bold"
        {...(titleProps || {})}
      >
        {title}
      </Heading>
    </Stack>
  </Link>
);

interface Props extends WithUserAgentProps {
  t: any;
}

const Home: NextPage<Props, I18nInitialProps> = ({ t, ua }) => {
  return (
    <Body isMobile={ua.isMobile}>
      {/* Cover */}
      <Hero
        title={t("content:covers.home.title")}
        videoUrl="/static/media/covers/home.mov"
      />
      <Section
        justifyContent={["flex-start", "center"]}
        alignItems={["flex-start", "center"]}
        direction={["column", "row"]}
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
            href="/about"
            target="_self"
            title={t("content:links.knowmore")}
            color="pink.main"
          >
            {t("content:links.knowmore")} +
          </Link>
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
                  {t("content:blocks.home.grid.mobilization.title")}
                </Heading>
              ),
              image: "/static/media/s3/mobilizacaohome.png",
              about: t("content:blocks.home.grid.mobilization.about"),
              navigation: {
                href: "/mobilizations",
                title: t("content:blocks.home.grid.mobilization.link"),
              },
            },
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="285px">
                  {t("content:blocks.home.grid.books.title")}
                </Heading>
              ),
              image: "/static/media/s3/materiaiseducativoshome.png",
              about: t("content:blocks.home.grid.books.about"),
              navigation: {
                href: "/materials",
                title: t("content:blocks.home.grid.books.link"),
              },
            },
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="345px">
                  {t("content:blocks.home.grid.learning.title")}
                </Heading>
              ),
              image: "/static/media/s3/treinamentohome.png",
              about: t("content:blocks.home.grid.learning.about"),
              navigation: {
                href: "/materials",
                title: t("content:blocks.home.grid.learning.link"),
              },
            },
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="225px">
                  {t("content:blocks.home.grid.support.title")}
                </Heading>
              ),
              image: "/static/media/s3/apoioprojetohome.png",
              about: t("content:blocks.home.grid.support.about"),
              navigation: {
                href: "/incubations",
                title: t("content:blocks.home.grid.support.link"),
              },
            },
            {
              title: (
                <Heading as="h2" color="blue.main" size="md" maxW="345px">
                  {t("content:blocks.home.grid.tech.title")}
                </Heading>
              ),
              image: "/static/media/s3/tecnologiashome.png",
              about: t("content:blocks.home.grid.tech.about"),
              navigation: {
                href: "/technologies",
                title: t("content:blocks.home.grid.tech.link"),
              },
            },
          ]}
        />
      </Section>
      <Section id="we-are-doing" direction="column" spacing={8}>
        <Heading as="h2" size="lg" color="pink.main">
          <div
            dangerouslySetInnerHTML={{
              __html: t("content:blocks.home.actionnow", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Heading>
        <SliderPanel
          infiniteLoop
          isMobile={ua.isMobile}
          items={[
            {
              alt: t("sliders:home.rendabasica.title"),
              src: "/static/media/s3/rendabasica.png",
              title: t("sliders:home.rendabasica.title"),
              description: t("sliders:home.rendabasica.description"),
              link: t("sliders:home.rendabasica.action"),
              href: "https://www.auxilioateofimdapandemia.org/",
            },
            {
              alt: t("sliders:home.programademobilizadores.title"),
              src: "/static/media/s3/programademobilizadores.png",
              title: t("sliders:home.programademobilizadores.title"),
              description: t(
                "sliders:home.programademobilizadores.description"
              ),
              link: t("sliders:home.programademobilizadores.action"),
              href: "https://www.mobilizadores.nossas.org/",
            },
            {
              alt: t("sliders:home.temgentecomfome.title"),
              src: "/static/media/s3/temgentecomfome.png",
              title: t("sliders:home.temgentecomfome.title"),
              description: t("sliders:home.temgentecomfome.description"),
              link: t("sliders:home.temgentecomfome.action"),
              href: "https://www.temgentecomfome.com.br/",
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
            alt={t("content:images.home.doacao")}
          />
        </Flex>
        <Stack
          flex={1.5}
          spacing={8}
          alignItems={["center", null, null, "flex-start"]}
        >
          <Heading as="h2" size="lg" color="green">
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
