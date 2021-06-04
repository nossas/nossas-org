import React from "react";
import {
  Grid,
  UnorderedList,
  ListItem,
  Link as LinkStyled,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import Donation from "../Donation";
import NewsletterForm from "../../components/NewsletterForm";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <footer>
      <Grid
        templateRows={["repeat(3, auto)", "auto"]}
        templateColumns={["auto", "auto", "repeat(3, auto)"]}
        rowGap={["60px", 0]}
        columnGap={[0, "90px"]}
        px={[30, "6%"]}
        py={[20, 90]}
        alignItems="baseline"
      >
        <div>
          <Link href="/">
            <Image src="/static/media/logo.svg" alt="Logo do Nossas" />
          </Link>
          <UnorderedList styleType="none" ml={0} mt={[5, 20]}>
            <ListItem>
              <Link href="/#join-us">
                <LinkStyled>{t("footer.navigation.join-us")}</LinkStyled>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about">
                <LinkStyled>{t("footer.navigation.about")}</LinkStyled>
              </Link>
            </ListItem>
            <ListItem>
              <Donation variant="link">
                {t("footer.navigation.donate")}
              </Donation>
            </ListItem>
            {i18n.language !== "en" && (
              <ListItem>
                <Link href="/work-with-us">
                  <LinkStyled>{t("footer.navigation.work-with-us")}</LinkStyled>
                </Link>
              </ListItem>
            )}
          </UnorderedList>
        </div>
        <NewsletterForm />
        <SocialMedia />
      </Grid>
    </footer>
  );
};

export default Footer;
