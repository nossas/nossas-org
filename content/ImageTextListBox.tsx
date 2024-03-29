import React, { ReactNode } from "react";
import { Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { Section } from "../components/Page";

interface ImageTextListProps {
  imgScale?: number;
  title?: ReactNode | string;
  description?: ReactNode | string;
  items: {
    icon: ReactNode;
    description: string;
  }[];
  width?: string;
  maxWidth?: string;
}

const ImageTextListBox: React.FC<ImageTextListProps> = ({
  imgScale,
  title,
  description,
  items,
  width,
  maxWidth,
}) => (
  <Section direction="column" spacing="60px">
    <Stack spacing={-10}>
      <Heading as="h2" variant="tag" mb={16}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Stack>

    <Flex justify="center">
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing="55px"
        gridRowGap={[null, null, null, "40px"]}
        maxWidth={maxWidth}
        justifyItems="center"
        justifyContent="center"
        alignItems="baseline"
        flexWrap="nowrap"
      >
        {items.map(({ icon, description }, i) => (
          <Stack
            key={`item_${i}`}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            maxW={width}
          >
            {icon}
            <Text>{description}</Text>
          </Stack>
        ))}
      </Stack>
    </Flex>
  </Section>
);

ImageTextListBox.defaultProps = {
  imgScale: 0.7,
  width: "350px",
  maxWidth: "initial",
};

export default ImageTextListBox;
