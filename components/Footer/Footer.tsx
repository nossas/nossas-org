import React from "react";
import { Grid, UnorderedList, ListItem, Link, Image } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import Donation from "../Donation";
import NewsletterForm from "../../components/NewsletterForm";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer>
      <Grid
        templateRows={["repeat(3, auto)", "auto"]}
        templateColumns={["auto", "auto", "repeat(3, auto)"]}
        rowGap={["60px", 0]}
        columnGap={[0, "90px"]}
        paddingX={["30px", "30px", "30px", "30px", "10%"]}
        py={[20, 90]}
        alignItems="baseline"
      >
        <div>
          <Link href="/">
            <Image src="/static/media/logo.svg" alt="Logo do Nossas" />
          </Link>
          <UnorderedList styleType="none" ml={0} mt={[5, 20]}>
            <ListItem>
              <Link href="/#join-us">{t("footer.navigation.join-us")}</Link>
            </ListItem>
            <ListItem>
              <Link href="/about">{t("footer.navigation.about")}</Link>
            </ListItem>
            <ListItem>
              <Donation variant="link">
                {t("footer.navigation.donate")}
              </Donation>
            </ListItem>
            <ListItem>
              <Link href="/work-with-us">
                {t("footer.navigation.work-with-us")}
              </Link>
            </ListItem>
          </UnorderedList>
        </div>
        <NewsletterForm />
        <SocialMedia />
      </Grid>
    </footer>
  );
};

export default Footer;
