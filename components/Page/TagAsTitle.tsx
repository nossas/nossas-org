import React from "react";
import { Heading } from "@chakra-ui/react";

const TagAsTitle: React.FC = ({ children }) => (
  <Heading
    as="h2"
    display="inline-table"
    color="nossas.blue"
    size="sm"
    fontWeight="700"
    paddingLeft="15px"
    borderLeftWidth="3px"
    borderLeftColor="nossas.blue"
  >
    {children}
  </Heading>
);

export default TagAsTitle;
