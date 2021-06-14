import React from "react";
import { useTranslation } from "next-i18next";
import { Button, Heading, Box, Stack, Text } from "@chakra-ui/react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { useWidgetId, SubscribeKind } from "./settings";

import InputField from "../../components/Form/InputField";
import SelectField from "../../components/Form/SelectField";
import SubmitFormEntry from "../../components/Form/SubmitFormEntry";
import SuccessPanel from "../../components/Form/SuccessPanel";

interface Values {
  name: string;
  email: string;
  whatsapp?: string;
  state?: string;
  city?: string;
}

interface SubscribeFormProps {
  title: string;
  submitText: string;
  textSuccess: string;
  kind: SubscribeKind;
  color: "blue" | "pink" | "green";
  fieldsComponent?: React.FC;
}

const colors = {
  blue: "blue.main",
  pink: "pink.main",
  green: "green",
};

const phoneRegExp = /^\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}$/;

const SubscribeForm: React.FC<SubscribeFormProps> = ({
  title,
  submitText,
  textSuccess,
  kind,
  color,
  fieldsComponent: FieldsComponent,
}) => {
  const { t, i18n } = useTranslation("common");
  const widgetId: number = useWidgetId(kind, i18n.language as any);

  return (
    <Box bg="white" p="12" borderRadius="12px" boxShadow="base">
      <SubmitFormEntry
        widgetId={widgetId}
        successComponent={({ data }) => (
          <SuccessPanel
            color="green"
            title={
              <div
                dangerouslySetInnerHTML={{
                  __html: t("subscribe.form.success.title", {
                    interpolation: { escapeValue: false },
                    name: data.formData.name.split(" ")[0],
                  }),
                }}
              />
            }
          >
            <Text>{textSuccess}</Text>
          </SuccessPanel>
        )}
      >
        {({ submit }) => (
          <Formik
            initialValues={{
              name: "",
              email: "",
              whatsapp: "",
              state: "",
              city: "",
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(
                t("subscribe.form.fields.name.required")
              ),
              whatsapp: Yup.string()
                .required(t("subscribe.form.fields.phone.required"))
                .matches(phoneRegExp, t("subscribe.form.fields.phone.invalid")),
              email: Yup.string()
                .email(t("subscribe.form.fields.email.invalid"))
                .required(t("subscribe.form.fields.email.required")),
            })}
            onSubmit={submit}
          >
            {({
              handleSubmit,
              dirty,
              isSubmitting,
              errors,
            }: FormikProps<Values>) => (
              <Form>
                <Stack spacing={6}>
                  <Heading
                    margin="auto"
                    width={["auto", "auto", "auto", "auto", "auto", "53%"]}
                    as="h3"
                    color={colors[color]}
                    fontWeight="bold"
                    textAlign="center"
                    size="md"
                  >
                    {title}
                  </Heading>
                  <FieldsComponent />
                  <Button
                    isFullWidth
                    bgColor="blue.main"
                    color="white"
                    onClick={handleSubmit as any}
                    disabled={isSubmitting || !dirty}
                  >
                    {submitText}
                  </Button>
                  {errors && (
                    <Text color="red" size="xs">
                      {(errors as any).form}
                    </Text>
                  )}
                </Stack>
              </Form>
            )}
          </Formik>
        )}
      </SubmitFormEntry>
    </Box>
  );
};

const STATES = [
  "Acre (AC)",
  "Alagoas (AL)",
  "Amapá (AP)",
  "Amazonas (AM)",
  "Bahia (BA)",
  "Ceará (CE)",
  "Distrito Federal (DF)",
  "Espírito Santo (ES)",
  "Goiás (GO)",
  "Maranhão (MA)",
  "Mato Grosso (MT)",
  "Mato Grosso do Sul (MS)",
  "Minas Gerais (MG)",
  "Pará (PA)",
  "Paraíba (PB)",
  "Paraná (PR)",
  "Pernambuco (PE)",
  "Piauí (PI)",
  "Rio de Janeiro (RJ)",
  "Rio Grande do Norte (RN)",
  "Rio Grande do Sul (RS)",
  "Rondônia (RO)",
  "Roraima (RR)",
  "Santa Catarina (SC)",
  "São Paulo (SP)",
  "Sergipe (SE)",
  "Tocantins (TO)",
];

const DefaultFields = () => {
  const { t } = useTranslation("common");

  return (
    <Stack spacing={4}>
      <InputField
        inline
        name="name"
        label={t("subscribe.form.fields.name.label")}
        placeholder={t("subscribe.form.fields.name.placeholder")}
      />
      <InputField
        inline
        name="email"
        label={t("subscribe.form.fields.email.label")}
        placeholder={t("subscribe.form.fields.email.placeholder")}
      />
      <InputField
        inline
        type="tel"
        name="whatsapp"
        label={t("subscribe.form.fields.phone.label")}
        placeholder="+55 (99) 99999-9999"
      />
      <SelectField
        inline
        name="state"
        label={t("subscribe.form.fields.state.label")}
        placeholder={t("subscribe.form.fields.state.placeholder")}
        options={{ type: "array", items: STATES }}
      />
      <InputField
        inline
        name="city"
        label={t("subscribe.form.fields.city.label")}
        placeholder={t("subscribe.form.fields.city.placeholder")}
      />
    </Stack>
  );
};

export const SimpleFields = () => {
  const { t } = useTranslation("common");

  return (
    <Stack spacing={4}>
      <InputField
        inline
        name="name"
        label={t("subscribe.form.fields.name.label")}
        placeholder={t("subscribe.form.fields.name.placeholder")}
      />
      <InputField
        inline
        name="lastName"
        label={t("subscribe.form.fields.lastName.label")}
        placeholder={t("subscribe.form.fields.lastName.placeholder")}
      />
      <InputField
        inline
        name="email"
        label={t("subscribe.form.fields.email.label")}
        placeholder={t("subscribe.form.fields.email.placeholder")}
      />
      <InputField
        inline
        type="tel"
        name="whatsapp"
        label={t("subscribe.form.fields.whatsapp.label")}
        placeholder="+55 (99) 99999-9999"
      />
    </Stack>
  );
};

SubscribeForm.defaultProps = { fieldsComponent: DefaultFields };

export default SubscribeForm;
