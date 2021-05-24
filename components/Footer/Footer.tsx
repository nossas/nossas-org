import React from "react";
import { Grid, UnorderedList, ListItem, Link, Image } from "@chakra-ui/react";
import { withTranslation } from "../../i18n";
import Donation from "../Donation";
import NewsletterForm from "../../components/NewsletterForm";
import SocialMedia from "../SocialMedia";

const Footer = ({ t }) => {
  return (
    <footer>
      <Grid
        templateRows={["repeat(3, auto)", "auto"]}
        templateColumns={["auto", "repeat(3, auto)"]}
        rowGap={["60px", 0]}
        columnGap={[0, "90px"]}
        px={[30, "10%"]}
        py={[20, 90]}
        alignItems="baseline"
      >
        <div>
          <Link href="/">
            <Image src="/static/media/logo.svg" alt="Logo do Nossas" />
          </Link>
          <UnorderedList styleType="none" ml={0} mt={[5, 20]}>
            <ListItem>
              <Link href="/#join-us">{t("footer.actvist")}</Link>
            </ListItem>
            <ListItem>
              <Link href="/about">{t("footer.about")}</Link>
            </ListItem>
            <ListItem>
              <Donation variant="link">{t("footer.donate")}</Donation>
            </ListItem>
            <ListItem>
              <Link href="/work-with-us">{t("footer.workwithus")}</Link>
            </ListItem>
          </UnorderedList>
        </div>
        <NewsletterForm />
        <SocialMedia />
      </Grid>
    </footer>
  );
};

export default withTranslation("common")(Footer);
