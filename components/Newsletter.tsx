import React from "react";
import { Button, Heading, Input, Text, Stack } from "@chakra-ui/react";
import { withTranslation } from "../i18n";

type Props = {
  t: any;
  inverted: boolean;
};

const Newsletter: React.FC<Props> = ({ t, inverted }) => {
  return (
    <Stack spacing={4} maxW="430px">
      <Heading as="h4" color={inverted ? "white" : "nossas.blue"}>
        {t("newsletter.title")}
      </Heading>
      <Text size="xs">{t("newsletter.description")}</Text>
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
    </Stack>
  );
};

export default withTranslation("common")(Newsletter);
