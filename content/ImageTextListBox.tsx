import React, { ReactNode } from "react";
import { Heading, Text, Stack } from "@chakra-ui/react";
import { Section } from "../components/Page";

interface ImageTextListProps {
  imgScale?: number;
  title: ReactNode | string;
  items: {
    icon: ReactNode;
    description: string;
  }[];
  width?: string;
}

const ImageTextListBox: React.FC<ImageTextListProps> = ({
  imgScale,
  title,
  items,
  width,
}) => (
  <Section direction="column" spacing="60px">
    <Heading as="h2" variant="tag">
      {title}
    </Heading>

    <Stack
      direction={["column", null, "row"]}
      spacing="55px"
      textAlign="center"
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
          maxW={width}
          mb="55px"
        >
          {icon}
          <Text>{description}</Text>
        </Stack>
      ))}
    </Stack>
  </Section>
);

ImageTextListBox.defaultProps = {
  imgScale: 0.7,
  width: "350px",
};

export default ImageTextListBox;
