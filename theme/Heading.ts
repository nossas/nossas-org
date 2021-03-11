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
      color: "nossas.blue",
      fontSize: ["md", null, "lg"],
      fontWeight: "700",
      paddingLeft: "15px",
      borderLeftWidth: "3px",
      borderLeftColor: "nossas.blue",
    },
  },
  defaultProps: {
    size: "md",
  },
};
