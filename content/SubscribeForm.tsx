import React from "react";
import { Button, Heading, Box, Stack, Text } from "@chakra-ui/react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

import InputField from "../components/Form/InputField";
import SelectField from "../components/Form/SelectField";
import SubmitFormEntry from "../components/Form/SubmitFormEntry";
import SuccessPanel from "../components/Form/SuccessPanel";

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
  widgetId: number;
  color: "blue" | "pink" | "green";
  fieldsComponent?: React.FC<DefaultFieldsProps>;
}

const colors = {
  blue: "blue.main",
  pink: "pink.main",
  green: "green",
};

const SubscribeForm: React.FC<SubscribeFormProps> = ({
  title,
  submitText,
  textSuccess,
  widgetId,
  color,
  fieldsComponent: FieldsComponent,
}) => {
  const t = (keyI18n: string, _?: any) => keyI18n;

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
                  __html: t("form.finish.title", {
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
                t("common:form.fields.name.required")
              ),
              whatsapp: Yup.string().required(
                t("common:form.fields.whatsapp.required")
              ),
              email: Yup.string()
                .email(t("common:form.fields.email.invalid"))
                .required(t("common:form.fields.email.required")),
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
                  <FieldsComponent t={t} />
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

type DefaultFieldsProps = {
  t: any;
};

const DefaultFields: React.FC<DefaultFieldsProps> = ({ t }) => (
  <Stack spacing={4}>
    <InputField
      inline
      name="name"
      label={t("common:form.fields.name.label")}
      placeholder={t("common:form.fields.name.placeholder")}
    />
    <InputField
      inline
      name="email"
      label={t("common:form.fields.email.label")}
      placeholder={t("common:form.fields.email.placeholder")}
    />
    <InputField
      inline
      type="tel"
      name="whatsapp"
      label={t("common:form.fields.whatsapp.label")}
      placeholder={t("common:form.fields.whatsapp.placeholder")}
    />
    <SelectField
      inline
      name="state"
      label={t("common:form.fields.state.label")}
      placeholder={t("common:form.fields.state.placeholder")}
      options={{ type: "array", items: STATES }}
    />
    <InputField
      inline
      name="city"
      label={t("common:form.fields.city.label")}
      placeholder={t("common:form.fields.city.placeholder")}
    />
  </Stack>
);

export const SimpleFields: React.FC<DefaultFieldsProps> = ({ t }) => (
  <Stack spacing={4}>
    <InputField
      inline
      name="name"
      label={t("common:form.fields.name.label")}
      placeholder={t("common:form.fields.name.placeholder")}
    />
    <InputField
      inline
      name="lastName"
      label={t("common:form.fields.lastName.label")}
      placeholder={t("common:form.fields.lastName.placeholder")}
    />
    <InputField
      inline
      name="email"
      label={t("common:form.fields.email.label")}
      placeholder={t("common:form.fields.email.placeholder")}
    />
    <InputField
      inline
      type="tel"
      name="whatsapp"
      label={t("common:form.fields.whatsapp.label")}
      placeholder={t("common:form.fields.whatsapp.placeholder")}
    />
  </Stack>
);

SubscribeForm.defaultProps = { fieldsComponent: DefaultFields };

export default SubscribeForm;
