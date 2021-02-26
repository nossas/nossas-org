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
      color: "nossas.blue",
      _hover: {
        color: "nossas.lightblue",
      },
    },
    pink: {
      color: "nossas.pink",
      _hover: {
        color: "nossas.lightpink",
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
      color: "#fff",
      _hover: {
        color: "nossas.pink",
      },
    },
  },
  defaultProps: {
    variant: "blue",
    size: "md",
  },
};
