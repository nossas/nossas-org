export default {
  baseStyle: {
    fontWeight: 400,
  },
  sizes: {
    sm: {
      fontSize: ["md", null, "lg"],
    },
    md: {
      fontSize: ["lg", null, "3xl"],
    },
    lg: {
      fontSize: ["2xl", null, "4xl"],
    },
  },
  variants: {
    tag: {
      display: "inline-table",
      color: "blue.main",
      fontSize: ["md", null, "lg"],
      fontWeight: "700",
      paddingLeft: "15px",
      borderLeftWidth: "3px",
      borderLeftColor: "blue.main",
    },
  },
  defaultProps: {
    size: "md",
  },
};
