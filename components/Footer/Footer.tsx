import React from "react";
import {
  Text,
  Heading,
  Flex,
  Box,
  Grid,
  UnorderedList,
  ListItem,
  Link,
  Image,
} from "@chakra-ui/react";
// import { withTranslation } from "../../i18n";
import { useTranslation } from "next-i18next";
import Donation from "../Donation";
// import Newsletter from "../Newsletter";
import NewsletterForm from "../../components/NewsletterForm";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer>
      <Grid
        templateRows={["repeat(3, auto)", "auto"]}
        templateColumns={["auto", "repeat(3, auto)"]}
        rowGap={["60px", 0]}
        columnGap={[0, "90px"]}
        px={[30, 90]}
        py={[20, 90]}
        alignItems="baseline"
      >
        <div>
          <Link href="/">
            <Image src="/static/media/logo.svg" alt="Logo do Nossas" />
          </Link>
          <UnorderedList styleType="none" ml={0} mt={[5, 20]}>
            <ListItem>
              <Link href="/about">{t("footer.about")}</Link>
            </ListItem>
            <ListItem>
              <Link href="/#join-us">{t("footer.actvist")}</Link>
            </ListItem>
            <ListItem>
              <Link href="/mobilizations">{t("footer.work")}</Link>
            </ListItem>
            <ListItem>
              <Donation variant="link">{t("footer.donate")}</Donation>
            </ListItem>
            <ListItem>
              <Link href="/work">{t("footer.workwithus")}</Link>
            </ListItem>
          </UnorderedList>
        </div>
        <NewsletterForm />
        <div>
          <Heading
            as="h5"
            color="blue.main"
            mb={5}
            fontWeight="bold"
            size="md"
            maxW="190px"
          >
            {t("social.title")}
          </Heading>
          <SocialMedia />
        </div>
      </Grid>
    </footer>
  );
};

export default Footer;
