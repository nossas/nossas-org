import React from "react";
import Form from "../components/FormSchema";

const onSubmit = (formData: any) => {
  console.log("formData", { formData });
};

interface SubscribeFormProps {
  title: string;
  submitText: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ title, submitText }) => {
  const schema: any = {
    title,
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
    <Form
      uiSchema={uiSchema}
      schema={schema}
      onSubmit={onSubmit}
      submitText={submitText}
    />
  );
};

export default SubscribeForm;
