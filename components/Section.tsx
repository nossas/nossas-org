import React from "react";
import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

const Section: React.FC<SimpleGridProps> = ({
  children,
  columns,
  ...props
}) => (
  <SimpleGrid columns={columns} px="90px" py="80px" {...props}>
    {children}
  </SimpleGrid>
);

export default Section;
