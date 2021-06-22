import React from "react";
import {
  Box,
  Grid,
  UnorderedList,
  ListItem,
  Link,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";

import Section from "../Page/Section";
import Donation from "../Donation";
import NewsletterForm from "../NewsletterForm";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Section as="footer">
      <Grid
        templateRows={["repeat(3, auto)", "auto"]}
        templateColumns={["auto", "auto", "repeat(3, auto)"]}
        rowGap={["60px"]}
        columnGap={[0, "90px"]}
        py={[20, 90]}
        alignItems="baseline"
      >
        <Box>
          <NextLink href="/">
            <Image src="/static/media/logo.svg" alt="Logo do Nossas" />
          </NextLink>

          <UnorderedList styleType="none" ml={0} mt={[5, 20]}>
            <ListItem>
              <NextLink href="/#join-us">
                <Link>{t("footer.navigation.join-us")}</Link>
              </NextLink>
            </ListItem>

            <ListItem>
              <NextLink href="/about">
                <Link>{t("footer.navigation.about")}</Link>
              </NextLink>
            </ListItem>

            <ListItem>
              <Donation variant="link">
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
