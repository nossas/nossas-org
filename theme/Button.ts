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
  },
  variants: {
    solid: {
      bg: "nossas.blue",
      color: "white",
      _hover: {
        bg: "nossas.lightblue",
        _disabled,
      },
      _active: {
        bg: "nossas.darkblue",
      },
    },
    outline: {
      bg: "white",
      color: "nossas.blue",
      _hover: {
        bg: "#f7f7f7",
        _disabled,
      },
      _active: {
        bg: "nossas.lightgray",
      },
    },
    pink: {
      bg: "nossas.pink",
      color: "white",
      _hover: {
        bg: "nossas.lightpink",
        _disabled,
      },
      _active: {
        bg: "nossas.darkpink",
      },
    },
    link: {
      bg: "transparent",
      color: "nossas.blue",
      fontSize: ["sm", "25px"],
      fontWeight: "600",
      lineHeight: "1.5",
      padding: 0,
      borderRadius: 0,
      _hover: {
        color: "nossas.lightblue",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};
