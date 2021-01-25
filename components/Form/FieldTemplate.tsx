import React from "react";
import { FieldTemplateProps } from "@rjsf/core";
import { Box, Text, List, ListItem } from "@chakra-ui/react";

const FieldTemplate: React.FC<FieldTemplateProps> = (props) => {
  const {
    id,
    displayLabel,
    rawDescription,
    children,
    rawErrors,
    rawHelp,
  } = props;

  return (
    <Box mb={4}>
      {children}
      {displayLabel && rawDescription ? (
        <Text
          className={
            rawErrors && rawErrors.length > 0 ? "text-danger" : "text-muted"
          }
        >
          {rawDescription}
        </Text>
      ) : null}
      {rawErrors && rawErrors.length > 0 && (
        <List as="ul">
          {rawErrors.map((error: string) => (
            <ListItem as="li" key={error} className="border-0 m-0 p-0">
              <small className="m-0 text-danger">{error}</small>
            </ListItem>
          ))}
        </List>
      )}
      {rawHelp && (
        <Text
          id={id}
          className={rawErrors.length > 0 ? "text-danger" : "text-muted"}
        >
          {rawHelp}
        </Text>
      )}
    </Box>
  );
};

export default FieldTemplate;
