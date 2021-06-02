/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripe = (locale?: "en" | "pt-BR", forceUpdate?: boolean) => {
  if (!stripePromise || forceUpdate) {
    // console.log('new stripe promise');
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
      {
        locale: locale || "auto",
      }
    );
  }
  return stripePromise;
};

export default getStripe;
