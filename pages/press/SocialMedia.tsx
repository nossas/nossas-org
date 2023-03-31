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
        >
          <Instagram color={color} />
        </Link>

        <Link
          href="https://www.facebook.com/nossasorg/"
          target="_blank"
          title="Facebook"
        >
          <Facebook color={color} />
        </Link>

        <Link
          href="https://www.twitter.com/_nossas"
          target="_blank"
          title="Twitter"
        >
          <Twitter color={color} />
        </Link>

        <Link
          href="https://www.linkedin.com/company/nossas/"
          target="_blank"
          title="Linkedin"
        >
          <Linkedin color={color} />
        </Link>

        <Link
          href="https://www.youtube.com/nossas"
          target="_blank"
          title="Youtube"
        >
          <Youtube color={color} />
        </Link>
      </Stack>
    </Stack>
  );
};

SocialMedia.defaultProps = {
  color: "orange.main",
};

export default SocialMedia;
