//

export type SubscribeKind =
  | "incubations"
  | "materials"
  | "donation"
  | "newsletter"
  | "workwithus";

export type Subscribe = {
  "pt-BR": number;
  en: number;
};

export type SubscribeSettings = Record<SubscribeKind, Subscribe>;

export const getWidgetId = (
  kind: SubscribeKind,
  locale: "pt-BR" | "en"
): number =>
  ({
    incubations: {
      "pt-BR": parseInt(process.env.NEXT_PUBLIC_INCUBATIONS_WIDGET_ID),
      en: parseInt(process.env.NEXT_PUBLIC_INCUBATIONS_EN_WIDGET_ID),
    },
    materials: {
      "pt-BR": parseInt(process.env.NEXT_PUBLIC_MATERIALS_WIDGET_ID),
      en: parseInt(process.env.NEXT_PUBLIC_MATERIALS_EN_WIDGET_ID),
    },
    donation: {
      "pt-BR": parseInt(process.env.NEXT_PUBLIC_DONATION_WIDGET_ID),
      en: parseInt(process.env.NEXT_PUBLIC_DONATION_EN_WIDGET_ID),
    },
    newsletter: {
      "pt-BR": parseInt(process.env.NEXT_PUBLIC_NEWSLETTER_WIDGET_ID),
      en: parseInt(process.env.NEXT_PUBLIC_NEWSLETTER_EN_WIDGET_ID),
    },
    workwithus: {
      "pt-BR": parseInt(process.env.NEXT_PUBLIC_WORKWITHUS_WIDGET_ID),
      en: parseInt(process.env.NEXT_PUBLIC_WORKWITHUS_EN_WIDGET_ID),
    },
  }[kind][locale]);
