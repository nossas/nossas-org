import React from "react";
import {
  Image,
  Text,
  Heading,
  Link,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { withTranslation } from "../../i18n";

export interface SliderContentProps {
  t: any;
  imageUrl: string;
  tag?: string;
  title: string;
  description: string;
  url: string;
}

const SliderContent: React.FC<SliderContentProps> = ({
  t,
  imageUrl,
  tag,
  title,
  description,
  url,
}) => (
  <SimpleGrid columns={[1, 2]} gap={["45px", 12]}>
    <Image src={imageUrl} alt={title} width={[315, 615]} height={[194, 357]} />
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
          {t("slider.defaults.more")}
        </Link>
      </Stack>
    </Stack>
  </SimpleGrid>
);

export default withTranslation("common")(SliderContent);

interface ImageTextProps {
  src: string;
  alt?: string;
  title?: string;
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
        {linkText || href ? (
          <Link href={href} target="_blank" variant="pink">
            {`${linkText} +`}
          </Link>
        ) : null}
      </Stack>
    </Stack>
  );
};
