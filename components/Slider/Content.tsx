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

{
  /* <SimpleGrid columns={[1, 2]} gap={["45px", 12]}>
  <Image
    src="/static/media/leftcontent.png"
    alt="Mobilizadores Região Amazônica"
    width={[315, 615]}
    height={[194, 357]}
  />
  <Stack flex="1" direction="column" spacing="8">
    <Heading as="h3" size="lg" color="nossas.blue">
      | TREINAMENTOS REALIZADOS
      </Heading>
    <Stack spacing="4">
      <Heading as="h2" size="2xl" color="nossas.blue">
        PROGRAMA DE MOBILIZADORES REGIÃO AMAZÔNICA
        </Heading>
      <Text fontSize={["xl", "2xl"]}>
        É uma rede composta por organizações locais que atuam em diversas
        regiões do Brasil por cidades mais participativas.
        </Text>
      <Link href="#" fontSize={["xl", "2xl"]} fontWeight="700" color="nossas.pink">
        Saiba mais +
        </Link>
    </Stack>
  </Stack>
</SimpleGrid> */
}
