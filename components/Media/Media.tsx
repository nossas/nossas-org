import React from "react";
import { Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Section } from "../../components/Page";

const ImageLogo = ({ logo }: any) => {
  const image = (
    <Image src={logo?.src || logo} alt="" width={["80%", "50%", "unset"]} />
  );

  if (logo?.href) {
    return (
      <a href={logo.href} target="_blank">
        {image}
      </a>
    );
  }

  return image;
};

const Media = ({ title, logos }) => {
  return (
    <Section backgroundColor="gray.light">
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "482px auto"]}
        backgroundColor="gray.light"
        rowGap="30px"
      >
        <Box>
          <Heading
            display="flex"
            alignItems="center"
            color="blue.main"
            size="lg"
            mb={["20px", null, null, null, null]}
          >
            {title}
          </Heading>
        </Box>
        <SimpleGrid
          templateColumns={[
            "repeat(2, auto)",
            "repeat(2, auto)",
            "repeat(4, auto)",
            "repeat(5, auto)",
          ]}
          justifyItems="center"
          gridRowGap={["25px"]}
          gridColumnGap={["15px"]}
        >
          {logos.map((logo: any, i: number) => (
            <ImageLogo key={`media-${i}`} logo={logo} />
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Section>
  );
};

export default Media;
