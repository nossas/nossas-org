import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Flex, Link, Stack, Slide } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBars } from "react-icons/fa";

export const Nav = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset((oldOffset) => {
        const currentOffset = window.pageYOffset;
        setScrollUp(currentOffset < oldOffset ? true : false);

        return currentOffset;
      });
    };
  }, []);

  return (
    <Slide direction="top" in={scrollUp} style={{ zIndex: 10 }}>
      <Flex
        as="nav"
        bgColor="blue.main"
        height="70px"
        alignItems="center"
        justifyContent="space-between"
        paddingX={["30px", "6%"]}
      >
        {children}
      </Flex>
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
  <Stack spacing={[6, 8]} direction="row" alignItems="flex-end">
    {children}
  </Stack>
);
