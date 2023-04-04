// Foundations
import colors from "./colors";
// Components
import Button from "./Button";
import Text from "./Text";
import Link from "./Link";
import Heading from "./Heading";
import Input from "./Input";
import Select from "./Select";
import Menu from "./Menu";

export const nossas = {
  fonts: {
    heading: "Bebas Neue Pro",
    body: "Bebas Neue Pro",
  },
  colors,
  fontSizes: {
    xs: "21px",
    sm: "24px",
    md: "32px",
    lg: "36px",
    // xl: "40px",
    "2xl": "40px",
    "3xl": "42px",
    "4xl": "60px",
  },
  components: {
    Button,
    Text,
    Heading,
    Link,
    Input,
    Select,
    Menu,
    FormControl: {
      variants: {
        inline: {
          display: "flex",
          flexDirection: "row",
        },
      },
    },
    FormLabel: {
      sizes: {
        xs: {
          fontSize: ["xs"],
        },
      },
      defaultProps: {
        size: "xs",
      },
    },
  },
};
