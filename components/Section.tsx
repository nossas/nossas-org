import React from "react";
import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

const Section: React.FC<SimpleGridProps> = ({
  children,
  columns,
  ...props
}) => (
  <SimpleGrid
    as="section"
    columns={columns}
    px={["30px", "90px"]}
    py={["50px", "80px"]}
    {...props}
  >
    {children}
  </SimpleGrid>
);

export default Section;
