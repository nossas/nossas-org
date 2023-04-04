const _disabled = {
  bg: "nossas.gray",
  opacity: "1",
};

const _default = {
  baseStyle: {
    fontFamily: "Bebas Neue Pro",
    _focus: {
      boxShadow: "none",
    },
    _disabled,
    _hover: {
      _disabled,
    },
  },
  sizes: {
    sm: {
      fontSize: "16px",
      padding: "12px 18px",
      height: "2.5rem",
    },
    md: {
      fontSize: "18px",
      padding: "12px 24px",
    },
    lg: {
      fontSize: "18px",
    },
  },
  variants: {
    solid: (props) => ({
      bg: `${props.colorScheme}.main`,
      color: "white",
      textTransform: "uppercase",
      _hover: {
        bg: `${props.colorScheme}.dark`,
        _disabled,
      },
      _active: {
        bg: `${props.colorScheme}.dark`,
      },
    }),
    outline: {
      bg: "white",
      color: "blue.main",
      _hover: {
        bg: "#f7f7f7",
        _disabled,
      },
      _active: {
        bg: "gray.main",
      },
    },
    pink: {
      bg: "pink.main",
      color: "white",
      _hover: {
        bg: "pink.light",
        _disabled,
      },
      _active: {
        bg: "pink.dark",
      },
    },
    link: (props) => ({
      bg: "transparent",
      color: `${props.colorScheme}.main`,
      fontSize: ["sm", "md"],
      fontWeight: "600",
      lineHeight: "1.5",
      padding: 0,
      borderRadius: 0,
      _hover: {
        color: `${props.colorScheme}.dark`,
      },
    }),
    menu: {
      fontFamily: "Bebas Neue Pro",
      bg: "transparent",
      color: "white",
      textTransform: "uppercase",
      fontSize: ["xs", "sm"],
      fontWeight: "bold",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "orange",
  },
};

export default _default;
