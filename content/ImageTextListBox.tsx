import React from "react";
import { Heading, Text, Stack, Image, StyleProps } from "@chakra-ui/react";
import { Section } from "../components/Page";

interface ImageTextListProps {
  imgScale?: number;
  title: React.ReactNode | string;
  items: {
    src: string;
    alt?: string;
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
      alignItems="flex-end"
      flexWrap="wrap"
    >
      {items.map((item, i) => (
        <Stack
          key={`item_${i}`}
          alignItems="center"
          justifyContent="center"
          width={width}
          mb="55px"
        >
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
  width: "350px",
};

export default ImageTextListBox;
