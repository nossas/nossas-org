const _default = {
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
    primary: (props) => ({
      color: `${props.colorScheme}.main`,
      _hover: {
        color: `${props.colorScheme}.dark`,
      },
    }),
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
    variant: "primary",
    size: "md",
    colorScheme: "blue",
  },
};

export default _default;
