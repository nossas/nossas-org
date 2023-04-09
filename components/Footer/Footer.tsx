import React from "react";
import { Box, Grid, UnorderedList, ListItem, Link } from "@chakra-ui/react";
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
      <Grid
        templateRows={["repeat(3, auto)", "auto"]}
        templateColumns={["auto", "auto", "repeat(3, auto)"]}
        rowGap={["60px"]}
        columnGap={[0, "90px"]}
        alignItems="baseline"
      >
        <Box textTransform="uppercase">
          <NextLink href="/">
            <FooterLogo />
          </NextLink>

          <UnorderedList styleType="none" ml={0} mt={[5, 20]}>
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
        </Box>

        <NewsletterForm />

        <SocialMedia />
      </Grid>
    </Section>
  );
};

export default Footer;
