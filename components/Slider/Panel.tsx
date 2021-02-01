import React from "react";
import {
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

type Item = {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  link: string;
};

export interface Props {
  items: Item[];
}

export const Panel: React.FC<{ items: Item }> = ({ items: item }) => (
  <Box boxShadow="base">
    <Image src={item.src} alt={item.alt} width="100%" height={380} />
    <Stack p={8} spacing={4}>
      <Heading as="h3">{item.title}</Heading>
      <Text>{item.description}</Text>
      <Link
        href={item.href}
        fontSize={["xl", "2xl"]}
        fontWeight="700"
        color="nossas.pink"
      >
        {`${item.link} >`}
      </Link>
    </Stack>
  </Box>
);

export const Group: React.FC<Props> = ({ items }) => (
  <SimpleGrid columns={items.length} gap={4}>
    {items.map((item: Item, index: number) => (
      <Panel key={index} items={item} />
    ))}
  </SimpleGrid>
);
