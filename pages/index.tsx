import Head from "next/head";
import { Stack, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import GoogleFonts from "next-google-fonts";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Section from "../components/Section";
import { withTranslation } from '../i18n';

const schema: any = {
  title: "Baixar o manual",
  type: "object",
  required: ["email", "name"],
  properties: {
    name: {
      type: "string",
      title: "Nome",
    },
    email: {
      type: "string",
      title: "E-mail",
      format: "email",
    },
    whatsapp: {
      type: "string",
      title: "Whatsapp",
    },
    state: {
      type: "string",
      title: "Estado",
    },
    city: {
      type: "string",
      title: "Cidade",
    },
  },
};

const uiSchema: any = {
  name: {
    "ui:placeholder": "Seu nome",
  },
  email: {
    "ui:placeholder": "Seu e-mail",
  },
  whatsapp: {
    "ui:placeholder": "(DDD) 00000-0000",
  },
  state: {
    "ui:widget": "select",
    "ui:placeholder": "Selecione",
    "ui:options": {
      items: ["AM", "ES"],
    },
  },
  city: {
    "ui:placeholder": "Sua cidade",
  },
};

const onSubmit = (formData: any) => {
  console.log("formData", { formData });
};

const Home = ({ t }) => {
  return (
    <Flex minH="100vh" direction="column">
      <GoogleFonts href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Bebas+Neue:400,700" />
      <Head>
        <title>NOSSAS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex id="page-container" direction="column" flex="1">
        <Navbar />
        <Hero
          Title={
            <Heading
              as="h1"
              fontSize={["3xl", "6xl"]}
              color="white"
              textAlign="center"
            >
              {t("Hero")}
            </Heading>
          }
          // bgImage="/static/media/bg-example.png"
          videoUrl="/static/media/video-example.mp4"
        />
        {/* Examplo de Hero com titulo e subtitulo */}
        {/* <Hero
          Title={
            <Box maxWidth="800px">
              <Heading as="h1" fontSize={["3xl", "6xl"]} color="white">
                {t("Hero")}
              </Heading>
            </Box>
          }
          Subtitle={
            <Text fontSize={["md", "xl"]} color="white">
              {t("HeroSubtitle")}
            </Text>
          }
          bgColor="nossas.blue"
        /> */}
        <Container as="main" id="page-wrap" flex="1" maxW="none" padding="0">
          <Section>
            <Slider />
          </Section>
          <Section columns={2} bgColor="#f7f7f7">
            <Stack spacing={6} maxW="400px">
              <Heading
                as="h3"
                size="3xl"
                color="nossas.pink"
                fontWeight="normal"
              >
                <b>Manual de</b> mobilização
              </Heading>
              <Text size="2xl">
                Ao longo dos 10 capítulos você vai encontrar referências, casos
                de sucesso, exercícios e tudo que você precisa de informação
                para construir campanhas de ativismo de impacto.
              </Text>
            </Stack>
            <Form
              uiSchema={uiSchema}
              schema={schema}
              onSubmit={onSubmit}
              submitText="BAIXAR"
            />
          </Section>
        </Container>
        <Footer />
      </Flex>
    </Flex>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
