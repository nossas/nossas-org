import React from "react";
import { useTranslation } from "next-i18next";
import { Text } from "@chakra-ui/react";

import { SuccessPanel } from "../../components/Form";

interface FinishProps {
  name: string;
}

const Finish: React.FC<FinishProps> = ({ name }) => {
  const { t } = useTranslation("common");

  return (
    <SuccessPanel
      color="orange.main"
      title={
        <div
          dangerouslySetInnerHTML={{
            __html: t("donation.form.success.title", {
              interpolation: { escapeValue: false },
              name: name.split(" ")[0],
            }),
          }}
        />
      }
    >
      <Text as="p">{t("donation.form.success.thanks")}</Text>
      <Text as="p" mb="30px">
        {t("donation.form.success.message")}
      </Text>
    </SuccessPanel>
  );
};

export default Finish;
