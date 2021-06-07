import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import {
  Box,
  Stack,
  Heading,
  Image,
  Text,
  Link as LinkStyled,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";

import IconPlus from "./IconPlus";

const BoxStyled = styled(Box)`
  border-bottom-width: 1px;

  &:first-child {
    border-top-width: 1px;
  }
`;

const CustomHeading = styled(Heading)`
  @media screen and (max-width: 48em) {
    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
`;

export const NavigationItem: React.FC<{ data: Item }> = ({ data }) => {
  const ref = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  return (
    <BoxStyled
      ref={ref}
      cursor={!isOpen ? "pointer" : "normal"}
      h={!isOpen ? "185px" : "auto"}
      onClick={!isOpen ? onOpen : null}
      overflow="hidden"
      borderColor="gray.main"
    >
      <Stack direction={["column", "column", null, "row"]} position="relative">
        <Stack
          direction="column"
          paddingTop={["0", null, "55px"]}
          paddingBottom="55px"
          paddingX={["15px", null]}
          spacing={["40px", "25px"]}
          maxW="650px"
        >
          <CustomHeading
            as="h2"
            color="blue.main"
            fontSize={["xl", null, "3xl"]}
            minH={["185px", null, "auto"]}
          >
            {data.title}
          </CustomHeading>
          <Text>{data.about}</Text>
          {data.navigation && (
            <Link href={data.navigation.href}>
              <LinkStyled variant="pink">{data.navigation.title}</LinkStyled>
            </Link>
          )}
        </Stack>
        <Box flex={[null, null, null, "1"]} paddingY="15px">
          <Image
            margin="0 auto"
            objectFit="cover"
            maxW={["265px", null, null, null, "465px"]}
            src={data.image}
          />
        </Box>
        <Box
          position={["absolute", "absolute", null, "relative"]}
          right="30px"
          onClick={onClose}
          cursor="pointer"
          transform={["scale(0.6)", "scale(0.6)", null, null, null]}
        >
          <IconPlus transform={!isOpen} />
        </Box>
      </Stack>
    </BoxStyled>
  );
};

export type Item = {
  title: React.ReactElement | string;
  about: string;
  image: string;
  navigation: {
    title: string;
    href: string;
  };
};

export const Navigation: React.FC<{ items: Item[] }> = ({ items }) => (
  <Stack flex="1">
    {items.map((data, index: number) => (
      <NavigationItem key={`navigation-${index}`} data={data} />
    ))}
  </Stack>
);
