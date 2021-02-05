import React from "react";
import { Button, Heading, Input, Stack } from "@chakra-ui/react";
import { withTranslation } from "../i18n";

type Props = {
  t: any;
  inverted: boolean;
};

const Newsletter: React.FC<Props> = ({ t, inverted }) => {
  return (
    <div>
      <Heading as="h4" color={inverted ? "white" : "nossas.blue"} mb={4}>
        {t("newsletter.title")}
      </Heading>
      <Stack direction="row" spacing={1} alignItems="center">
        <Input
          variant="filled"
          type="email"
          borderRadius="0"
          placeholder={t("newsletter.placeholder")}
        />
        <Button variant="pink" onClick={() => console.log("ola")}>
          {t("newsletter.button")}
        </Button>
      </Stack>
    </div>
  );
};

export default withTranslation("common")(Newsletter);
