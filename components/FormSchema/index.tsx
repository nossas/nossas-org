import React from "react";
import { Box, Button } from "@chakra-ui/react";
import ThemeForm from "./ThemeForm";

interface FormProps {
  onSubmit: (formData: any) => any;
  submitText?: string;
  uiSchema: any;
  schema: any;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  uiSchema,
  schema,
  submitText,
}) => {
  return (
    <Box bg="white" p="12" borderRadius="12px" boxShadow="base">
      <ThemeForm uiSchema={uiSchema} schema={schema} onSubmit={onSubmit}>
        {submitText && (
          <Button
            isFullWidth
            type="submit"
            bg="nossas.blue"
            color="#fff"
            size="lg"
          >
            {submitText}
          </Button>
        )}
      </ThemeForm>
    </Box>
  );
};

export default Form;
