import React from "react";
import { Box, Stack, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import { EmployeeItem } from "./EmployeeItem";

interface Employee {
  avatar: string;
  name: string;
  role: string;
  about?: string;
  team: string;
  networks?: Record<string, string>;
}

interface EmployeeTeamProps {
  title: string;
  description?: string;
  members: Employee[];
}

export const EmployeeTeam = ({
  title,
  description,
  members,
}: EmployeeTeamProps) => (
  <Stack direction="column" spacing="30px">
    <Box>
      <Heading as="h2" color="pink.main" fontWeight="700" size="lg">
        {title}
      </Heading>
      {description && <Text>{description}</Text>}
    </Box>

    <SimpleGrid minChildWidth={["150px", "150px", "218px"]} rowGap="30px">
      {members.map((employee, index: number) => (
        <EmployeeItem key={`employee-${index}`} data={employee} />
      ))}
    </SimpleGrid>
  </Stack>
);
