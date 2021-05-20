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
import ButtonIcon from "./ButtonIcon";
import styled from "@emotion/styled";

import { withTranslation } from "../../i18n";
import Donation from "../Donation";
import I18n from "../I18nButton";
import Logo from "./Brand";
import { Nav, NavLink, NavSide, NavMenu } from "./Elements";
import NavMobile from "./NavMobile";

const MenuStyled = styled.div<{ variant: string; isOpen: boolean }>`
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.variant === "mobile"
      ? `
    flex-direction: column;

    .chakra-menu__menu-button {
      font-size: 40px;
      text-align: left;
      padding: 20px 0;

      .chakra-button__icon {
        transform: scale(0.5);
      }
    }

    .chakra-menu__menu-button + div {
      position: ${!props.isOpen ? "absolute" : "relative"}!important;
      transform: none !important;
    }
  `
      : null}
`;

const MenuItems: React.FC<{ t: any; variant: string }> = ({ t, variant }) => {
  const openIcon =
    variant !== "mobile" ? (
      <FaChevronDown transform="scale(0.7)" />
    ) : (
      <ButtonIcon />
    );
  const closeIcon =
    variant !== "mobile" ? (
      <FaChevronUp transform="scale(0.7)" />
    ) : (
      <ButtonIcon isOpen />
    );
  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <MenuStyled variant={variant} isOpen={isOpen}>
            <MenuButton
              as={Button}
              variant="menu"
              rightIcon={isOpen ? closeIcon : openIcon}
            >
              Conheça
            </MenuButton>
            <MenuList className="menuList">
              <MenuItem as={Link} href="/about">
                Sobre o Nossas
              </MenuItem>
              <MenuItem as={Link} href="/work-with-us">
                Trabalhe conosco
              </MenuItem>
            </MenuList>
          </MenuStyled>
        )}
      </Menu>
      <Menu>
        {({ isOpen }) => (
          <MenuStyled variant={variant} isOpen={isOpen}>
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
          </MenuStyled>
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
          <NavMobile>
            <MenuItems t={t} variant="mobile" />
          </NavMobile>
          <NavLink href="/">
            <Logo />
          </NavLink>
        </NavSide>
        <NavSide>
          <NavMenu>
            <MenuItems t={t} variant="desktop" />
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
