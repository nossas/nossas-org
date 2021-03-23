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
  :focus {
    box-shadow: none;
  }

  svg {
    path {
      fill: ${(props) => props.color};
    }
  }
`;

const SocialMedia: React.FC<SocialMediaProps> = ({ t, color }) => {
  return (
    <Stack direction="row" spacing={3}>
      <MediaLink
        href="https://instagram.com/_nossas"
        target="_blank"
        title={t("social.icons.instagram")}
        color={color}
      >
        <Instagram />
      </MediaLink>
      <MediaLink
        href="https://www.facebook.com/nossasorg/"
        target="_blank"
        title={t("social.icons.facebook")}
        color={color}
      >
        <Facebook />
      </MediaLink>
      <MediaLink
        href="https://www.twitter.com/_nossas"
        target="_blank"
        title={t("social.icons.twitter")}
        color={color}
      >
        <Twitter />
      </MediaLink>
      <MediaLink
        href="https://www.linkedin.com/company/nossas/"
        target="_blank"
        title={t("social.icons.linkedin")}
        color={color}
      >
        <Linkedin />
      </MediaLink>
    </Stack>
  );
};

SocialMedia.defaultProps = {
  color: "pink.main",
};

export default withTranslation("common")(SocialMedia);
