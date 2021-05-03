import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Stack,
  Image,
  Box,
} from "@chakra-ui/react";

interface Member {
  image: string;
  name: string;
  role: string;
}

const members = [
  {
    image: "/static/media/team/ana-carolina.png",
    name: "Ana Carolina Evangelista",
    role: "Presidente do Conselho",
  },
  {
    image: "/static/media/team/ana-paula.png",
    name: "Ana Paula Lisboa",
    role: "Conselheira",
  },
  {
    image: "/static/media/team/roberto-andres.png",
    name: "Roberto Andres",
    role: "Conselheiro",
  },
  {
    image: "/static/media/team/bianca-vianna.png",
    name: "Bianca Vianna",
    role: "Conselheira",
  },
  {
    image: "/static/media/team/felipe-estefam.png",
    name: "Felipe Estefan",
    role: "Conselheiro",
  },
  {
    image: "/static/media/team/ines-lafer.png",
    name: "Inês Laffer",
    role: "Conselheira",
  },
];

const Team = () => (
  <Stack direction={["column", "row"]} spacing={["30px", "120px"]}>
    <Stack flex={1} direction="column" spacing="25px">
      <Image
        maxW="245px"
        maxH="240px"
        src="/static/media/team/alessandra-orofino.png"
        alt="Alessandra Orofino"
      />
      <Box>
        <Heading as="h3" size="md" fontWeight="bold">
          Alessandra Orofino
        </Heading>
        <Text size="sm">Co-fundadora e Diretora Executiva</Text>
      </Box>
      <Text>
        Formada em Economia e Direitos Humanos pela Columbia University, fellow
        no Obama Foundation e diretora do Greg News na HBO. Alessandra fundou o
        Meu Rio em 2011 e desde então vem contribuindo com o desenvolvimento do
        NOSSAS.
      </Text>
    </Stack>
    <Stack flex={1} direction="column" spacing="30px">
      <Text>
        Nosso conselho é consultivo e conta com seis pessoas, eleitas para
        mandatos de dois anos:
      </Text>
      <SimpleGrid columns={[2, null, null, 3]} columnGap="25px" rowGap="35px">
        {members.map((member: Member, index: number) => (
          <Stack direction="column" spacing="15px" key={`member-${index}`}>
            <Image
              maxW={["145px", null, null, "160px"]}
              maxH={["145px", null, null, "160px"]}
              src={member.image}
              alt={member.name}
            />
            <Box>
              <Heading as="h3" size="sm" fontWeight="bold">
                {member.name}
              </Heading>
              <Text size="sm">{member.role}</Text>
            </Box>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  </Stack>
);

export default Team;
