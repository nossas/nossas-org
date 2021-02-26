import React from "react";

import { withTranslation } from "../../i18n";
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
    <NavLink href="/activist" variant={variant}>
      {t("footer.actvist")}
    </NavLink>
    <NavLink href="/work" variant={variant}>
      {t("footer.work")}
    </NavLink>
  </>
);

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
        <NavMenu>
          <MenuItems t={t} />
        </NavMenu>
        <NavSide>
          <I18n />
          <Donation variant="outline">{t("donate.button")}</Donation>
        </NavSide>
      </Nav>
    </>
  );
};

export default withTranslation("common")(Navbar);

export { default as Brand } from "./Brand";
