import { useState, useEffect } from "react";
import { fetchPostJSON } from "../../lib/apiHelpers";

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

export const getWidgetId = async (
  kind: SubscribeKind,
  locale: "pt-BR" | "en"
): Promise<number> => {
  const resp: SubscribeSettings = await fetchPostJSON(
    "http://localhost:3000/api/settings"
  );

  return resp[kind][locale];
};

export const useWidgetId = (
  kind: SubscribeKind,
  language: "pt-BR" | "en"
): number => {
  const [widgetId, setWidgetId] = useState(null);

  useEffect(() => {
    getWidgetId(kind, language).then((id: number) => {
      setWidgetId(id);
    });
  }, [language]);

  return widgetId;
};
