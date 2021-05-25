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
      fontSize: "21px",
      color: "white",
      fontFamily: "Droid Sans",
      fontWeight: "normal",
    },
    inherit: {
      fontWeight: "bold",
      color: "inherit",
      _hover: {
        color: "inherit",
      },
    },
  },
  defaultProps: {
    variant: "blue",
    size: "md",
  },
};
