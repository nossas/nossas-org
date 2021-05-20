import React from "react";
import {
  Box,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { withTranslation } from "../../i18n";
import Donation from "../Donation";
import I18n from "../I18nButton";
import Logo from "./Brand";
import { Nav, NavLink, NavSide, NavMenu } from "./Elements";
import NavMobile from "./NavMobile";

const MenuItems: React.FC<{ variant?: string; t: any }> = ({ t, variant }) => {
  const openIcon = <FaChevronDown transform="scale(0.7)" />;
  const closeIcon = <FaChevronUp transform="scale(0.7)" />;

  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              variant="menu"
              rightIcon={isOpen ? closeIcon : openIcon}
            >
              Conheça
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="/about">
                Sobre o Nossas
              </MenuItem>
              <MenuItem as={Link} href="/work-with-us">
                Trabalhe conosco
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              variant="menu"
              rightIcon={isOpen ? closeIcon : openIcon}
            >
              Participe
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="/mobilizations">
                Campanhas
              </MenuItem>
              <MenuItem as={Link} href="/materials">
                Materiais
              </MenuItem>
              <MenuItem as={Link} href="/trainings">
                Treinamentos
              </MenuItem>
              <MenuItem as={Link} href="/incubations">
                Incubações
              </MenuItem>
              <MenuItem as={Link} href="/technologies">
                Tecnologias
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
};

const Navbar: React.FC<{ t: any }> = ({ t }) => {
  return (
    <>
      <Nav>
        <NavSide>
          {/* <NavMobile>
            <MenuItems t={t} variant="mobile" />
          </NavMobile> */}
          <NavLink href="/">
            <Logo />
          </NavLink>
        </NavSide>
        <NavSide>
          <NavMenu>
            <MenuItems t={t} />
          </NavMenu>
          <Box display={["none", null, "block"]}>
            <I18n />
          </Box>
          <Donation variant="outline">{t("donate.button")}</Donation>
        </NavSide>
      </Nav>
    </>
  );
};

export default withTranslation("common")(Navbar);

export { default as Brand } from "./Brand";
