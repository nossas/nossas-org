import React from "react";
import { Box, Heading, Img, Link, Stack, Text } from "@chakra-ui/react";

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
    <Img src={item.src} alt={item.alt} objectFit="fill" boxSize="380px" />
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
        <Img
          src="/static/media/icon-right-arrow-pink.png"
          width="10px !important"
          height="17px"
          ml="19px"
        />
      </Link>
    </Stack>
  </Box>
);
