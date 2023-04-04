import React from "react";
import { useTranslation } from "next-i18next";
import { Heading, Img, Link, Stack, Text } from "@chakra-ui/react";
import Arrow from "../IconsSVG/Arrow";

type Item = {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  link?: string;
};

export interface Props {
  items: Item[];
}

export const Panel: React.FC<{ items: Item }> = ({ items: item }) => {
  const { t } = useTranslation("common");

  return (
    <Stack flex={1} boxShadow={["base"]} rounded="base" bgColor="white">
      <Img src={item.src} alt={item.alt} objectFit="fill" />
      <Stack p={8} spacing={4} textAlign="left">
        <Link
          href={item.href}
          target="_blank"
          title={item.title}
          variant="inherit"
        >
          <Heading as="h3" fontWeight="bold" size="md">
            {item.title}
          </Heading>
        </Link>
        <Text size="sm">{item.description}</Text>
        <Link
          href={item.href}
          target="_blank"
          colorScheme="orange"
          flexDirection="row"
          display="flex"
          alignItems="center"
          title={item.link}
          textTransform="uppercase"
        >
          {item.link ? (
            <>
              <span>{`${item.link}`}</span>
              <Arrow />
            </>
          ) : (
            t("know-more")
          )}
        </Link>
      </Stack>
    </Stack>
  );
};
