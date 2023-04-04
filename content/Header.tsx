import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

type HeaderProps = {
  title: any;
  titleColor?: "blue.main" | "pink.main" | "green.main" | "orange.main";
  description: React.ReactElement | string;
};

const Header: React.FC<HeaderProps> = ({ title, titleColor, description }) => (
  <SimpleGrid
    columns={[1, null, null, 2]}
    templateColumns={["auto", null, null, "582px auto"]}
    rowGap="30px"
    alignItems="flex-start"
  >
    <Box>
      <Heading as="h2" size="lg" textColor={titleColor}>
        {title}
      </Heading>
    </Box>
    {typeof description === "string" ? (
      <Text size="lg">{description}</Text>
    ) : (
      description
    )}
  </SimpleGrid>
);

Header.defaultProps = {
  titleColor: "blue.main",
};

export default Header;
