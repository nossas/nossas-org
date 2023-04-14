import React from "react";
import styled from "@emotion/styled";
import {
  Stack,
  Drawer,
  Button,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "next-i18next";

import I18n from "../I18nButton";
import Donation from "../Donation";
import SocialMedia from "../SocialMedia";
import { NavLink, Bars } from "./Elements";
import { NossasLogoMenu } from "../IconsSVG/Logos";

const MobileStyled = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: 20px;
  }
`;

const NavMobile = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { t } = useTranslation("common");

  return (
    <MobileStyled>
      <Button ref={btnRef} onClick={onOpen} variant="link" minW="0" p="0">
        <Bars />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="left"
        size="full"
      >
        <DrawerOverlay>
          <DrawerContent backgroundColor="blue.main">
            <DrawerHeader
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                marginLeft="-15px"
              >
                <Button onClick={onClose} size="lg" padding="0">
                  <FaTimes width={13} height={11} />
                </Button>
                <NavLink href="/">
                  <NossasLogoMenu />
                </NavLink>
              </Stack>
              <Donation variant="outline">{t("navbar.donate")}</Donation>
            </DrawerHeader>

            <DrawerBody display="flex" flexDirection="column" pt="40px">
              <Stack direction="column">{children}</Stack>
              <Flex justifyContent="space-between" mt={16} alignItems="center">
                <I18n
                  extraProps={{ fontSize: "21px", paddingX: "0 !important" }}
                />
                <SocialMedia flat />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </MobileStyled>
  );
};

export default NavMobile;
