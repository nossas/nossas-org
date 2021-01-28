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

const Panel: React.FC<Props> = ({ items }) => (
  <SimpleGrid columns={items.length} gap={4}>
    {items.map((item: Item, index: number) => (
      <Box key={index} boxShadow="base">
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
    ))}
  </SimpleGrid>
);

export default Panel;
