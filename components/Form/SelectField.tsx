import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  FormHelperText,
  InputLeftAddon,
  InputGroup,
  SelectProps,
} from "@chakra-ui/react";
import { useField } from "formik";

type UIOptions = {
  items: string[] | Record<string | number, any>;
  type?: "object" | "array";
};

interface SelectWidgetProps extends Partial<SelectProps> {
  name: string;
  label?: string;
  inline?: boolean;
  options: UIOptions;
}

const SelectWidget: React.FC<SelectWidgetProps> = ({
  name,
  label,
  inline,
  flex,
  options: { items, type },
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  let values = {};
  if (type !== "object") items.forEach((v: string) => (values[v] = v));
  else values = items;

  return (
    <FormControl
      flexDirection="column"
      flex={flex}
      borderColor={meta.touched && !!meta.error ? "red" : "nossas.lightgray"}
    >
      {inline ? (
        <InputGroup
          borderColor={
            meta.touched && !!meta.error ? "red" : "nossas.lightgray"
          }
        >
          <InputLeftAddon
            children={label}
            minW="100px"
            bg="white"
            color="nossas.darkgray"
            fontSize="xs"
            borderRight="0"
          />
          <Select
            fontSize="xs"
            borderLeft="0"
            borderLeftRadius="0"
            borderColor="nossas.lightgray"
            {...field}
            {...props}
          >
            {Object.keys(values).map((key, index) => (
              <option key={index} value={key}>
                {values[key]}
              </option>
            ))}
          </Select>
        </InputGroup>
      ) : (
        <>
          {label && <FormLabel>{label}</FormLabel>}
          <Select fontSize="xs" {...field} {...props}>
            {Object.keys(values).map((key, index) => (
              <option key={index} value={key}>
                {values[key]}
              </option>
            ))}
          </Select>
        </>
      )}
      {meta.touched && !!meta.error && (
        <FormHelperText color="red" fontSize="xs" textAlign="left">
          {meta.error}
        </FormHelperText>
      )}
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
