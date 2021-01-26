import React from "react";
import {
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const Panel = () => (
  <SimpleGrid columns={2} gap={4}>
    <Box boxShadow="base">
      <Image
        src="/static/media/s3/mapadoacolhimento.png"
        alt="Mapa do Acolhimento"
        width="100%"
        height={380}
      />
      <Stack p={8} spacing={4}>
        <Heading as="h3">MAPA DO ACOLHIMENTO</Heading>
        <Text>
          O Conselho Nacional do Meio Ambiente (Conama) derrubou resoluções
          importantes para preservação de resoluções importantes.
        </Text>
        <Link
          href="#"
          fontSize={["xl", "2xl"]}
          fontWeight="700"
          color="nossas.pink"
        >
          {`Saber mais >`}
        </Link>
      </Stack>
    </Box>
    <Box boxShadow="base">
      <Image
        src="/static/media/s3/projetoincubado2.png"
        alt="Projeto Incubado 2"
        width="100%"
        height={380}
      />
      <Stack p={8} spacing={4}>
        <Heading as="h3">PROJETO INCUBADO 2</Heading>
        <Text>
          O Conselho Nacional do Meio Ambiente (Conama) derrubou resoluções
          importantes para preservação de resoluções importantes.
        </Text>
        <Link
          href="#"
          fontSize={["xl", "2xl"]}
          fontWeight="700"
          color="nossas.pink"
        >
          {`Saber mais >`}
        </Link>
      </Stack>
    </Box>
  </SimpleGrid>
);

export default Panel;
