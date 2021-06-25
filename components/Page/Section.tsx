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
  bgColor,
  children,
  columns,
  ...props
}) => {
  return !!columns ? (
    <Box as={as} w="100%" bgColor={bgColor}>
      <SimpleGrid
        px={PX}
        py={PY}
        columns={columns}
        w="100%"
        maxW="1600px"
        margin="0 auto"
        {...props}
      >
        {children}
      </SimpleGrid>
    </Box>
  ) : (
    <Box as={as} w="100%" bgColor={bgColor}>
      <Stack px={PX} py={PY} w="100%" maxW="1600px" margin="0 auto" {...props}>
        {children}
      </Stack>
    </Box>
  );
};

export default Section;
