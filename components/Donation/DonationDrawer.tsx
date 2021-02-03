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
import { Form } from "formik";

import { withTranslation } from "../../i18n";
// import getStripe from '../../lib/getStripe';
// import ElementsForm from './ElementsForm';

interface DonationProps {
  t: any;
  onClick: any;
  btnText: string;
  isDisabled: boolean;
  onSubmit: any;
}

const Donation: React.FC<DonationProps> = ({
  t,
  children,
  onSubmit,
  btnText,
  isDisabled,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Form>
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
              <Button
                onClick={onSubmit}
                flex={1}
                size="md"
                isDisabled={isDisabled}
                color={isDisabled ? "nossa.darkgray" : "white"}
                bgColor={isDisabled ? "nossas.gray" : "nossas.blue"}
              >
                {btnText}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Form>
  );
};

export default withTranslation("common")(Donation);
