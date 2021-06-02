import React from "react";
import { Box, Stack, Heading, Text, SimpleGrid, Grid } from "@chakra-ui/react";

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

    <Grid
      templateColumns={["repeat(2, 1fr)", "repeat(auto-fit, 190px)"]}
      gap="16px"
    >
      {members.map((employee, index: number) => (
        <EmployeeItem key={`employee-${index}`} data={employee} />
      ))}
    </Grid>
  </Stack>
);
