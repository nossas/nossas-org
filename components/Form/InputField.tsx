import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  InputProps,
  Box,
} from "@chakra-ui/react";
import { useField } from "formik";
import NumberFormat from "react-number-format";
import styled from "@emotion/styled";

interface InputFieldProps extends InputProps {
  name: string;
  label?: string;
  inline?: boolean;
  validate?: any;
}

const InputFormatField = styled(NumberFormat)`
  width: 100%;
  padding: 0 1rem;

  :focus {
    outline: 0;
  }
`;

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  inline,
  flex,
  validate,
  ...props
}) => {
  const [field, meta, helpers] = useField({ name, validate });

  return (
    <FormControl flexDirection="column" flex={flex}>
      <Box
        border="1px solid"
        borderRadius={4}
        borderColor={meta.touched && !!meta.error ? "red" : "gray.light"}
      >
        {inline ? (
          <InputGroup border="0">
            <InputLeftAddon
              children={label}
              minW="100px"
              bg="white"
              color="gray.dark"
              fontSize="xs"
              border="0"
            />
            {props.type === "tel" ? (
              <InputFormatField
                format="(##) #####-####"
                placeholder={props.placeholder}
                {...field}
              />
            ) : (
              <Input fontSize="xs" border="0" {...field} {...props} />
            )}
          </InputGroup>
        ) : (
          <>
            {label && <FormLabel>{label}</FormLabel>}
            {props.type === "tel" ? (
              <InputFormatField
                format="(##) #####-####"
                placeholder={props.placeholder}
                {...field}
              />
            ) : (
              <Input fontSize="xs" border="0" {...field} {...props} />
            )}
          </>
        )}
      </Box>
      {meta.touched && !!meta.error && (
        <FormHelperText color="red" fontSize="xs" textAlign="left">
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
