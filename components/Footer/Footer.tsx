import React from "react";
import { Box, Stack, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";

import Section from "../Page/Section";
import Donation from "../Donation";
import NewsletterForm from "../NewsletterForm";
import SocialMedia from "../SocialMedia";
import { FooterLogo } from "../IconsSVG/Logos";

const Footer = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Section as="footer">
      <Box>
        <NextLink href="/">
          <FooterLogo />
        </NextLink>
      </Box>
      <Stack
        direction={["column", "column", "row"]}
        alignItems="baseline"
        justifyContent="space-between"
        spacing={[50, 100]}
      >
        <UnorderedList
          styleType="none"
          ml={0}
          mt={[5, 20]}
          textTransform="uppercase"
        >
          <ListItem>
            <NextLink href="/about">
              <Link>{t("footer.navigation.about")}</Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/#join-us">
              <Link>{t("footer.navigation.join-us")}</Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/mobilizations">
              <Link>{t("footer.navigation.mobilizations")}</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <Donation variant="link" colorScheme="blue">
              {t("footer.navigation.donate")}
            </Donation>
          </ListItem>

          {i18n.language !== "en" && (
            <ListItem>
              <NextLink href="/work-with-us">
                <Link>{t("footer.navigation.work-with-us")}</Link>
              </NextLink>
            </ListItem>
          )}
        </UnorderedList>

        <NewsletterForm />

        <SocialMedia />
      </Stack>
    </Section>
  );
};

export default Footer;
