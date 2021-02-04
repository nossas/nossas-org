import React from "react";
import {
  FormControl,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import { useField } from "formik";

const InputField = ({ name, label, ...props }: any) => {
  const [field, meta, helpers] = useField(name);

  return (
    <FormControl flexDirection="column">
      <InputGroup>
        <InputLeftAddon
          children={label}
          minW="100px"
          bg="white"
          color="nossas.darkgrey"
          fontSize="sm"
          borderRight="0"
        />
        <Input fontSize="md" borderLeft="0" {...field} {...props} />
      </InputGroup>
      {meta.touched && !!meta.error && (
        <FormHelperText color="red">{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
