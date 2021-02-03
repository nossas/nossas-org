import React from "react";
import { Stack } from "@chakra-ui/react";
import * as Yup from "yup";
import InputField from "../Form/InputField";

export const handleSubmit = async (formData: any) => {
  console.log("formData", formData);
};

export const Fields = () => (
  <Stack spacing={4}>
    <InputField name="name" type="text" label="Nome" placeholder="Seu nome" />
    <InputField
      name="email"
      type="email"
      label="E-mail"
      placeholder="Seu e-mail"
    />
    <InputField
      name="whatsapp"
      type="text"
      label="WhatsApp"
      placeholder="(000) 00000-0000"
    />
  </Stack>
);

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  whatsapp: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const initialValues = {
  name: "",
  email: "",
  whatsapp: "",
};
