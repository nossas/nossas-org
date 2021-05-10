import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
// import NextI18n from "../i18n";

// const { withTranslation, i18n } = NextI18n;

const ButtonStyled = styled.button`
  border: none;
  outline: none;
`;

const I18nButton = () => {
  const { t } = useTranslation("common");

  const changeLanguage = () => {
    // i18n.changeLanguage(i18n.language === "pt-BR" ? "en" : "pt-BR");
    window.open("https://www.en.nossas.org/", "_self");
  };

  return (
    <ButtonStyled onClick={changeLanguage}>
      <img src="/static/media/i18n/en.svg" alt={t("i18n.button.en")} />
    </ButtonStyled>
  );
};

export default I18nButton;
