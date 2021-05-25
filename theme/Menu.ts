const itemStyle = {
  textDecoration: "underline",
  bg: "none",
  color: "white !important",
};

export default {
  baseStyle: {
    list: {
      bg: "blue.main",
      borderWidth: "0",
      borderRadius: "0",
    },
    item: {
      py: "10px !important",
      px: "20px !important",
      color: "white",
      fontWeight: "normal",
      fontSize: ["21px", null, "18px"],
      _focus: itemStyle,
      _hover: itemStyle,
      _active: itemStyle,
      _expanded: itemStyle,
    },
  },
};
