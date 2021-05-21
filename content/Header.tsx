import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

type HeaderProps = {
  title: any;
  titleColor?: "blue.main" | "pink.main" | "green.main";
  description: string;
};

const Header: React.FC<HeaderProps> = ({ title, titleColor, description }) => (
  <SimpleGrid
    columns={[1, null, null, 2]}
    templateColumns={["auto", null, null, "582px auto"]}
    rowGap="30px"
  >
    <Box>
      <Heading as="h2" size="lg" textColor={titleColor}>
        {title}
      </Heading>
    </Box>
    <Text>{description}</Text>
  </SimpleGrid>
);

Header.defaultProps = {
  titleColor: "blue.main",
};

export default Header;
