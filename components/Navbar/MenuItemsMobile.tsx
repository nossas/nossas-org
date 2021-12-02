import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Link as LinkStyled,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";
import ButtonIcon from "./ButtonIcon";

type SubMenu = {
  href: string;
  label: string;
};

type ItemProps = {
  name: string;
  submenus: SubMenu[];
};

const AccordionItemCustom = styled(AccordionItem)`
  border-top-width: 0;

  &:last-of-type {
    border-bottom-width: 0;
  }
`;

export const MenuItem: React.FC<ItemProps> = ({ name, submenus }) => (
  <AccordionItemCustom>
    <h2>
      <AccordionButton
        fontFamily="Bebas Neue"
        fontSize="40px"
        color="white"
        fontWeight="bold"
        padding="0"
        border="none !important"
        outline="none !important"
      >
        <Box flex="1" textAlign="left">
          {name}
        </Box>
        <ButtonIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      <Stack direction="column">
        {submenus.map((item: SubMenu) => (
          <Link href={item.href}>
            <LinkStyled variant="mobile">{item.label}</LinkStyled>
          </Link>
        ))}
      </Stack>
    </AccordionPanel>
  </AccordionItemCustom>
);

export const MenuItemGroup = ({ children }) => (
  <Accordion>{children}</Accordion>
);
