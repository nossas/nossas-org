import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { Section } from "../components/Page";

interface Props {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  color: "blue" | "pink" | "green";
  maxW?: string | number;
  bgColor?: string;
  headingStyles?: any;
}

const colors = {
  blue: "blue.main",
  pink: "pink.main",
  green: "green",
};

const DescriptionBox: React.FC<Props> = ({
  children,
  bgColor,
  description,
  title,
  headingStyles,
  color,
}) => (
  <Section
    columns={[1, null, null, 2]}
    columnGap="120px"
    rowGap="35px"
    bgColor={bgColor}
  >
    <Stack spacing={6}>
      <Heading
        as="h3"
        size="lg"
        color={colors[color]}
        maxW="340px"
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
  bgColor: "gray.light",
  headingStyles: {},
};

export default DescriptionBox;
