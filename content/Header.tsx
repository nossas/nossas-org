import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

type HeaderProps = {
  title: any;
  titleColor?: "blue.main" | "pink.main" | "green.main";
  description: string;
};

const Header: React.FC<HeaderProps> = ({ title, titleColor, description }) => (
  <Stack
    direction={["column", null, null, "row"]}
    spacing={["40px", null, null, "115px"]}
    alignItems="center"
    justifyContent="center"
  >
    <Heading as="h2" size="lg" textColor={titleColor} width="250px">
      {title}
      {/* Incubar:
        <br /> <b>o que é isso?</b> */}
    </Heading>
    <Text maxW="680px">{description}</Text>
  </Stack>
);

Header.defaultProps = {
  titleColor: "blue.main",
};

export default Header;
