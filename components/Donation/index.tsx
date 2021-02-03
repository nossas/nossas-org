import React, { useState } from "react";
// import { Elements } from '@stripe/react-stripe-js';
import {
  // Heading,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
} from "@chakra-ui/react";

import { withTranslation } from "../../i18n";
import DonationDrawer from "./DonationDrawer";
import Lock from "./Lock";
// import getStripe from '../../lib/getStripe';
// import ElementsForm from './ElementsForm';

interface DonationProps {
  t: any;
}

const Donation: React.FC<DonationProps> = ({ t }) => {
  const [index, setIndex] = useState(0);

  const handleNextTab = (i?: number) => {
    if (typeof i === "number") setIndex(i);
    else if (index === 0) setIndex(1);
    else if (index === 1) console.log("submit values");
  };
  const btnTexts = ["Continuar", "Doar"];

  return (
    <DonationDrawer onClick={handleNextTab} btnText={btnTexts[index]}>
      <Stack spacing={6} position="relative">
        <Text fontSize="md">{t("donate.description")}</Text>
        <Lock t={t} />
        <Tabs index={index} onChange={handleNextTab}>
          <TabList>
            <Tab fontSize="md" _selected={{ color: "nossas.blue" }}>
              {t("donate.tabs.yourdata")}
            </Tab>
            <Tab fontSize="md" isDisabled={index === 0}>
              {t("donate.tabs.payments")}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Seus dados</TabPanel>
            <TabPanel>Pagamento</TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </DonationDrawer>
  );
};

export default withTranslation("common")(Donation);
