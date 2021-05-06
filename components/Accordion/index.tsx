import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Stack,
  Heading,
  Image,
  Text,
  Link,
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
      <Stack direction="row" position="relative">
        <Stack direction="column" paddingY="55px" spacing="25px" maxW="650px">
          {typeof data.title === "string" ? (
            <Heading as="h2" color="blue.main" size="md" maxW="265px">
              {data.title}
            </Heading>
          ) : (
            data.title
          )}
          <Text>{data.about}</Text>
          {data.navigation && (
            <Link variant="pink" href={data.navigation.href}>
              {data.navigation.title}
            </Link>
          )}
        </Stack>
        <Box flex="1" paddingY="15px">
          <Image
            margin="0 auto"
            objectFit="cover"
            maxW="465px"
            src={data.image}
          />
        </Box>
        <Box onClick={onClose} cursor="pointer">
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
