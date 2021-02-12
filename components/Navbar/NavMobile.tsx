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
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { withTranslation } from "../../i18n";
import I18n from "../I18nButton";
import Donation from "../Donation";
import SocialMedia from "../SocialMedia";
import Logo from "./Brand";
import { NavLink, Bars } from "./Elements";

const MobileStyled = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: 20px;
  }
`;

const NavMobile = ({ t, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
          <DrawerContent backgroundColor="nossas.blue">
            <DrawerHeader
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={6}>
                <Button onClick={onClose}>
                  <FaTimes />
                </Button>
                <NavLink href="/">
                  <Logo />
                </NavLink>
              </Stack>
              <Donation variant="outline">{t("donate.button")}</Donation>
            </DrawerHeader>

            <DrawerBody>
              <Stack direction="column">{children}</Stack>
            </DrawerBody>

            <DrawerFooter justifyContent="space-between">
              <I18n />
              <SocialMedia />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </MobileStyled>
  );
};

export default withTranslation("common")(NavMobile);
