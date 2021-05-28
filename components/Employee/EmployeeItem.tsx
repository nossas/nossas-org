import React, { useState } from "react";
import {
  Box,
  Stack,
  Image,
  Heading,
  Text,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";

import { DrawerInfo } from "./DrawerInfo";

import IconEyeSlash from "./IconEyeSlash";

interface Employee {
  avatar: string;
  name: string;
  role: string;
  about?: string;
  team: string;
  networks?: Record<string, string>;
}

interface EmployeeItemProps {
  data: Employee;
}

export const EmployeeItem = ({ data }: EmployeeItemProps) => {
  const [open, setOpen] = useState(false);

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
      maxW={["150px", "150px", "190px"]}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Box
        position="relative"
        width={["150px", "150px", "190px"]}
        height={["150px", "150px", "190px"]}
        overflow="hidden"
        marginBottom="10px"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Image
          src={data.avatar}
          boxSize="100%"
          objectFit="cover"
          transition="all 0.2s ease-out"
          transform={open ? "scale(1.1)" : "scale(1.0)"}
        />

        {open && (
          <Fade in={open} unmountOnExit={true}>
            <Stack
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              padding="12px"
              bgColor="rgba(238, 0, 144, 0.2)"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
              cursor="pointer"
              onClick={onOpenDrawerInfo}
            >
              <IconEyeSlash />

              <Text id="btnRef" color="white" size="sm">
                Saiba +
              </Text>
            </Stack>
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
