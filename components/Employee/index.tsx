import React from "react";
import { Box, Stack, Heading, Text, Grid } from "@chakra-ui/react";

import { EmployeeItem } from "./EmployeeItem";
import { EmployeeType } from "./types";

interface EmployeeTeamProps {
  title: string;
  description?: string;
  members: EmployeeType[];
}

export const EmployeeTeam = ({
  title,
  description,
  members,
}: EmployeeTeamProps) => (
  <Stack direction="column" spacing="30px" mb="80px">
    <Box>
      <Heading as="h2" color="orange.main" fontWeight="700" size="lg">
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
