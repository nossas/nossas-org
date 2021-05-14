import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Image,
} from "@chakra-ui/react";
import { Form } from "formik";

import { withTranslation } from "../../i18n";

interface DonationProps {
  t: any;
  onClick: any;
  btnText: string;
  isDisabled: boolean;
  onSubmit?: any;
  btnChildren: any;
  disclosureOpts: any;
}

const Donation: React.FC<DonationProps> = ({
  t,
  children,
  onSubmit,
  btnText,
  isDisabled,
  btnChildren,
  disclosureOpts,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = disclosureOpts;
  const btnRef = React.useRef();

  return (
    <Form>
      <Button size="sm" {...props} onClick={onOpen} ref={btnRef}>
        {btnChildren}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay>
          <DrawerContent padding="50px 40px 0">
            <DrawerCloseButton
              _focus={{ border: "none" }}
              top="60px"
              right="45px"
            />
            <DrawerHeader>
              <Image
                src="/static/media/brand.png"
                alt="NOSSAS"
                w="69px"
                h="32px"
              />
            </DrawerHeader>
            <DrawerBody>
              {children}
              <Button isFullWidth onClick={onSubmit} isDisabled={isDisabled}>
                {btnText}
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Form>
  );
};

export default withTranslation("common")(Donation);
