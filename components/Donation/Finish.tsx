import React from "react";
import { Text } from "@chakra-ui/react";
import { SuccessPanel } from "../../components/Form";

interface FinishProps {
  t: any;
  name: string;
}

const Finish: React.FC<FinishProps> = ({ t, name }) => (
  <SuccessPanel
    color="pink.main"
    title={
      <div
        dangerouslySetInnerHTML={{
          __html: t("donate.finish.title", {
            interpolation: { escapeValue: false },
            name: name.split(" ")[0],
          }),
        }}
      />
    }
  >
    <Text as="p">{t("donate.finish.thanks")}</Text>
    <Text as="p">{t("donate.finish.message")}</Text>
  </SuccessPanel>
);

export default Finish;
