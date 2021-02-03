import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";

import { withTranslation } from "../../i18n";
// import getStripe from '../../lib/getStripe';
// import ElementsForm from './ElementsForm';

interface DonationProps {
  t: any;
  onClick: any;
  btnText: string;
}

const Donation: React.FC<DonationProps> = ({
  t,
  children,
  onClick,
  btnText,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} size="md" onClick={onOpen}>
        {t("donate.button")}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Heading
                as="h2"
                color="nossas.green"
                size="2xl"
                fontWeight="normal"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("donate.title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Heading>
            </DrawerHeader>
            <DrawerBody>{children}</DrawerBody>
            <DrawerFooter>
              <Button size="md" onClick={onClick}>
                {btnText}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default withTranslation("common")(Donation);
