export default {
  sizes: {
    xs: {
      fontSize: ["xs"],
    },
    sm: {
      fontSize: ["xs", "sm"],
    },
    md: {
      fontSize: ["sm", "md"],
    },
    lg: {
      fontSize: ["lg", "md", "xl", "3xl", "4xl"],
      fontWeight: "700",
      textTransform: "uppercase",
    },
  },
  variants: {
    paragraph: {
      color: "nossas.darkgray",
    },
  },
  defaultProps: {
    variant: "paragraph",
    size: "md",
  },
};
