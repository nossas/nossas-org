import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
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
      <Button size="md" {...props} onClick={onOpen} ref={btnRef}>
        {btnChildren}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image
                src="/static/media/brand.png"
                alt="NOSSAS"
                w="69px"
                h="32px"
              />
            </DrawerHeader>
            <DrawerBody>{children}</DrawerBody>
            <DrawerFooter>
              <Button flex={1} onClick={onSubmit} isDisabled={isDisabled}>
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
