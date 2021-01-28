import { Stack, Heading, Text } from "@chakra-ui/react";
import Slider, { SliderContent } from "../components/Slider";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Section from "../components/Section";
import { withTranslation } from "../i18n";
import { Body } from "../components/Page";

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
    <Body>
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
      <Section>
        <Slider height={40}>
          <div>
            <SliderContent
              imageUrl="/static/media/leftcontent.png"
              tag={t("sliders:mobilizations.1.tag")}
              title={t("sliders:mobilizations.1.title")}
              description={t("sliders:mobilizations.1.description")}
            />
          </div>
          <div>
            <SliderContent
              imageUrl="/static/media/leftcontent.png"
              tag={t("sliders:mobilizations.1.tag")}
              title={t("sliders:mobilizations.1.title")}
              description={t("sliders:mobilizations.1.description")}
            />
          </div>
        </Slider>
      </Section>
      <Section columns={[1, 2]} bgColor="#f7f7f7" gap={[6, 12]}>
        <Stack spacing={6} maxW="400px">
          <Heading as="h3" size="3xl" color="nossas.pink" fontWeight="normal">
            <b>Manual de</b> mobilização
          </Heading>
          <Text fontSize={["xl", "2xl"]}>
            Ao longo dos 10 capítulos você vai encontrar referências, casos de
            sucesso, exercícios e tudo que você precisa de informação para
            construir campanhas de ativismo de impacto.
          </Text>
        </Stack>
        <Form
          uiSchema={uiSchema}
          schema={schema}
          onSubmit={onSubmit}
          submitText="BAIXAR"
        />
      </Section>
    </Body>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "sliders"],
});

export default withTranslation(["common", "sliders"])(Home);
