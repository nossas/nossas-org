import React from "react";
import { Button, Heading, Text, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../components/Form/InputField";
import { withTranslation } from "../i18n";

type Props = {
  t: any;
  inverted: boolean;
};

export const schema = ({ t }: { t: any }) =>
  Yup.object().shape({
    firstname: Yup.string().required(t("newsletter.firstname.required")),
    email: Yup.string()
      .email(t("newsletter.email.invalid"))
      .required(t("newsletter.email.required")),
  });

const Newsletter: React.FC<Props> = ({ t, inverted }) => {
  return (
    <Stack spacing={4} maxW="430px">
      <Heading
        as="h4"
        color={inverted ? "white" : "blue.main"}
        fontWeight="bold"
        size="md"
      >
        {t("newsletter.title")}
      </Heading>
      <Text size="xs">{t("newsletter.description")}</Text>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "" }}
        validationSchema={schema({ t })}
        onSubmit={(formData: any) => {
          console.log("subscribe newsletter", { formData });
        }}
      >
        {() => (
          <Form>
            <Stack w="100%" direction="column" spacing={2} alignItems="center">
              <Stack w="100%" direction="row" spacing={2}>
                <InputField
                  name="firstname"
                  type="text"
                  placeholder={t("newsletter.firstname.placeholder")}
                />
                <InputField
                  name="lastname"
                  type="text"
                  placeholder={t("newsletter.lastname.placeholder")}
                />
              </Stack>
              <Stack w="100%" direction="row" spacing={2}>
                <InputField
                  name="email"
                  type="email"
                  placeholder={t("newsletter.email.placeholder")}
                />
                <Button variant="pink" type="submit" size="sm">
                  {t("newsletter.button")}
                </Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default withTranslation("common")(Newsletter);
