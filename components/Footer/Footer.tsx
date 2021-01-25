import React from "react";
import Link from "next/link";
import {
  Text,
  Heading,
  Flex,
  Box,
  Grid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { withTranslation } from "../../i18n";
import Newsletter from '../Newsletter';
import SocialMedia from '../SocialMedia';

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
              <Text
                fontSize="xl"
                color="nossas.blue"
                fontWeight="bold"
                lineHeight="tall"
              >
                <Link href="">{t("about")}</Link>
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontSize="xl"
                color="nossas.blue"
                fontWeight="bold"
                lineHeight="tall"
              >
                <Link href="">{t("projects")}</Link>
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontSize="xl"
                color="nossas.blue"
                fontWeight="bold"
                lineHeight="tall"
              >
                <Link href="">{t("work")}</Link>
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontSize="xl"
                color="nossas.blue"
                fontWeight="bold"
                lineHeight="tall"
              >
                <Link href="">{t("actvist")}</Link>
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontSize="xl"
                color="nossas.blue"
                fontWeight="bold"
                lineHeight="tall"
              >
                <Link href="">{t("donate")}</Link>
              </Text>
            </ListItem>
          </UnorderedList>
        </div>
        <Newsletter />
        <div>
          <Heading as="h5" size="xl" color="nossas.blue" mb={5}>
            {t("social.title")}
          </Heading>
          <SocialMedia />
        </div>
      </Grid>
    </footer>
  );
};

export default withTranslation("common")(Footer);
