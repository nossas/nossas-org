import React from "react";
import { FieldProps } from "@rjsf/core";
import { Heading } from "@chakra-ui/react";

export interface TitleFieldProps extends Partial<FieldProps> {
  title: string;
}

const TitleField: React.FC<TitleFieldProps> = (props: any) => (
  <Heading as="h3" color="nossas.blue" textAlign="center">
    {props.title}
  </Heading>
);

export default TitleField;
