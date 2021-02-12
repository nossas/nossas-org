import React from "react";
import styled from "@emotion/styled";
import { Link, Stack } from "@chakra-ui/react";
import { withTranslation } from "../../i18n";
import { Facebook, Instagram, Twitter, Linkedin } from "./IconsSVG";

interface SocialMediaProps {
  t: any;
  color: string;
}

const MediaLink = styled(Link)`
  svg {
    path {
      fill: ${(props) => props.color};
    }
  }
`;

const SocialMedia: React.FC<SocialMediaProps> = ({ t, color }) => {
  return (
    <Stack direction="row" spacing={3}>
      <MediaLink href="#" title={t("social.icons.instagram")} color={color}>
        <Instagram />
      </MediaLink>
      <MediaLink href="#" title={t("social.icons.facebook")} color={color}>
        <Facebook />
      </MediaLink>
      <MediaLink href="#" title={t("social.icons.twitter")} color={color}>
        <Twitter />
      </MediaLink>
      <MediaLink href="#" title={t("social.icons.linkedin")} color={color}>
        <Linkedin />
      </MediaLink>
    </Stack>
  );
};

SocialMedia.defaultProps = {
  color: "nossas.pink",
};

export default withTranslation("common")(SocialMedia);
