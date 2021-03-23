export default {
  baseStyle: {
    fontWeight: "bold",
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    md: {
      fontSize: ["sm", "md"],
    },
  },
  variants: {
    blue: {
      color: "blue.main",
      _hover: {
        color: "blue.light",
      },
    },
    pink: {
      color: "pink.main",
      _hover: {
        color: "pink.light",
      },
    },
    nav: {
      fontWeight: "normal",
      fontSize: "16px",
      color: "white",
    },
    mobile: {
      fontFamily: "Bebas Neue",
      fontSize: "2xl",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "white",
      lineHeight: "50px",
      _hover: {
        color: "pink.main",
        textDecoration: "none",
      },
    },
  },
  defaultProps: {
    variant: "blue",
    size: "md",
  },
};
