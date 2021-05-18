import React, { useState } from "react";
import {
  Box,
  Stack,
  Image,
  Heading,
  Text,
  SimpleGrid,
  useDisclosure,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import IconEyeSlash from "./IconEyeSlash";

export type Employee = {
  avatar: string;
  name: string;
  role: string;
  about?: string;
  team: string;
  networks?: Record<string, string>;
};

const EmployeeDetails: React.FC<{
  handleOpen: any;
  handleClose: any;
  data: Employee;
}> = ({ handleOpen, handleClose, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Text
        color="white"
        size="sm"
        cursor="pointer"
        ref={btnRef}
        onClick={() => {
          onOpen();
          handleOpen();
        }}
      >
        Saiba +
      </Text>
      <Drawer
        closeOnOverlayClick={false}
        isOpen={isOpen}
        placement="right"
        size="lg"
        onClose={() => {
          onClose();
          handleClose();
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent padding="55px 70px 0 45px">
            <DrawerHeader
              color="pink.main"
              textTransform="uppercase"
              fontSize="lg"
              fontFamily="Bebas Neue"
            >
              {data.team}
            </DrawerHeader>
            <DrawerCloseButton
              _focus={{ border: "none" }}
              top="70px"
              right="70px"
            />
            <DrawerBody alignItems="center">
              <Stack
                direction={["column", null, null, null, "row"]}
                spacing="30px"
                mb="25px"
              >
                <Image src={data.avatar} boxSize="140px" objectFit="cover" />
                <Stack direction="column" spacing="0">
                  <Heading as="h2" fontWeight="bold" size="md">
                    {data.name}
                  </Heading>
                  <Text size="sm">{data.role}</Text>
                </Stack>
              </Stack>
              <Text size="sm">{data.about}</Text>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export const EmployeeItem: React.FC<{ data: Employee }> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <Stack
      maxW="190px"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => !drawerIsOpen && setOpen(false)}
    >
      <Box
        position="relative"
        width={["150px", null, null, null, "190px"]}
        height={["150px", null, null, null, "190px"]}
      >
        {open && (
          <Box position="absolute" bgColor="rgba(238, 0, 144, 0.4)" top="0">
            <Stack
              width={["150px", null, null, null, "190px"]}
              height={["150px", null, null, null, "190px"]}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
              padding="12px"
            >
              <IconEyeSlash />
              <EmployeeDetails
                data={data}
                handleOpen={() => setDrawerIsOpen(true)}
                handleClose={() => {
                  setOpen(false);
                  setDrawerIsOpen(false);
                }}
              />
            </Stack>
          </Box>
        )}
        <Image
          src={data.avatar}
          boxSize={["150px", null, null, null, "190px"]}
          objectFit="cover"
        />
      </Box>
      <Heading as="h3" fontWeight="bold" size="sm">
        {data.name}
      </Heading>
      <Text size="sm" mt="0!important">
        {data.role}
      </Text>
    </Stack>
  );
};

export const EmployeeTeam: React.FC<{
  title: string;
  description?: string;
  members: Employee[];
}> = ({ title, description, members }) => (
  <Stack direction="column" spacing="30px">
    <Box>
      <Heading
        as="h2"
        color="pink.main"
        fontWeight="700"
        size="lg"
        display={["none", null, null, null, "block"]}
      >
        {title}
      </Heading>
      {description && <Text>{description}</Text>}
    </Box>
    <SimpleGrid
      columns={[2, null, null, null, 6]}
      columnGap="15px"
      rowGap="30px"
    >
      {members.map((employee, index: number) => (
        <EmployeeItem key={`employee-${index}`} data={employee} />
      ))}
    </SimpleGrid>
  </Stack>
);
