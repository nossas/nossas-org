const _disabled = {
  bg: "nossas.gray",
  opacity: "1",
};

export default {
  baseStyle: {
    _focus: {
      boxShadow: "none",
    },
    _disabled,
    _hover: {
      _disabled,
    },
  },
  sizes: {
    md: {
      fontSize: "15px",
      padding: "12px 16px",
    },
    lg: {
      fontSize: "18px",
    },
  },
  variants: {
    solid: {
      bg: "blue.main",
      color: "white",
      _hover: {
        bg: "blue.light",
        _disabled,
      },
      _active: {
        bg: "blue.dark",
      },
    },
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
    link: {
      bg: "transparent",
      color: "blue.main",
      fontSize: ["sm", "md"],
      fontWeight: "600",
      lineHeight: "1.5",
      padding: 0,
      borderRadius: 0,
      _hover: {
        color: "blue.light",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};
