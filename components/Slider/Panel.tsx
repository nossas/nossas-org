import React from "react";
import { useTranslation } from "next-i18next";
import { Heading, Img, Link, Stack, Text } from "@chakra-ui/react";

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
          variant="pink"
          flexDirection="row"
          display="flex"
          alignItems="center"
          fontSize={["16px", null, null, "21px"]}
          title={item.link}
        >
          {item.link ? (
            <>
              <span>{`${item.link}`}</span>
              <Img
                src="/static/media/icon-right-arrow-pink.png"
                width="10px !important"
                height="17px"
                ml="19px"
              />
            </>
          ) : (
            t("know-more")
          )}
        </Link>
      </Stack>
    </Stack>
  );
};
