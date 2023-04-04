const _default = {
  defaultStyles: {
    fontWeight: "normal",
    fontFamily: "Beba Neue Pro",
  },
  sizes: {
    xs: {
      fontSize: ["xs"],
      fontWeight: "normal",
    },
    sm: {
      fontSize: ["xs", "sm"],
      fontWeight: "normal",
    },
    md: {
      fontSize: ["sm", "md"],
      fontWeight: "normal",
    },
    lg: {
      fontSize: ["lg"],
      fontWeight: "700",
    },
  },
  variants: {
    paragraph: {
      color: "gray.dark",
    },
  },
  defaultProps: {
    variant: "paragraph",
    size: "md",
  },
};

export default _default;
