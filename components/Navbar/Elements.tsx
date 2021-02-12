import styled from "@emotion/styled";
import { Flex, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBars } from "react-icons/fa";

export const Nav = ({ children }) => (
  <Flex
    as="nav"
    bgColor="nossas.blue"
    height="70px"
    alignItems="center"
    justifyContent="space-between"
    paddingX={["30px", "40px", null, "60px"]}
  >
    {children}
  </Flex>
);

export const NavLink = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Link variant="nav">{children}</Link>
  </NextLink>
);

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;

    margin-top: -35px;
    margin-left: 20px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  a {
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

interface NavSideProps {
  spacing?: number | number[];
}

export const NavSide: React.FC<NavSideProps> = ({ children, spacing }) => (
  <Stack spacing={spacing} direction="row" alignItems="center">
    {children}
  </Stack>
);
