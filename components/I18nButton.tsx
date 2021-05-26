import React from "react";
import { Button } from "@chakra-ui/react";
// import NextI18n from "../i18n";

// const { withTranslation, i18n } = NextI18n;

const I18nButton: React.FC<{ extraProps?: { [key: string]: any } }> = ({
  extraProps,
}) => {
  const changeLanguage = () => {
    // i18n.changeLanguage(i18n.language === "pt-BR" ? "en" : "pt-BR");
    window.open("https://www.en.nossas.org/", "_self");
  };

  return (
    <Button variant="menu" onClick={changeLanguage} {...(extraProps || {})}>
      EN
    </Button>
  );
};

export default I18nButton;
