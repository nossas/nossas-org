import React from "react";
import { Link, Stack } from "@chakra-ui/react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "../../components/SocialMedia/IconsSVG";

interface SocialMediaProps {
  color?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ color }) => {
  return (
    <Stack alignItems="center" display="block" spacing={4}>
      <Stack direction="row" spacing={5}>
        <Link
          href="https://instagram.com/_nossas"
          target="_blank"
          title="Instagram"
          color={color}
        >
          <Instagram />
        </Link>

        <Link
          href="https://www.facebook.com/nossasorg/"
          target="_blank"
          title="Facebook"
          color={color}
        >
          <Facebook />
        </Link>

        <Link
          href="https://www.twitter.com/_nossas"
          target="_blank"
          title="Twitter"
          color={color}
        >
          <Twitter />
        </Link>

        <Link
          href="https://www.linkedin.com/company/nossas/"
          target="_blank"
          title="Linkedin"
          color={color}
        >
          <Linkedin />
        </Link>

        <Link
          href="https://www.youtube.com/nossas"
          target="_blank"
          title="Youtube"
          color={color}
        >
          <Youtube />
        </Link>
      </Stack>
    </Stack>
  );
};

SocialMedia.defaultProps = {
  color: "pink.main",
};

export default SocialMedia;
