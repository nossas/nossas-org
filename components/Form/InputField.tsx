import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputFieldProps extends InputProps {
  name: string;
  label?: string;
  inline?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  inline,
  flex,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

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
          <Input fontSize="xs" borderLeft="0" {...field} {...props} />
        </InputGroup>
      ) : (
        <>
          {label && <FormLabel>{label}</FormLabel>}
          <Input fontSize="xs" {...field} {...props} />
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

export default InputField;
