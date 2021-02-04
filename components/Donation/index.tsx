import React, { useState } from "react";
import {
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
} from "@chakra-ui/react";
import { Formik, FormikProps } from "formik";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";

import { withTranslation } from "../../i18n";
import getStripe from "../../lib/getStripe";
import Lock from "./Lock";
import {
  handleSubmit as yourDataHandleSubmit,
  Fields as YourDataFields,
  schema as YourDataSchema,
  initialValues as yourDataInitialValues,
  YourDataValues,
} from "./YourDataForm";
import {
  handleSubmit as cardHandleSubmit,
  Fields as CardFields,
  schema as CardSchema,
  initialValues as cardInitialValues,
  CardFormValues,
} from "./CardForm";
// import ElementsForm from './ElementsForm';
import DonationDrawer from "./DonationDrawer";

interface DonationProps {
  t: any;
}

interface Values extends YourDataValues, CardFormValues {}

const Donation: React.FC<DonationProps> = ({ t }) => {
  const [index, setIndex] = useState(0);
  const [donation, setDonation] = useState({});
  // use stripe in 2-step, see ./CardForm handleSubmit
  const stripe = useStripe();
  const elements = useElements();
  // active panel
  const isYourData: boolean = index === 0;
  const isPayment: boolean = index === 1;
  // default props to tab
  const tabProps: any = {
    fontSize: "lg",
    fontFamily: "Bebas Neue",
    color: "nossas.grey",
    _selected: { color: "nossas.blue" },
    textTransform: "uppercase",
  };

  return (
    <Formik
      initialValues={{
        ...yourDataInitialValues,
        ...cardInitialValues,
      }}
      validationSchema={isYourData ? YourDataSchema({ t }) : CardSchema({ t })}
      onSubmit={async (formData: any, actions: any) => {
        if (isYourData) {
          const yourData = await yourDataHandleSubmit(formData);
          setDonation({ ...donation, ...yourData });
          setIndex(1);
        }

        if (isPayment) {
          const payment = await cardHandleSubmit(formData, actions, {
            stripe,
            elements,
          });
          setDonation({ ...donation, payment });
          setIndex(2);
        }

        if (!isYourData && !isPayment) {
        }
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        isValid,
        values,
        errors,
        setErrors,
        status,
        setStatus,
      }: FormikProps<Values>) => {
        const btnText: string = isYourData
          ? t("donate.form.buttons.continue")
          : isPayment
          ? t("donate.form.buttons.donate", { value: values.customDonation })
          : t("donate.form.buttons.finish");

        return (
          <DonationDrawer
            btnText={btnText}
            isDisabled={isSubmitting || !isValid}
            onSubmit={isPayment || isYourData ? handleSubmit : undefined}
          >
            {index === 2 ? (
              <Stack>
                <Text>Etapa de finalizar</Text>
              </Stack>
            ) : (
              <Stack spacing={6} position="relative">
                <Text fontSize="md">{t("donate.description")}</Text>
                <Lock t={t} />
                <Tabs index={index} onChange={(i: number) => setIndex(i)}>
                  <TabList>
                    <Tab {...tabProps}>{t("donate.tabs.yourdata")}</Tab>
                    <Tab {...tabProps}>{t("donate.tabs.payments")}</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <YourDataFields t={t} />
                    </TabPanel>
                    <TabPanel>
                      <CardFields
                        {...{ t, errors, setErrors, status, setStatus }}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Stack>
            )}
          </DonationDrawer>
        );
      }}
    </Formik>
  );
};

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Droid+Sans:400,700",
    },
  ],
};

const StripeDonation = ({ t }) => (
  <Elements stripe={getStripe()} options={ELEMENTS_OPTIONS}>
    <Donation t={t} />
  </Elements>
);

export default withTranslation("common")(StripeDonation);
