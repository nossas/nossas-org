import { Heading, Text, Flex } from "@chakra-ui/react";

const ImpactNumber = ({ numberText, description }) => (
  <Flex direction="column">
    <Heading
      as="span"
      size="lg"
      color="orange.main"
      fontWeight="bold"
      lineHeight=".8"
    >
      {numberText}
    </Heading>
    <Text as="span" size="sm" maxW={270}>
      {description}
    </Text>
  </Flex>
);

export default ImpactNumber;
