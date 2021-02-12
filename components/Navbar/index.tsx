import React from "react";

// export { default } from "./Navbar";
import { withTranslation } from "../../i18n";
import Donation from "../Donation";
import I18n from "../I18nButton";
import Logo from "./Brand";
import { Nav, NavLink, Bars, NavSide, NavMenu } from "./Elements";

type Props = {
  t: any;
};

const Navbar: React.FC<Props> = ({ t }) => {
  return (
    <>
      <Nav>
        <NavSide>
          <Bars />
          <NavLink href="/">
            <Logo />
          </NavLink>
        </NavSide>
        <NavMenu>
          <NavLink href="/">{t("footer.about")}</NavLink>
          <NavLink href="/activist">{t("footer.actvist")}</NavLink>
          <NavLink href="/work">{t("footer.work")}</NavLink>
        </NavMenu>
        <NavSide spacing={[6, 8]}>
          <I18n />
          <Donation variant="outline">{t("donate.button")}</Donation>
        </NavSide>
      </Nav>
    </>
  );
};

export default withTranslation("common")(Navbar);

export { default as Brand } from "./Brand";
