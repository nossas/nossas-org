import React, { useState } from "react";
import { Button, Flex, Link, Stack, Box } from "@chakra-ui/react";
import { fallDown as Menu } from "react-burger-menu";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import Brand from "./Brand";
import { withTranslation } from "../../i18n";

export const LinkStyled = ({ children, ...props }) => (
  <Link color="white" {...props}>
    {children}
  </Link>
);

const NavbarComponent = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Flex
      bg="nossas.blue"
      height="70px"
      paddingX={isMobile ? "30px" : "60px"}
      alignItems="center"
      justifyContent="space-between"
    >
      {isMobile ? (
        <>
          <Brand />
          <Button size="md">Doar</Button>
          <Menu
            pageWrapId="page-wrap"
            outerContainerId="page-container"
            isOpen={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            {children}
          </Menu>
        </>
      ) : (
        <>
          <Brand />
          <Stack flex="1" justifyContent="center" spacing="10" direction="row">
            {children}
          </Stack>
          <Button size="md">Doar</Button>
        </>
      )}
    </Flex>
  );
};

const Navbar = ({ t }) => {
  return (
    <NavbarComponent>
      <LinkStyled href="#">{t("about")}</LinkStyled>
      <LinkStyled href="#">{t("projects")}</LinkStyled>
      <LinkStyled href="#">{t("work")}</LinkStyled>
      <LinkStyled href="#">{t("actvist")}</LinkStyled>
      <LinkStyled href="#">{t("donate")}</LinkStyled>
    </NavbarComponent>
  );
};

export default withTranslation('common')(Navbar);
