import React from "react";
import { Button, Heading, Box, Stack } from "@chakra-ui/react";
import { Formik, Form, FormikProps } from "formik";
import InputField from "../components/Form/InputField";
import SelectField from "../components/Form/SelectField";
import SubmitFormEntry from "../components/Form/SubmitFormEntry";

const onSubmit = (formData: any) => {
  console.log("formData", { formData });
};

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
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ title, submitText }) => {
  return (
    <Box bg="white" p="12" borderRadius="12px" boxShadow="base">
      <SubmitFormEntry widgetId={66730}>
        {({ submit }) => (
          <Formik
            initialValues={{
              name: "",
              email: "",
              whatsapp: "",
              state: "",
              city: "",
            }}
            onSubmit={submit}
          >
            {({ handleSubmit, dirty, isSubmitting }: FormikProps<Values>) => (
              <Form>
                <Stack spacing={6}>
                  <Heading
                    as="h3"
                    color="blue.main"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    {title}
                  </Heading>
                  <Stack spacing={4}>
                    <InputField
                      inline
                      name="name"
                      label="Nome"
                      placeholder="Seu nome"
                    />
                    <InputField
                      inline
                      name="email"
                      label="E-mail"
                      placeholder="Seu e-mail"
                    />
                    <InputField
                      inline
                      name="whatsapp"
                      label="Whatsapp"
                      placeholder="Seu whatsapp"
                    />
                    <SelectField
                      inline
                      name="state"
                      label="Estado"
                      placeholder="Seu estado"
                      options={{ type: "array", items: STATES }}
                    />
                    <InputField
                      inline
                      name="city"
                      label="Cidade"
                      placeholder="Sua cidade"
                    />
                  </Stack>
                  <Button
                    isFullWidth
                    bgColor="blue.main"
                    color="white"
                    onClick={handleSubmit as any}
                    disabled={isSubmitting || !dirty}
                  >
                    {submitText}
                  </Button>
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
  "Acre(AC)",
  "Alagoas(AL)",
  "Amapá(AP)",
  "Amazonas(AM)",
  "Bahia(BA)",
  "Ceará(CE)",
  "Distrito Federal(DF)",
  "Espírito Santo(ES)",
  "Goiás(GO)",
  "Maranhão(MA)",
  "Mato Grosso(MT)",
  "Mato Grosso do Sul(MS)",
  "Minas Gerais(MG)",
  "Pará(PA)",
  "Paraíba(PB)",
  "Paraná(PR)",
  "Pernambuco(PE)",
  "Piauí(PI)",
  "Rio de Janeiro(RJ)",
  "Rio Grande do Norte(RN)",
  "Rio Grande do Sul(RS)",
  "Rondônia(RO)",
  "Roraima(RR)",
  "Santa Catarina(SC)",
  "São Paulo(SP)",
  "Sergipe(SE)",
  "Tocantins(TO)",
];

export default SubscribeForm;
