import React from "react";
import { Box, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

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
  <Box
    flex={1}
    boxShadow={["base"]}
    rounded="base"
    bgColor="white"
    minHeight="700px"
  >
    <Image src={item.src} alt={item.alt} width="100%" height={[229, 380]} />
    <Stack p={8} spacing={4} textAlign="left">
      <Heading as="h3" fontWeight="bold" size="md">
        {item.title}
      </Heading>
      <Text size="sm">{item.description}</Text>
      <Link
        href={item.href}
        variant="pink"
        flexDirection="row"
        display="flex"
        alignItems="center"
        target="_blank"
      >
        <span>{`${item.link}`}</span>
        <Image
          src="/static/media/icon-right-arrow-pink.png"
          width="10px !important"
          height="17px"
          ml="19px"
        />
      </Link>
    </Stack>
  </Box>
);

export const Group: React.FC<Props> = ({ items }) => (
  <Stack direction="row" spacing={4}>
    {items.map((item: Item, index: number) => (
      <Panel key={index} items={item} />
    ))}
  </Stack>
);
