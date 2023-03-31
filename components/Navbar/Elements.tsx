import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Link, Stack, Slide } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBars } from "react-icons/fa";

export const Nav = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      setOffset((oldOffset) => {
        const currentOffset = window.pageYOffset;

        let currentScrollUp = currentOffset < oldOffset ? true : false;
        if (currentOffset < 100) currentScrollUp = true;

        setScrollUp(currentScrollUp);

        return currentOffset;
      });
    };
  }, []);

  return (
    <Slide direction="top" in={scrollUp} style={{ zIndex: 10 }}>
      <Box as="header" bgColor="blue.main" paddingX={["30px", "6%"]}>
        <Flex
          as="nav"
          w="100%"
          maxW="1850px"
          margin="0 auto"
          height="70px"
          alignItems="center"
          justifyContent="space-between"
        >
          {children}
        </Flex>
      </Box>
    </Slide>
  );
};

interface NavLinkProps {
  href: string;
  variant?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  variant,
}) => (
  <NextLink href={href} passHref>
    <Link variant={variant}>{children}</Link>
  </NextLink>
);

NavLink.defaultProps = {
  variant: "nav",
};

export const Bars = styled(FaBars)`
  color: #fff;
  font-size: 1.5rem;
  transform: translate(15%, -30%);
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

export const NavSide = ({ children }) => (
  <Stack direction="row" alignItems="baseline">
    {children}
  </Stack>
);
