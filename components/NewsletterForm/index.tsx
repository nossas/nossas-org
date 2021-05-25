import React from "react";
import { Button, Text, Stack, Heading } from "@chakra-ui/react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

import InputField from "../../components/Form/InputField";
import SubmitFormEntry from "../../components/Form/SubmitFormEntry";
import { withTranslation } from "../../i18n";

interface Values {
  first_name: string;
  last_name: string;
  email: string;
}

const Header = ({ inverted, title, description }) => (
  <>
    <Heading
      as="h4"
      color={inverted ? "white" : "blue.main"}
      fontWeight="bold"
      size="md"
    >
      {title}
      {/* {t("newsletter.title")} */}
    </Heading>
    <Text size="xs">
      {description}
      {/* {t("newsletter.description")} */}
    </Text>
  </>
);

const NewsletterForm = ({ t, inverted }: any) => {
  if (!process.env.NEXT_PUBLIC_NEWSLETTER_WIDGET_ID)
    return <Text color="red">Você deve configurar o Widget da Newsletter</Text>;

  return (
    <Stack spacing={4} maxW="430px">
      <SubmitFormEntry
        widgetId={parseInt(process.env.NEXT_PUBLIC_NEWSLETTER_WIDGET_ID)}
        successComponent={() => (
          <Header
            inverted={inverted}
            title={t("newsletter.success.title")}
            description={t("newsletter.success.description")}
          />
        )}
      >
        {({ submit }: any) => (
          <>
            <Header
              inverted={inverted}
              title={t("newsletter.title")}
              description={t("newsletter.description")}
            />
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
              }}
              validationSchema={Yup.object().shape({
                first_name: Yup.string().required(
                  t("common:form.fields.name.required")
                ),
                email: Yup.string()
                  .email(t("common:form.fields.email.invalid"))
                  .required(t("common:form.fields.email.required")),
              })}
              onSubmit={submit}
            >
              {({ handleSubmit }: FormikProps<Values>) => (
                <Form>
                  <Stack column="column" spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="flex-end">
                      <InputField
                        name="first_name"
                        type="text"
                        placeholder={t("newsletter.firstname.placeholder")}
                      />
                      <InputField
                        name="last_name"
                        type="text"
                        placeholder={t("newsletter.lastname.placeholder")}
                      />
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="flex-end">
                      <InputField
                        name="email"
                        type="email"
                        placeholder={t("newsletter.email.placeholder")}
                      />
                      <Button
                        size="sm"
                        variant="pink"
                        onClick={handleSubmit as any}
                      >
                        {t("newsletter.button")}
                      </Button>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </>
        )}
      </SubmitFormEntry>
    </Stack>
  );
};

export default withTranslation("common")(NewsletterForm);
