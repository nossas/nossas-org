import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { Section } from "../components/Page";

interface Props {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  maxW?: string | number;
  bgColor?: string;
  headingStyles?: any;
}

const DescriptionBox: React.FC<Props> = ({
  children,
  bgColor,
  description,
  title,
  headingStyles,
}) => (
  <Section columns={[1, null, null, 2]} columnGap="120px" bgColor={bgColor}>
    <Stack spacing={6}>
      <Heading
        as="h3"
        size="3xl"
        color="nossas.pink"
        fontWeight="normal"
        maxW="360px"
        {...headingStyles}
      >
        {title}
      </Heading>
      <Text>{description}</Text>
    </Stack>
    {children}
  </Section>
);

DescriptionBox.defaultProps = {
  bgColor: "nossas.bggray",
  headingStyles: {},
};

export default DescriptionBox;
