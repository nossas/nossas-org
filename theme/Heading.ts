const _default = {
  baseStyle: {
    fontWeight: 200,
    textTransform: "uppercase",
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
      minWidth: "210px",
      fontWeight: "700",
      ":before": {
        content: "url('/static/media/line.png')",
        marginRight: "15px",
      },
    },
  },
  defaultProps: {
    size: "lg",
  },
};

export default _default;
