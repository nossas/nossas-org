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
} from "@chakra-ui/react";
import { withTranslation } from "../../i18n";
import Donation from "../Donation";
import Newsletter from "../Newsletter";
import SocialMedia from "../SocialMedia";

const Footer = ({ t }) => {
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
          <img src="/static/media/logo.svg" alt="Logo do Nossas" />
          <UnorderedList styleType="none" ml={0} mt={[5, 20]}>
            <ListItem>
              <Link href="/about">{t("footer.about")}</Link>
            </ListItem>
            <ListItem>
              <Link href="/incubations#projects">{t("footer.projects")}</Link>
            </ListItem>
            <ListItem>
              <Link href="/#we-are-doing">{t("footer.work")}</Link>
            </ListItem>
            <ListItem>
              <Link href="/mobilizations">{t("footer.actvist")}</Link>
            </ListItem>
            <ListItem>
              <Donation variant="link">{t("footer.donate")}</Donation>
            </ListItem>
          </UnorderedList>
        </div>
        <Newsletter />
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

export default withTranslation("common")(Footer);
