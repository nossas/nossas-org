import React from "react";
import styled from "@emotion/styled";
import { Stack, Text } from "@chakra-ui/react";
import { CardElement } from "@stripe/react-stripe-js";
import * as Yup from "yup";

import { fetchPostJSON } from "../../lib/apiHelpers";
import InputField from "../Form/InputField";
import SelectField from "../Form/SelectField";

export const schema = ({ t }) =>
  Yup.object().shape({
    cardholderName: Yup.string().required(
      t("donate.form.fields.cardholderName.required")
    ),
    customDonation: Yup.number()
      .min(1, t("donate.form.fields.customDonation.min"))
      .required(t("donate.form.fields.customDonation.required")),
  });

export interface CardFormValues {
  customDonation?: number;
  cardholderName?: string;
}

export const initialValues: CardFormValues = {
  customDonation: 50,
  cardholderName: "",
};

const CARD_OPTIONS = {
  iconStyle: "default" as const,
  hidePostalCode: true,
  style: {
    base: {
      height: "2.5rem",
      iconColor: "#2D00A1",
      color: "#606373",
      fontWeight: "normal",
      fontFamily: "Droid Sans",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#aaa",
      },
    },
    invalid: {
      iconColor: "#ef2961",
      color: "#ef2961",
    },
  },
};

const PaymentStatus = ({
  status,
  errors,
}: {
  status: string;
  errors?: any;
}) => {
  switch (status) {
    case "processing":
    case "requires_payment_method":
    case "requires_confirmation":
      return <h2>Processing...</h2>;

    case "requires_action":
      return <h2>Authenticating...</h2>;

    case "succeeded":
      return <h2>Payment Succeeded 🥳</h2>;

    case "error":
      return (
        <Text color="red" size="xs">
          {errors.form}
        </Text>
      );

    default:
      return null;
  }
};

const InputCardField = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;

  .StripeElement--webkit-autofill {
    background: transparent !important;
  }

  .StripeElement {
    width: 100%;
    padding: 11px 15px;
  }
`;

interface FieldsProps {
  t: any;
  status?: string;
  setStatus: any;
  errors?: any;
  setErrors: any;
  values: any;
}

export const Fields: React.FC<FieldsProps> = ({
  t,
  status,
  setStatus,
  errors,
  setErrors,
  values,
}) => {
  return (
    <Stack spacing={4}>
      <InputCardField>
        <CardElement
          options={CARD_OPTIONS}
          onChange={(e) => {
            if (e.error) {
              setStatus("error");
              setErrors({
                form: e.error.message ?? "An unknown error occured",
              });
            }
          }}
        />
      </InputCardField>
      <InputField
        inline
        name="cardholderName"
        type="text"
        label={t("donate.form.fields.cardholderName.label")}
        placeholder={t("donate.form.fields.cardholderName.placeholder")}
      />
      <Stack direction="row" spacing={4}>
        <SelectField
          flex={1.5}
          inline
          name="currency"
          label="Moeda"
          options={{
            items: { brl: "BRL", usd: "USD" },
            type: "object",
          }}
        />
        <InputField
          flex={2}
          inline
          name="customDonation"
          type="number"
          label={t("donate.form.fields.customDonation.label", {
            currency: values.currency === "brl" ? "R$" : "$",
          })}
        />
      </Stack>
      {/* <FormHelperText color="red" fontSize="xs" textAlign="left">
        {(errors as any).form}
      </FormHelperText> */}
      <PaymentStatus status={status} errors={errors} />
    </Stack>
  );
};

type StripeHooks = {
  stripe: any;
  elements: any;
};

export const handleSubmit = async (
  formData: any,
  actions: any,
  { stripe, elements }: StripeHooks
) => {
  // try {
  // setPayment({ status: "processing" });

  // Create a PaymentIntent with the specified amount.
  const response = await fetchPostJSON("/api/paymentIntents", {
    amount: formData.customDonation,
    currency: formData.currency,
  });

  if (response.statusCode === 500) {
    actions.setErrors({ customDonation: response.message });
    throw new Error(response.message);
  }
  // setPayment(response);

  // Get a reference to a mounted CardElement. Elements knows how
  // to find your CardElement because there can only ever be one of
  // each type of element.
  const cardElement = elements!.getElement(CardElement);

  // Use your card Element with other Stripe.js APIs
  const { error, paymentIntent } = await stripe!.confirmCardPayment(
    response.client_secret,
    {
      payment_method: {
        card: cardElement!,
        billing_details: { name: formData.cardholderName },
      },
    }
  );

  if (error) {
    actions.setStatus("error");
    actions.setErrors({
      form: error.message ?? "An unknown error occured",
    });
    throw new Error(error.message);
    // setPayment({ status: "error" });
    // setErrorMessage(error.message ?? "An unknown error occured");
  } else if (paymentIntent) {
    // setPayment(paymentIntent);
    return paymentIntent;
  }
  // } catch (err) {
  //   console.log('CardForm err', { err: err.message });
  // }
};
