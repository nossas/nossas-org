import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { FieldProps } from "@rjsf/core";

type UIOptions = {
  items: string[] | Record<string | number, any>;
  type?: "object" | "array";
};

interface SelectWidgetProps extends Partial<FieldProps> {
  options: UIOptions;
}

const SelectWidget: React.FC<SelectWidgetProps> = ({
  placeholder,
  value,
  label,
  onChange,
  required,
  schema,
  options: { items, type },
}) => {
  let values = {};
  if (type !== "object") items.forEach((v: string) => (values[v] = v));
  else values = items;

  return (
    <FormControl isRequired={required}>
      <FormLabel>{label || schema.title}</FormLabel>
      <Select
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        placeholder={placeholder}
      >
        {Object.keys(values).map((key, index) => (
          <option key={index} value={key}>
            {values[key]}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

SelectWidget.defaultProps = {
  options: {
    items: [],
    type: "array",
  },
};

export default SelectWidget;
