import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: React.ReactNode;
  content: React.ReactNode | string;
  maxW?: string | number;
}

const DescriptionBox: React.FC<Props> = ({ maxW, title, content }) => (
  <Stack spacing={6} maxW={maxW}>
    <Heading as="h3" size="3xl" color="nossas.pink" fontWeight="normal">
      {title}
      {/* <b>Manual de</b> mobilização */}
    </Heading>
    <Text fontSize={["xl", "2xl"]}>
      {content}
      {/* Ao longo dos 10 capítulos você vai encontrar referências, casos de
      sucesso, exercícios e tudo que você precisa de informação para
      construir campanhas de ativismo de impacto. */}
    </Text>
  </Stack>
);

export default DescriptionBox;
