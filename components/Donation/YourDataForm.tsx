import React from "react";
import { Stack } from "@chakra-ui/react";
import * as Yup from "yup";
import InputField from "../Form/InputField";

export const handleSubmit = async (formData: YourDataValues): Promise<any> => {
  return formData;
};

interface FieldsProps {
  t: any;
}

export const Fields: React.FC<FieldsProps> = ({ t }) => (
  <Stack spacing={4}>
    <InputField
      name="name"
      type="text"
      label={t("donate.form.fields.name.label")}
      placeholder={t("donate.form.fields.name.placeholder")}
    />
    <InputField
      name="email"
      type="email"
      label={t("donate.form.fields.email.label")}
      placeholder={t("donate.form.fields.email.placeholder")}
    />
    <InputField
      name="phone"
      type="tel"
      label={t("donate.form.fields.phone.label")}
      placeholder={t("donate.form.fields.phone.placeholder")}
    />
  </Stack>
);

export const schema = ({ t }: { t: any }) =>
  Yup.object().shape({
    name: Yup.string().required(t("donate.form.fields.name.required")),
    phone: Yup.string().required(t("donate.form.fields.phone.required")),
    email: Yup.string()
      .email(t("donate.form.fields.email.invalid"))
      .required(t("donate.form.fields.email.required")),
  });

export interface YourDataValues {
  name?: string;
  email?: string;
  whatsapp?: string;
}

export const initialValues: YourDataValues = {
  name: "",
  email: "",
  whatsapp: "",
};