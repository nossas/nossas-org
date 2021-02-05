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
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <FormControl flexDirection="column">
      {inline ? (
        <InputGroup>
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
        <FormHelperText color="red" fontSize="xs" textAlign="right">
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
