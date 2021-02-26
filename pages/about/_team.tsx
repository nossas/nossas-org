import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Stack,
  Image,
} from "@chakra-ui/react";

interface Team {
  description: string;
  members: { photo: string; name: string }[];
}

interface SectionTeamProps {
  teams: Team[];
}

const Team: React.FC<SectionTeamProps> = ({ teams }) => (
  <Stack direction={["column", "row"]} spacing={["30px", "100px"]}>
    {teams.map((team, index: number) => (
      <Stack key={`team-${index}`} direction="column" spacing="30px">
        <Text color="white">{team.description}</Text>
        <SimpleGrid columns={[2, null, null, null, 3]}>
          {team.members.map((member, index: number) => (
            <Image
              key={`member-${index}`}
              transform={["scale(0.9)", "scale(1)"]}
              src={member.photo}
              alt={member.name}
            />
          ))}
        </SimpleGrid>
      </Stack>
    ))}
  </Stack>
);

export default Team;
