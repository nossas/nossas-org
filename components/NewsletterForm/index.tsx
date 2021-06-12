import React from "react";
import { Button, Text, Stack, Heading } from "@chakra-ui/react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { useTranslation } from "next-i18next";

import InputField from "../../components/Form/InputField";
import SubmitFormEntry from "../../components/Form/SubmitFormEntry";
import { getWidgetId } from "../../content/SubscribeForm/settings";

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
    </Heading>
    <Text size="xs">{description}</Text>
  </>
);

const NewsletterForm = ({ inverted }: any) => {
  const { t, i18n } = useTranslation("common");
  const widgetId = getWidgetId("newsletter", i18n.language as any);

  return (
    <Stack spacing={4} maxW="430px">
      <SubmitFormEntry
        widgetId={widgetId}
        successComponent={() => (
          <Header
            inverted={inverted}
            title={t("footer.newsletter.success.title")}
            description={t("footer.newsletter.success.description")}
          />
        )}
      >
        {({ submit }: any) => (
          <>
            <Header
              inverted={inverted}
              title={t("footer.newsletter.title")}
              description={t("footer.newsletter.description")}
            />
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
              }}
              validationSchema={Yup.object().shape({
                first_name: Yup.string().required(
                  t("footer.newsletter.form.firstname.required")
                ),
                email: Yup.string()
                  .email(t("footer.newsletter.form.email.invalid"))
                  .required(t("footer.newsletter.form.email.required")),
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
                        placeholder={t(
                          "footer.newsletter.form.firstname.placeholder"
                        )}
                      />
                      <InputField
                        name="last_name"
                        type="text"
                        placeholder={t(
                          "footer.newsletter.form.lastname.placeholder"
                        )}
                      />
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="flex-end">
                      <InputField
                        name="email"
                        type="email"
                        placeholder={t(
                          "footer.newsletter.form.email.placeholder"
                        )}
                      />
                      <Button
                        size="sm"
                        variant="pink"
                        onClick={handleSubmit as any}
                      >
                        {t("footer.newsletter.form.submit")}
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

export default NewsletterForm;
