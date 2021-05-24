import React, { ReactNode } from "react";
import { Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { Section } from "../components/Page";

interface ImageTextListProps {
  imgScale?: number;
  title?: ReactNode | string;
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
  items,
  width,
  maxWidth,
}) => (
  <Section direction="column" spacing="60px">
    <Heading as="h2" variant="tag">
      {title}
    </Heading>

    <Flex justify="center">
      <Stack
        direction={["column", null, "row"]}
        spacing={["0", "0", "0", "55px"]}
        maxWidth={maxWidth}
        justifyItems="center"
        justifyContent="center"
        alignItems="baseline"
        flexWrap="wrap"
      >
        {items.map(({ icon, description }, i) => (
          <Stack
            key={`item_${i}`}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            maxW={width}
            mb="55px"
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
