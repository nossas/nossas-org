import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";

import { I18nInitialProps, withTranslation } from "../i18n";
import { Body } from "../components/Page";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Incubations: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body isMobile={ua.isMobile}>{/* Content */}</Body>
);

Incubations.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Incubations)
);
