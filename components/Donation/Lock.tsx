import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="25"
      fill="none"
      viewBox="0 0 19 25"
    >
      <path
        fill="#00C3B0"
        d="M17.59 10.909h-.495V7.712C17.095 3.46 13.635 0 9.383 0S1.671 3.46 1.671 7.712v3.197h-.494c-.649 0-1.177.527-1.177 1.176v11.738C0 24.472.528 25 1.177 25h16.412c.649 0 1.177-.528 1.177-1.177V12.085c0-.649-.528-1.177-1.177-1.177zM2.403 7.712c0-3.849 3.13-6.98 6.979-6.98 3.848 0 6.98 3.131 6.98 6.98v3.197H14.97V7.712a5.593 5.593 0 00-5.587-5.587 5.593 5.593 0 00-5.587 5.587v3.197H2.404V7.712zm11.834 3.197h-9.71V7.712a4.86 4.86 0 014.855-4.855 4.86 4.86 0 014.855 4.855v3.197zm3.351 13.358H1.177a.445.445 0 01-.445-.444v-3.69H2.63a.366.366 0 100-.732H.732v-1.375H2.63a.366.366 0 100-.732H.732v-1.376H2.63a.366.366 0 100-.732H.732v-3.1c0-.246.2-.445.445-.445h16.412c.245 0 .445.2.445.444v3.1h-1.897a.366.366 0 100 .733h1.897v1.376h-1.897a.366.366 0 100 .732h1.897v1.375h-1.897a.366.366 0 000 .733h1.897v3.689c0 .245-.2.444-.445.444z"
      ></path>
    </svg>
  );
}

const Lock = () => {
  const { t } = useTranslation("common");

  return (
    <Stack
      position="absolute"
      bottom="-49px"
      right="5px"
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <Icon />
      <Text color="green" fontSize="12px" w="40px">
        {t("donation.form.security")}
      </Text>
    </Stack>
  );
};

export default Lock;
