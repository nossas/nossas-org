import { Heading, Text, Flex } from "@chakra-ui/react";

export const ImpactNumber = ({ numberText, description }) => (
  <Flex direction="column">
    <Heading
      as="span"
      size="lg"
      color="pink.main"
      fontWeight="bold"
      lineHeight=".8"
    >
      {numberText}
    </Heading>
    <Text as="span" size="sm">
      {description}
    </Text>
  </Flex>
);

export default ImpactNumber;
