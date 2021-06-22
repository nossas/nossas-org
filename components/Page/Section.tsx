import React from "react";
import {
  Box,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackProps,
} from "@chakra-ui/react";

const PX = ["30px", "6%"];
const PY = ["50px", "80px"];

export interface Props extends Omit<SimpleGridProps, "spacing">, StackProps {
  columns?: any;
}

const Section: React.FC<Props> = ({
  as = "section",
  children,
  columns,
  ...props
}) => {
  const Container = () => (
    <Box w="100%" maxW="1600px" margin="0 auto">
      {children}
    </Box>
  );

  return !!columns ? (
    <SimpleGrid as={as} px={PX} py={PY} columns={columns} {...props}>
      <Container />
    </SimpleGrid>
  ) : (
    <Stack as={as} px={PX} py={PY} {...props}>
      <Container />
    </Stack>
  );
};

export default Section;
