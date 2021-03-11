export default {
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