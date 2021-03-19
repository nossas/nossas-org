export default {
  baseStyle: {
    fontWeight: "bold",
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
      fontWeight: "normal",
      textTransform: "uppercase",
      color: "white",
      _hover: {
        color: "pink.main",
      },
    },
  },
  defaultProps: {
    variant: "blue",
    size: "md",
  },
};
