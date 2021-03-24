import React from "react";
import { Heading, Image, Stack, Box } from "@chakra-ui/react";

interface FinishProps {
  title: string | React.ReactElement;
  color?: string;
}

const SuccessPanel: React.FC<FinishProps> = ({ title, children, color }) => (
  <Stack alignItems="center" spacing={8}>
    <Image
      src="/static/media/s3/donationsuccess.png"
      maxW="275px"
      maxH="270px"
      alt="Imagem de successo"
    />
    <Stack alignItems="center" spacing={4}>
      <Heading as="h3" size="3xl" color={color}>
        {title}
      </Heading>
      <Box as="span" textAlign="center">
        {children}
      </Box>
    </Stack>
  </Stack>
);

export default SuccessPanel;
