import React from "react";
import { Heading, Image, Stack, Text, Box } from "@chakra-ui/react";

interface FinishProps {
  t: any;
  name: string;
}

const Finish: React.FC<FinishProps> = ({ t, name }) => (
  <Stack alignItems="center" spacing={8}>
    <Image
      src="/static/media/s3/donationsuccess.png"
      maxW="275px"
      maxH="270px"
      alt={t("donate.finish.imageAlt")}
    />
    <Stack alignItems="center" spacing={4}>
      <Heading as="h3" size="3xl" color="nossas.pink" fontWeight="normal">
        <div
          dangerouslySetInnerHTML={{
            __html: t("donate.finish.title", {
              interpolation: { escapeValue: false },
              name: name.split(" ")[0],
            }),
          }}
        />
      </Heading>
      <Box as="span" textAlign="center">
        <Text as="p">{t("donate.finish.thanks")}</Text>
        <Text as="p">{t("donate.finish.message")}</Text>
      </Box>
    </Stack>
  </Stack>
);

export default Finish;
