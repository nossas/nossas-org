import Button from "./Button";
import Text from "./Text";
import Link from "./Link";
import Heading from "./Heading";

export const nossas = {
  fonts: {
    heading: "Bebas Neue",
    body: "Droid Sans",
  },
  colors: {
    nossas: {
      blue: "#2D00A1",
      lightblue: "#3707B4",
      darkblue: "#250086",
      lightpink: "#F10991",
      pink: "#FF0095",
      darkpink: "#CC097B",
      green: "#00C3B0",
      darkgray: "#606373",
      gray: "#BCBEC0",
      lightgray: "#eee",
    },
  },
  fontSizes: {
    xs: "16px",
    sm: "21px",
    md: "24px",
    lg: "30px",
    xl: "36px",
    "2xl": "40px",
    "3xl": "42px",
    "4xl": "60px",
  },
  components: {
    Button,
    Text,
    Heading,
    Link,
    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "inherit",
              boxShadow: "0",
            },
            _hover: {
              borderColor: "inherit",
            },
          },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "inherit",
              boxShadow: "0",
            },
            _hover: {
              borderColor: "inherit",
            },
          },
        },
      },
    },
  },
};
