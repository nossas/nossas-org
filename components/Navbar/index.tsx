import React from "react";
import { Box } from "@chakra-ui/react";
// import { withTranslation } from "../../i18n";
import { useTranslation } from "next-i18next";
import Donation from "../Donation";
import I18n from "../I18nButton";
import Logo from "./Brand";
import { Nav, NavLink, NavSide, NavMenu } from "./Elements";
import NavMobile from "./NavMobile";

const MenuItems: React.FC<{ variant?: string; t: any }> = ({ t, variant }) => (
  <>
    <NavLink href="/about" variant={variant}>
      {t("footer.about")}
    </NavLink>
    <NavLink href="/#join-us" variant={variant}>
      {t("footer.actvist")}
    </NavLink>
    <NavLink href="/mobilizations" variant={variant}>
      {t("footer.work")}
    </NavLink>
  </>
);

const Navbar: React.FC = () => {
  const { t } = useTranslation("common");

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
        <NavMenu>
          <MenuItems t={t} />
        </NavMenu>
        <NavSide>
          <Box display={["none", null, "block"]}>
            <I18n />
          </Box>
          <Donation variant="outline">{t("donate.button")}</Donation>
        </NavSide>
      </Nav>
    </>
  );
};

export default Navbar;

export { default as Brand } from "./Brand";
