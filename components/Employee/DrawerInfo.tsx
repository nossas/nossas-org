import React from "react";
import * as react from "@chakra-ui/react";

interface Employee {
  avatar: string;
  name: string;
  role: string;
  about?: string;
  team: string;
  networks?: Record<string, string>;
}

interface DrawerInfoProps {
  isOpen: boolean;
  handleClose: () => void;
  data: Employee;
}

export const DrawerInfo = ({ isOpen, handleClose, data }: DrawerInfoProps) => {
  return (
    <react.Drawer
      isOpen={isOpen}
      placement="right"
      size="md"
      onClose={handleClose}
    >
      <react.DrawerOverlay>
        <react.DrawerContent>
          <react.DrawerHeader
            color="pink.main"
            textTransform="uppercase"
            fontFamily="Bebas Neue"
            fontSize="md"
          >
            {data.team}
          </react.DrawerHeader>
          <react.DrawerCloseButton />

          <react.DrawerBody>
            <react.Stack direction="row" spacing="30px" mb="25px">
              <react.Image
                src={data.avatar}
                boxSize="140px"
                objectFit="cover"
              />

              <react.Stack direction="column" spacing="0">
                <react.Heading as="h2" fontWeight="bold" size="md">
                  {data.name}
                </react.Heading>

                <react.Text size="sm">{data.role}</react.Text>
              </react.Stack>
            </react.Stack>

            <react.Text size="sm">{data.about}</react.Text>
          </react.DrawerBody>
        </react.DrawerContent>
      </react.DrawerOverlay>
    </react.Drawer>
  );
};
