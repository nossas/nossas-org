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
  Fade,
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

type DrawerInfoProps = {
  isOpen: boolean;
  handleClose: () => void;
  data: Employee;
};

const DrawerInfo: React.FC<DrawerInfoProps> = ({
  isOpen,
  handleClose,
  data,
}) => {
  return (
    <Drawer
      closeOnOverlayClick={true}
      isOpen={isOpen}
      placement="right"
      size="md"
      onClose={handleClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader
            color="pink.main"
            textTransform="uppercase"
            fontFamily="Bebas Neue"
            fontSize="md"
          >
            {data.team}
          </DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            <Stack direction="row" spacing="30px" mb="25px">
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
  );
};

export const EmployeeItem: React.FC<{ data: Employee }> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const {
    isOpen: isOpenDrawerInfo,
    onOpen: onOpenDrawerInfo,
    onClose: onCloseDrawerInfo,
  } = useDisclosure();

  const handleCloseDrawerInfo = () => {
    setOpen(false);
    onCloseDrawerInfo();
  };

  return (
    <Stack
      maxW="190px"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => !drawerIsOpen && setOpen(false)}
    >
      <Box
        position="relative"
        width="190px"
        height="190px"
        overflow="hidden"
        marginBottom="10px"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Image
          src={data.avatar}
          boxSize="190px"
          objectFit="cover"
          transition="all 0.2s ease-out"
          transform={open ? "scale(1.1)" : "scale(1.0)"}
        />

        {open && (
          <Fade in={open} unmountOnExit={true}>
            <Box
              position="absolute"
              bgColor="rgba(238, 0, 144, 0.2)"
              top="0"
              cursor="pointer"
              onClick={onOpenDrawerInfo}
            >
              <Stack
                width="190px"
                height="190px"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-end"
                padding="12px"
              >
                <IconEyeSlash />

                <Text id="btnRef" color="white" size="sm">
                  Saiba +
                </Text>
              </Stack>
            </Box>
          </Fade>
        )}

        <DrawerInfo
          isOpen={isOpenDrawerInfo}
          handleClose={handleCloseDrawerInfo}
          data={data}
        />
      </Box>

      <Heading
        as="h3"
        fontWeight="bold"
        size="sm"
        mb="-15px"
        textDecoration={open ? "underline" : "none"}
      >
        {data.name}
      </Heading>

      <Text size="sm">{data.role}</Text>
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
      <Heading as="h2" color="pink.main" fontWeight="700" size="lg">
        {title}
      </Heading>
      {description && <Text>{description}</Text>}
    </Box>
    <SimpleGrid minChildWidth="218px" rowGap="30px">
      {members.map((employee, index: number) => (
        <EmployeeItem key={`employee-${index}`} data={employee} />
      ))}
    </SimpleGrid>
  </Stack>
);
