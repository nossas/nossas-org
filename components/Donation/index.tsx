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
} from "./YourDataForm";
import {
  handleSubmit as cardHandleSubmit,
  Fields as CardFields,
  schema as CardSchema,
  initialValues as CardInitialValues,
} from "./CardForm";
// import ElementsForm from './ElementsForm';
import DonationDrawer from "./DonationDrawer";

interface DonationProps {
  t: any;
}

const Donation: React.FC<DonationProps> = ({ t }) => {
  const [index, setIndex] = useState(1);
  const stripe = useStripe();
  const elements = useElements();

  const handleNextTab = (i?: number) => {
    if (typeof i === "number") setIndex(i);
    else if (index === 0) setIndex(1);
    else if (index === 1) console.log("submit values");
  };

  const btnTexts = ["Continuar", "Doar"];

  const tabProps: any = {
    fontSize: "lg",
    fontFamily: "Bebas Neue",
    color: "nossas.grey",
    _selected: { color: "nossas.blue" },
    textTransform: "uppercase",
  };

  return (
    <Formik
      initialValues={index === 0 ? yourDataInitialValues : CardInitialValues}
      validationSchema={index === 0 ? YourDataSchema : CardSchema}
      onSubmit={async (formData: any, actions: any) => {
        if (index === 0) {
          await yourDataHandleSubmit(formData);

          if (index === 0) setIndex(1);
          else if (index === 1) console.log("submit values");
        } else {
          const payment = await cardHandleSubmit(formData, actions, {
            stripe,
            elements,
          });
          console.log("payment", payment);
        }
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        isValid,
        errors,
        setErrors,
        status,
        setStatus,
      }: FormikProps<any>) => (
        <DonationDrawer
          btnText={btnTexts[index]}
          isDisabled={isSubmitting || !isValid}
          onSubmit={handleSubmit}
        >
          <Stack spacing={6} position="relative">
            <Text fontSize="md">{t("donate.description")}</Text>
            <Lock t={t} />
            <Tabs index={index} onChange={handleNextTab}>
              <TabList>
                <Tab {...tabProps}>{t("donate.tabs.yourdata")}</Tab>
                <Tab {...tabProps}>{t("donate.tabs.payments")}</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <YourDataFields />
                </TabPanel>
                <TabPanel>
                  <CardFields {...{ errors, setErrors, status, setStatus }} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </DonationDrawer>
      )}
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
