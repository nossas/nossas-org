import React from "react";
import styled from "@emotion/styled";
import { Heading, Img, Link, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("common");

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
          {t("footer.social.title")}
        </Heading>
      )}

      <Stack direction="row" spacing={5}>
        <MediaLink
          href="https://instagram.com/_nossas"
          target="_blank"
          title="Instagram"
          color={color}
        >
          <Instagram />
        </MediaLink>
        <MediaLink
          href="https://www.facebook.com/nossasorg/"
          target="_blank"
          title="Facebook"
          color={color}
        >
          <Facebook />
        </MediaLink>
        <MediaLink
          href="https://www.twitter.com/_nossas"
          target="_blank"
          title="Twitter"
          color={color}
        >
          <Twitter />
        </MediaLink>
        <MediaLink
          href="https://www.linkedin.com/company/nossas/"
          target="_blank"
          title="Linkedin"
          color={color}
        >
          <Linkedin />
        </MediaLink>
        <MediaLink
          href="https://www.youtube.com/nossas"
          target="_blank"
          title="Youtube"
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
