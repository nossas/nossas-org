import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Form from "../../components/Form";
import Section from "../../components/Section";

const onSubmit = (formData: any) => {
  console.log("formData", { formData });
};

const ContentForm = () => {
  const schema: any = {
    title: "INSCREVA-SE",
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

  return (
    <Section columns={[1, 2]} bgColor="#f7f7f7" gap={[6, 12]}>
      <Stack spacing={6}>
        <Heading as="h3" size="3xl" color="nossas.pink" fontWeight="normal">
          <b>INCUBE</b>
          <br />
          SEU PROJETO
        </Heading>
        <Text fontSize={["xl", "2xl"]} maxW={505}>
          Tem um projeto incrível que pode gerar impactos transformadores no seu
          entorno, mas tá faltando um empurrãozinho pra colocá-lo no mundo?
          Nosso programa de incubação foi feito pra você :)
        </Text>
      </Stack>
      <Form
        uiSchema={uiSchema}
        schema={schema}
        onSubmit={onSubmit}
        submitText="ENVIAR"
      />
    </Section>
  );
};

export default ContentForm;
