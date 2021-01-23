import React, { useState } from "react";
import { Button, Flex, Link, Stack, Box } from "@chakra-ui/react";
import { fallDown as Menu } from "react-burger-menu";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import Brand from "./Brand";

export const LinkStyled = ({ children, ...props }) => (
  <Link color="white" {...props}>
    {children}
  </Link>
);

const NavbarComponent = ({ children }) => {
  const [open, setOpen] = useState(false);
  console.log("isMobile", { isMobile });
  return (
    <Flex
      bg="nossas.blue"
      height="70px"
      paddingX={isMobile ? "30px" : "60px"}
      alignItems="center"
      justifyContent="space-between"
    >
      <MobileView>
        <Menu
          pageWrapId="page-wrap"
          outerContainerId="page-container"
          isOpen={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          {children}
        </Menu>
        <Box pl="41px">
          <Brand />
        </Box>
      </MobileView>
      <BrowserView>
        <Brand />
        <Stack flex="1" justifyContent="center" spacing="10" direction="row">
          {children}
        </Stack>
      </BrowserView>
      <Button size="md">Doar</Button>
    </Flex>
  );
};

const Navbar = () => {
  return (
    <NavbarComponent>
      <LinkStyled href="#">Quem somos</LinkStyled>
      <LinkStyled href="#">Seja um ativista</LinkStyled>
      <LinkStyled href="#">Acontecendo agora</LinkStyled>
    </NavbarComponent>
  );
};

export default Navbar;
