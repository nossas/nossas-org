import React from "react";
import { useTranslation } from "next-i18next";
import { Stack } from "@chakra-ui/react";
import * as Yup from "yup";
import InputField from "../Form/InputField";

export const handleSubmit = async (formData: YourDataValues): Promise<any> => {
  return formData;
};

export const Fields = () => {
  const { t } = useTranslation("common");

  return (
    <Stack spacing={4}>
      <InputField
        inline
        name="name"
        type="text"
        label={t("donation.form.fields.name.label")}
        placeholder={t("donation.form.fields.name.placeholder")}
      />
      <InputField
        inline
        name="email"
        type="email"
        label={t("donation.form.fields.email.label")}
        placeholder={t("donation.form.fields.email.placeholder")}
      />
      <InputField
        inline
        name="phone"
        type="tel"
        label={t("donation.form.fields.phone.label")}
        placeholder="+55 (99) 99999-9999"
      />
    </Stack>
  );
};

const phoneRegExp = /^\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}$/;

export const schema = ({ t }: { t: any }) =>
  Yup.object().shape({
    name: Yup.string().required(t("donation.form.fields.name.required")),
    phone: Yup.string()
      .required(t("donation.form.fields.phone.required"))
      .matches(phoneRegExp, t("donation.form.fields.phone.invalid")),
    email: Yup.string()
      .email(t("donation.form.fields.email.invalid"))
      .required(t("donation.form.fields.email.required")),
  });

export interface YourDataValues {
  name?: string;
  email?: string;
  phone?: string;
}

export const initialValues: YourDataValues = {
  name: "",
  email: "",
  phone: "",
};
