import React from "react";
import styled from "@emotion/styled";
import { Heading, Img, Link, Stack } from "@chakra-ui/react";
// import { withTranslation } from "../../i18n";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "./IconsSVG";

interface SocialMediaProps {
  color?: string;
  flat?: boolean;
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

const SocialMedia: React.FC<SocialMediaProps> = ({ color, flat }) => {
  const t = (keyI18n: string) => keyI18n;

  return (
    <Stack alignItems="center" display="block" spacing={4}>
      {!flat && (
        <Heading
          as="h5"
          color="blue.main"
          mb={5}
          fontWeight="bold"
          size="md"
          maxW="190px"
        >
          {t("social.title")}
        </Heading>
      )}

      <Stack direction="row" spacing={5}>
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
        <MediaLink
          href="https://www.youtube.com/nossas"
          target="_blank"
          title={t("social.icons.youtube")}
          color={color}
        >
          <Youtube />
        </MediaLink>
      </Stack>
      {!flat && (
        <Img
          maxWidth="200px"
          src="static/media/footer/email.png"
          alt="Email do Nossas"
        />
      )}
    </Stack>
  );
};

SocialMedia.defaultProps = {
  color: "pink.main",
  flat: false,
};

export default SocialMedia;
// export default withTranslation("common")(SocialMedia);
