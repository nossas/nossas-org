import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { WidgetProps } from "@rjsf/core";

export interface TextWidgetProps extends WidgetProps {
  type?: string;
}

const TextWidget: React.FC<TextWidgetProps> = ({
  placeholder,
  value,
  required,
  onChange,
  label,
  type,
  schema,
}) => (
  <FormControl isRequired={required}>
    <FormLabel>{label || schema.title}</FormLabel>
    <Input
      value={value}
      onChange={(evt) => onChange(evt.target.value)}
      placeholder={placeholder}
      type={type || (schema.type as string)}
    />
  </FormControl>
);

export default TextWidget;
