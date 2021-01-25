import React from 'react';
import { Link, Stack } from '@chakra-ui/react';
import { withTranslation } from '../i18n';

const SocialMedia = ({ t }) => {

  return (
    <Stack direction='row' spacing={3}>
      <Link href='#'>
        <img
          src="/static/media/ig-icon.svg"
          alt={t("social.icons.instagram")}
        />
      </Link>
      <Link href='#'>
        <img
          src="/static/media/fb-icon.svg"
          alt={t("social.icons.facebook")}
        />
      </Link>
      <Link href='#'>
        <img
          src="/static/media/tt-icon.svg"
          alt={t("social.icons.twitter")}
        />
      </Link>
      <Link href='#'>
        <img
          src="/static/media/linkedin-icon.svg"
          alt={t("social.icons.linkedin")}
        />
      </Link>
    </Stack>
  )
}

export default withTranslation('common')(SocialMedia);