import React, { useState } from "react";
import { Button, Flex, Link, Stack, Box } from "@chakra-ui/react";
import { fallDown as Menu } from "react-burger-menu";
import { isMobile } from "react-device-detect";
import Brand from "./Brand";
import { withTranslation } from "../../i18n";
import I18nButton from '../I18nButton';

export const LinkStyled = ({ children, ...props }) => (
  <Link color="white" {...props}>
    {children}
  </Link>
);

const NavbarComponent = ({ children, t }) => {
  const [open, setOpen] = useState(false);

  let flexStyles = { padding: '0 60px' };
  if (isMobile) {
    flexStyles = { padding: '0 30px' };
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
          <Flex alignItems='center' justifyContent='space-between'>
            <Brand />
            <Button size="md">Doar</Button>
          </Flex>
          <Menu
            pageWrapId="page-wrap"
            outerContainerId="page-container"
            isOpen={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <Flex alignItems='center' justifyContent='space-between' ml='40px' mt='-22px'>
              <Brand />
              <Button size="md">Doar</Button>
            </Flex>
            <Flex className='bm-item-list-menu' direction='column'>
              {children}
            </Flex>
            <Flex alignItems='center'>
              <Box flex={1}>
                <I18nButton />
              </Box>
              <Stack direction='row' spacing={3}>
                <Link href='#'>
                  <img
                    src="/static/media/ig-icon.svg"
                    alt={t("social.icons.instagram")}
                  />
                </Link>
                <Link href='#'>
                  <img
                    src="/static/media/fb-icon.svg"
                    alt={t("social.icons.facebook")}
                  />
                </Link>
                <Link href='#'>
                  <img
                    src="/static/media/tt-icon.svg"
                    alt={t("social.icons.twitter")}
                  />
                </Link>
                <Link href='#'>
                  <img
                    src="/static/media/linkedin-icon.svg"
                    alt={t("social.icons.linkedin")}
                  />
                </Link>
              </Stack>
            </Flex>
          </Menu>
        </>
      ) : (
        <>
          <Brand />
          <Stack flex="1" justifyContent="center" spacing="10" direction="row">
            {children}
          </Stack>
          <Stack spacing={8} direction='row' alignContent='center'>
            <I18nButton />
            <Button size="md">Doar</Button>
          </Stack>
        </>
      )}
    </Flex>
  );
};

const Navbar = ({ t }) => {
  return (
    <NavbarComponent t={t}>
      <LinkStyled href="#">{t("about")}</LinkStyled>
      <LinkStyled href="#">{t("projects")}</LinkStyled>
      <LinkStyled href="#">{t("work")}</LinkStyled>
      <LinkStyled href="#">{t("actvist")}</LinkStyled>
      <LinkStyled href="#">{t("donate")}</LinkStyled>
    </NavbarComponent>
  );
};

export default withTranslation('common')(Navbar);
