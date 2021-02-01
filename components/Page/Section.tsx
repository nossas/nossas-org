import React from "react";
import {
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackProps,
} from "@chakra-ui/react";

const PX = ["30px", "90px"];
const PY = ["50px", "80px"];

export interface Props extends SimpleGridProps, StackProps {
  columns?: any;
}

const Section: React.FC<Props> = ({ children, columns, ...props }) =>
  !!columns ? (
    <SimpleGrid as="section" columns={columns} px={PX} py={PY} {...props}>
      {children}
    </SimpleGrid>
  ) : (
    <Stack as="section" px={PX} py={PY} {...props}>
      {children}
    </Stack>
  );

export default Section;
