import React from "react";
import { Heading, Text, Stack, Image } from "@chakra-ui/react";
import { Section } from "../components/Page";

interface ImageTextListProps {
  imgScale?: number;
  title: React.ReactNode | string;
  items: {
    src: string;
    alt?: string;
    description: string;
  }[];
}

const ImageTextListBox: React.FC<ImageTextListProps> = ({
  imgScale,
  title,
  items,
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
      alignItems="flex-end"
    >
      {items.map((item, i) => (
        <Stack key={`item_${i}`} alignItems="center">
          <Image
            transform={`scale(${imgScale})`}
            src={item.src}
            alt={item.alt}
          />
          <Text>{item.description}</Text>
        </Stack>
      ))}
    </Stack>
  </Section>
);

ImageTextListBox.defaultProps = {
  imgScale: 0.7,
};

export default ImageTextListBox;
