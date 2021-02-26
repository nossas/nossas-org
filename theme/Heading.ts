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
  defaultProps: {
    size: "md",
  },
};
