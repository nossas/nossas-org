import { Heading, SimpleGrid } from "@chakra-ui/react";

import { Section } from "../../components/Page";
import { ImageLogo } from "./ImageLogo";

export const Media = ({ title, logos }) => {
  return (
    <Section backgroundColor="gray.light">
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "482px auto"]}
        rowGap="30px"
      >
        <Heading
          display="flex"
          alignItems="center"
          color="orange.main"
          size="lg"
          mb={["20px", null, null, null, null]}
        >
          {title}
        </Heading>

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
