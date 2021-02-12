import React, { useState } from "react";
import { Button, Flex, Link, Stack, Box } from "@chakra-ui/react";
import { fallDown as Menu } from "react-burger-menu";

import Brand from "./Brand";
import { withTranslation } from "../../i18n";
import Donation from "../Donation";
import I18nButton from "../I18nButton";
import SocialMedia from "../SocialMedia";

export const LinkStyled = ({ children, ...props }) => (
  <Link variant="nav" {...props}>
    {children}
  </Link>
);

const NavbarComponent = ({ children, t, isMobile }) => {
  const [open, setOpen] = useState(false);

  let flexStyles = { padding: "0 60px" };
  if (isMobile) {
    flexStyles = { padding: "0 30px" };
  }

  return (
    <Flex
      bg="nossas.blue"
      height="70px"
      alignItems="center"
      justifyContent="space-between"
      {...flexStyles}
    >
      {isMobile ? (
        <>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flex={1}
            ml="40px"
          >
            <Brand />
            <Donation variant="outline">{t("donate.button")}</Donation>
          </Flex>
          <Menu
            pageWrapId="page-wrap"
            outerContainerId="page-container"
            isOpen={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              ml="40px"
              mt="-22px"
            >
              <Brand />
              <Donation variant="outline">{t("donate.button")}</Donation>
            </Flex>
            <Flex className="bm-item-list-menu" direction="column">
              {children}
            </Flex>
            <Flex alignItems="center" mt="40px">
              <Box flex={1}>
                <I18nButton />
              </Box>
              <SocialMedia />
            </Flex>
          </Menu>
        </>
      ) : (
        <>
          <Brand />
          <Stack flex="1" justifyContent="center" spacing="10" direction="row">
            {children}
          </Stack>
          <Stack spacing={8} direction="row" alignContent="center">
            <I18nButton />
            <Donation variant="outline">{t("donate.button")}</Donation>
          </Stack>
        </>
      )}
    </Flex>
  );
};

const Navbar = ({ t, isMobile }) => {
  return (
    <NavbarComponent t={t} isMobile={isMobile}>
      <LinkStyled href="#">{t("footer.about")}</LinkStyled>
      <LinkStyled href="#">{t("footer.actvist")}</LinkStyled>
      <LinkStyled href="#">{t("footer.work")}</LinkStyled>
    </NavbarComponent>
  );
};

export default withTranslation("common")(Navbar);
