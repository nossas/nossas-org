import React from "react";
import { Stack } from "@chakra-ui/react";
import { CardElement } from "@stripe/react-stripe-js";
import * as Yup from "yup";

import { fetchPostJSON } from "../../lib/apiHelpers";
import InputField from "../Form/InputField";

export const schema = Yup.object().shape({
  cardholderName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  customDonation: Yup.number().required("Required"),
});

export const initialValues = {
  customDonation: 50,
  cardholderName: "",
};

const CARD_OPTIONS = {
  iconStyle: "solid" as const,
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
        color: "#606373",
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
        <>
          <h2>Error 😭</h2>
          <p className="error-message">{errors.form}</p>
        </>
      );

    default:
      return null;
  }
};

const styles = {
  border: "1px solid #aaa",
  borderRadius: "0.375rem",
};

export const Fields = ({ status, setStatus, errors, setErrors }) => {
  // const stripe = useStripe();
  // const elements = useElements();

  return (
    <Stack spacing={4}>
      <InputField
        name="cardholderName"
        type="text"
        label="Nome"
        placeholder="Nome no cartão"
      />
      <InputField name="customDonation" type="number" label="Valor" />
      <div style={styles}>
        <CardElement
          options={CARD_OPTIONS}
          onChange={(e) => {
            if (e.error) {
              console.log("e", e.error.message ?? "An unknown error occured");
              setStatus("error");
              setErrors({
                form: e.error.message ?? "An unknown error occured",
              });
            }
          }}
        />
      </div>
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
  // setPayment({ status: "processing" });

  // Create a PaymentIntent with the specified amount.
  const response = await fetchPostJSON("/api/paymentIntents", {
    amount: formData.customDonation,
  });
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
    actions.setErrors({
      form: error.message ?? "An unknown error occured",
    });
    // setPayment({ status: "error" });
    // setErrorMessage(error.message ?? "An unknown error occured");
  } else if (paymentIntent) {
    // setPayment(paymentIntent);
    return paymentIntent;
  }
};
