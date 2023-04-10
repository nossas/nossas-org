import React from "react";
import styled from "@emotion/styled";
import { Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Email,
} from "./IconsSVG";

interface SocialMediaProps {
  color?: string;
  flat?: boolean;
}

const MediaLink = styled(Link)`
  :focus {
    box-shadow: none;
  }
`;

const SocialMedia: React.FC<SocialMediaProps> = ({ color, flat }) => {
  const { t } = useTranslation("common");

  return (
    <Stack alignItems="center" display="block" spacing={3}>
      {!flat && (
        <Heading
          as="h5"
          color="blue.main"
          fontWeight="bold"
          size="md"
          maxW="190px"
        >
          {t("footer.social.title")}
        </Heading>
      )}
      <Stack direction="row" spacing={2}>
        <MediaLink
          href="https://instagram.com/_nossas"
          target="_blank"
          title="Instagram"
        >
          <Instagram color={color} />
        </MediaLink>
        <MediaLink
          href="https://www.facebook.com/nossasorg/"
          target="_blank"
          title="Facebook"
        >
          <Facebook color={color} />
        </MediaLink>
        <MediaLink
          href="https://www.twitter.com/_nossas"
          target="_blank"
          title="Twitter"
        >
          <Twitter color={color} />
        </MediaLink>
        <MediaLink
          href="https://www.linkedin.com/company/nossas/"
          target="_blank"
          title="Linkedin"
        >
          <Linkedin color={color} />
        </MediaLink>
        <MediaLink
          href="https://www.youtube.com/nossas"
          target="_blank"
          title="Youtube"
          color="orange.main"
        >
          <Youtube color={color} />
        </MediaLink>
      </Stack>
      {!flat && (
        <Stack direction="row" alignItems="center">
          <Email />
          <Link href="mailto:contato@nossas.org">
            <Text fontSize="20px" color="gray.soft" fontWeight="bold">
              contato@nossas.org
            </Text>
          </Link>
        </Stack>
      )}
    </Stack>
  );
};

SocialMedia.defaultProps = {
  color: "orange.main",
  flat: false,
};

export default SocialMedia;
