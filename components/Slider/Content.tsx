import React from "react";
import { useTranslation } from "next-i18next";
import {
  Image,
  Text,
  Heading,
  Link,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

export interface SliderContentProps {
  imageUrl: string;
  tag?: string;
  title: string;
  description: string;
  url: string;
}

const SliderContent: React.FC<SliderContentProps> = ({
  imageUrl,
  tag,
  title,
  description,
  url,
}) => {
  const { t } = useTranslation("common");

  return (
    <SimpleGrid columns={[1, 2]} gap={["45px", 12]}>
      <Image
        src={imageUrl}
        alt={title}
        width={[315, 615]}
        height={[194, 357]}
      />
      <Stack flex="1" direction="column" spacing="8">
        {tag && (
          <Heading as="h3" size="lg" color="nossas.blue">
            | {tag}
          </Heading>
        )}
        <Stack spacing="4">
          <Heading as="h2" size="2xl" color="nossas.blue">
            {title}
          </Heading>
          <Text fontSize={["xl", "2xl"]}>{description}</Text>
          <Link
            href={url}
            fontSize={["xl", "2xl"]}
            fontWeight="700"
            color="nossas.pink"
          >
            {t("know-more")}
          </Link>
        </Stack>
      </Stack>
    </SimpleGrid>
  );
};

export default SliderContent;
// export default withTranslation("common")(SliderContent);

interface ImageTextProps {
  src: string;
  alt?: string;
  title?: string;
  description: string;
  userName?: string;
  href?: string;
  linkText?: string;
}

export const ImageText: React.FC<ImageTextProps> = ({
  alt,
  src,
  title,
  description,
  userName,
  href,
  linkText,
}) => {
  return (
    <Stack
      direction={["column", "column", null, null, "row"]}
      spacing="70px"
      alignItems="center"
    >
      <Image
        objectFit="cover"
        boxSize={["357px", null, null, null, "357px", "427px"]}
        src={src}
        alt={alt}
      />

      <Stack spacing="10px" textAlign="left">
        {title && (
          <Heading as="h3" color="blue.main" fontWeight="bold" size="md">
            {title}
          </Heading>
        )}

        <Text>{description}</Text>

        {userName && <Text>{userName}</Text>}

        {linkText ||
          (href && (
            <Link href={href} target="_blank" variant="pink">
              {`${linkText} +`}
            </Link>
          ))}
      </Stack>
    </Stack>
  );
};
