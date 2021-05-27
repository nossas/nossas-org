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
import { useTranslation } from "next-i18next";

import Donation from "../Donation";
import I18n from "../I18nButton";
import { Nav, NavLink, NavSide, NavMenu } from "./Elements";
import { MenuItem as MenuItemMobile, MenuItemGroup } from "./MenuItemsMobile";
import NavMobile from "./NavMobile";
import { NossasLogo } from "../IconsSVG/Navbar";

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

const MenuItems: React.FC<{ variant: string }> = ({ variant }) => {
  const { t } = useTranslation("common");

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
              {t("navbar.navigation.see-more")}
            </MenuButton>
            <MenuList className="menuList">
              <MenuItem as={Link} href="/about">
                {t("navbar.navigation.about")}
              </MenuItem>
              <MenuItem as={Link} href="/work-with-us">
                {t("navbar.navigation.work-with-us")}
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
              {t("navbar.navigation.participate")}
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="/mobilizations">
                {t("navbar.navigation.campaigns")}
              </MenuItem>
              <MenuItem as={Link} href="/materials">
                {t("navbar.navigation.materials")}
              </MenuItem>
              <MenuItem as={Link} href="/trainings">
                {t("navbar.navigation.trainings")}
              </MenuItem>
              <MenuItem as={Link} href="/incubations">
                {t("navbar.navigation.incubations")}
              </MenuItem>
              <MenuItem as={Link} href="/technologies">
                {t("navbar.navigation.technologies")}
              </MenuItem>
            </MenuList>
          </MenuStyled>
        )}
      </Menu>
    </>
  );
};

const Navbar: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Nav>
        <NavSide>
          <NavMobile>
            <MenuItemGroup>
              <MenuItemMobile
                name={t("navbar.navigation.see-more")}
                submenus={[
                  { label: t("navbar.navigation.about"), href: "/about" },
                  {
                    label: t("navbar.navigation.work-with-us"),
                    href: "/work-with-us",
                  },
                ]}
              />
              <MenuItemMobile
                name={t("navbar.navigation.participate")}
                submenus={[
                  {
                    label: t("navbar.navigation.campaigns"),
                    href: "/mobilizations",
                  },
                  {
                    label: t("navbar.navigation.materials"),
                    href: "/materials",
                  },
                  {
                    label: t("navbar.navigation.trainings"),
                    href: "/trainings",
                  },
                  {
                    label: t("navbar.navigation.incubations"),
                    href: "/incubations",
                  },
                  {
                    label: t("navbar.navigation.technologies"),
                    href: "/technologies",
                  },
                ]}
              />
            </MenuItemGroup>
          </NavMobile>
          <NavLink href="/">
            <NossasLogo />
          </NavLink>
        </NavSide>
        <NavSide>
          <NavMenu>
            <MenuItems variant="desktop" />
          </NavMenu>
          <Box display={["none", null, "block"]}>
            <I18n />
          </Box>
          <Donation variant="outline">{t("navbar.donate")}</Donation>
        </NavSide>
      </Nav>
    </>
  );
};

export default Navbar;
