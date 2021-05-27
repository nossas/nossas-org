import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
// import NextI18n from "../i18n";

// const { withTranslation, i18n } = NextI18n;

const I18nButton: React.FC<{ extraProps?: { [key: string]: any } }> = ({
  extraProps,
}) => {
  const { locale, pathname } = useRouter();
  const toggleLocale = locale === "pt-BR" ? "en" : "pt-BR";
  const labelLocale = locale === "pt-BR" ? "EN" : "BR";

  return (
    <Link href={pathname} locale={toggleLocale}>
      <Button variant="menu" {...(extraProps || {})}>
        {labelLocale}
      </Button>
    </Link>
  );
};

export default I18nButton;
