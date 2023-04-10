import React, { useState } from "react";
import { useTranslation } from "next-i18next";
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
import { EmployeeType } from "./types";

interface EmployeeItemProps {
  data: EmployeeType;
}

export const EmployeeItem = ({ data }: EmployeeItemProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("common");

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
      onMouseLeave={() => setOpen(false)}
    >
      <Box
        position="relative"
        overflow="hidden"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Image
          src={data.avatar}
          boxSize="100%"
          height="190px"
          objectFit="cover"
          transition="all 0.2s ease-out"
          transform={open ? "scale(1.1)" : "scale(1.0)"}
        />

        {open ? (
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
                {t("see")}
              </Text>
            </Stack>
          </Fade>
        ) : (
          <Stack
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            padding="12px"
            bg="linear-gradient(180deg, rgba(45, 0, 161, 0.4) 0%, rgba(45, 0, 161, 0.4) 100%)"
            cursor="pointer"
          />
        )}
      </Box>

      <DrawerInfo
        isOpen={isOpenDrawerInfo}
        handleClose={handleCloseDrawerInfo}
        data={data}
      />

      <Box>
        <Heading
          as="h3"
          fontWeight="bold"
          size="sm"
          marginTop={1}
          marginBottom={-1.5}
          textDecoration={open ? "underline" : "none"}
        >
          {data.name}
        </Heading>

        <Text size="sm">{data.role}</Text>
      </Box>
    </Stack>
  );
};
