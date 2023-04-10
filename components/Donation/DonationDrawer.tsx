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
import { DonationLogo } from "../IconsSVG/Logos";

// import { withTranslation } from "../../i18n";

interface DonationProps {
  btnText: string;
  isDisabled: boolean;
  onSubmit?: any;
  btnChildren: any;
  disclosureOpts: any;
  variant?: any;
  colorScheme?: any;
}

const Donation: React.FC<DonationProps> = ({
  children,
  onSubmit,
  btnText,
  isDisabled,
  btnChildren,
  disclosureOpts,
  variant = "solid",
  colorScheme = "orange",
  ...props
}) => {
  const { isOpen, onOpen, onClose } = disclosureOpts;
  const btnRef = React.useRef();
  // const t = (i18nKey: string, _?: any) => i18nKey;
  return (
    <Form>
      <Button
        size="sm"
        variant={variant}
        colorScheme={colorScheme}
        onClick={onOpen}
        ref={btnRef}
      >
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
          <DrawerContent padding={["10px 20px 0", "50px 40px 0"]}>
            <DrawerCloseButton
              _focus={{ border: "none" }}
              top={["20px", "60px"]}
              right={["20px", "45px"]}
            />
            <DrawerHeader>
              <DonationLogo />
            </DrawerHeader>
            <DrawerBody>
              {children}
              <Button
                isFullWidth
                onClick={onSubmit}
                colorScheme="blue"
                isDisabled={isDisabled}
              >
                {btnText}
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Form>
  );
};

export default Donation;
// export default withTranslation("common")(Donation);
