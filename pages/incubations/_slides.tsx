import React from "react";
import { Heading, Image, Stack, Text, Link } from "@chakra-ui/react";

interface ImageTextProps {
  src: string;
  alt?: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export const ImageText: React.FC<ImageTextProps> = ({
  alt,
  src,
  title,
  description,
  href,
  linkText,
}) => {
  const imageSizes = {
    maxW: ["510px", null, null, null, "610px"],
    height: "auto",
  };

  return (
    <Stack
      direction={["column", null, null, "row"]}
      spacing="70px"
      alignItems="center"
    >
      <Image src={src} alt={alt} {...imageSizes} />
      <Stack spacing="10px" textAlign="left">
        <Heading as="h3" color="nossas.blue" fontWeight="bold">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Link href={href} target="_self" variant="pink">
          {linkText}
        </Link>
      </Stack>
    </Stack>
  );
};
