import { Heading, Stack, Text, Img, Link } from "@chakra-ui/react";

interface ImageTextIncubationsProps {
  src: string;
  alt?: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export const ImageTextIncubations: React.FC<ImageTextIncubationsProps> = ({
  alt,
  src,
  title,
  description,
  href,
  linkText,
}) => {
  return (
    <Stack
      direction={["column", "column", null, null, "row"]}
      spacing="70px"
      alignItems="center"
    >
      <Img
        objectFit="cover"
        boxSize={["100%", null, null, null, "357px"]}
        maxW={["611px"]}
        src={src}
        alt={alt}
      />
      <Stack spacing="10px" textAlign="left">
        <Link href={href} target="_blank">
          <Heading as="h3" color="blue.main" fontWeight="bold" size="md">
            {title}
          </Heading>
        </Link>
        <Text dangerouslySetInnerHTML={{ __html: description }} maxW={1900} />
        {href && linkText ? (
          <Link href={href} target="_blank" colorScheme="orange">
            {`${linkText} +`}
          </Link>
        ) : null}
      </Stack>
    </Stack>
  );
};
