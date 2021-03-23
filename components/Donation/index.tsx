import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  Box,
  Heading,
  Image,
  Text,
  // Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
  chakra,
  useDisclosure,
  useTab,
  useStyles,
} from "@chakra-ui/react";
import { Formik, FormikProps } from "formik";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";

import { withTranslation, i18n } from "../../i18n";
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
import Finish from "./Finish";

interface DonationProps {
  t: any;
  registerDonate: (args: SubmitArgs) => Promise<Result>;
}

interface Values extends YourDataValues, CardFormValues {
  currency: "usd" | "brl";
  widget_id: number;
}

const Donation: React.FC<DonationProps> = ({ t, registerDonate, ...props }) => {
  const [index, setIndex] = useState(0);
  const [donation, setDonation] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  // use stripe in 2-step, see ./CardForm handleSubmit
  const stripe = useStripe();
  const elements = useElements();
  // active panel
  const isYourData: boolean = index === 0;
  const isPayment: boolean = index === 1;
  // default props to tab
  const tabProps: any = {
    fontSize: "18px",
    fontFamily: "Bebas Neue",
    color: "nossas.gray",
    _selected: { color: "nossas.blue" },
    textTransform: "uppercase",
    p: "0 35px 0 0",
  };
  const tagPanelProps: any = {
    p: "20px 0",
  };
  // Custom tabs
  // 1. Reuse the styles for the Tab
  const StyledTab = chakra("button", { themeKey: "Tabs.Tab" } as any);

  const CustomTab = React.forwardRef(({ last, ...props }: any, ref) => {
    // 2. Reuse the `useTab` hook
    const tabProps = useTab(props);

    // 3. Hook into the Tabs `size`, `variant`, props
    const styles = useStyles();

    return (
      <StyledTab
        __css={styles.tab}
        style={{ position: "relative" }}
        {...tabProps}
      >
        {tabProps.children}
        {!last && (
          <Image
            position="absolute"
            right="15px"
            top="7px"
            src="/static/media/icon-left-arrow.png"
          />
        )}
      </StyledTab>
    );
  });

  return (
    <Formik
      initialValues={{
        ...yourDataInitialValues,
        ...cardInitialValues,
        widget_id: parseInt(process.env.NEXT_PUBLIC_WIDGET_ID),
        currency: i18n.language === "pt-BR" ? "brl" : "usd",
      }}
      validationSchema={isYourData ? YourDataSchema({ t }) : CardSchema({ t })}
      onSubmit={async (formData: Values, actions: any) => {
        if (isYourData) {
          const yourData = await yourDataHandleSubmit(formData);
          setDonation({ ...donation, ...yourData });
          setIndex(1);
        } else if (isPayment) {
          // Submit donation on stripe
          const payment = await cardHandleSubmit(formData, actions, {
            stripe,
            elements,
          });

          try {
            // Register donation in Bonde API
            await registerDonate({
              activist: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
              },
              input: {
                amount: formData.customDonation,
                payment_method: "credit_card",
                checkout_data: { formData },
                gateway_data: { payment },
              },
              widget_id: formData.widget_id,
            });

            // Prepare state to success message
            setDonation({ ...donation, payment });
            setIndex(2);
          } catch (e) {
            console.error(e);
            actions.setErrors({ form: "Register donation failed!" });
          }
        } else {
          onClose();
          setIndex(0);
          actions.resetForm();
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
          ? t("donate.form.buttons.donate", {
              value: values.customDonation,
              currency: values.currency === "brl" ? "R$" : "$",
            })
          : t("donate.form.buttons.finish");

        return (
          <DonationDrawer
            btnText={btnText}
            isDisabled={isSubmitting || !isValid}
            onSubmit={handleSubmit}
            btnChildren={props.children}
            disclosureOpts={{ isOpen, onOpen, onClose }}
            {...props}
          >
            {index === 2 ? (
              <Finish t={t} name={values.name} />
            ) : (
              <Stack spacing={6} mt="45px">
                <Stack position="relative">
                  <Heading as="h2" color="green">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("donate.title", {
                          interpolation: { escapeValue: false },
                        }),
                      }}
                    />
                  </Heading>
                  {/* quebrar linha Faça sua doação */}
                  <Text size="sm">{t("donate.description")}</Text>
                  <Lock t={t} />
                </Stack>
                <Tabs index={index} onChange={(i: number) => setIndex(i)}>
                  <TabList border="0">
                    <CustomTab {...tabProps}>
                      {t("donate.tabs.yourdata")}
                    </CustomTab>
                    <CustomTab {...tabProps} last isDisabled={isYourData}>
                      {t("donate.tabs.payments")}
                    </CustomTab>
                  </TabList>
                  <TabPanels>
                    <TabPanel {...tagPanelProps}>
                      <YourDataFields t={t} />
                    </TabPanel>
                    <TabPanel {...tagPanelProps}>
                      <CardFields
                        {...{ t, errors, setErrors, status, setStatus, values }}
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

const CREATE_DONATION_GQL = gql`
  mutation(
    $activist: ActivistInput!
    $input: DonationInput!
    $widget_id: Int!
  ) {
    create_donation(activist: $activist, input: $input, widget_id: $widget_id) {
      data
    }
  }
`;

type ActivistInput = {
  name: string;
  email: string;
  phone?: string;
};

type DonationInput = {
  amount: number;
  payment_method: string;
  checkout_data: any;
  gateway_data: any;
};

interface SubmitArgs {
  activist: ActivistInput;
  input: DonationInput;
  widget_id: number;
}

interface Result {
  data: {
    id: number;
    created_at: string;
  };
}

const StripeDonation = ({ t, ...props }) => {
  const [donate] = useMutation<Result, SubmitArgs>(CREATE_DONATION_GQL);

  const registerDonate = async (args: SubmitArgs): Promise<Result> => {
    const { data, errors } = await donate({ variables: args });

    if (errors) {
      console.log("RegisterDonate failed!", { errors });
      throw new Error("RegisterDonate failed!");
    }

    return data;
  };

  return (
    <Elements stripe={getStripe()} options={ELEMENTS_OPTIONS}>
      <Donation t={t} registerDonate={registerDonate} {...props} />
    </Elements>
  );
};

export default withTranslation("common")(StripeDonation);
