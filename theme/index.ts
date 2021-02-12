import Button from "./Button";

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
    Text: {
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
    },
    Heading: {
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
    },
    Link: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        md: {
          fontSize: ["sm", "md"],
        },
      },
      variants: {
        blue: {
          color: "nossas.blue",
          _hover: {
            color: "nossas.lightblue",
          },
        },
        pink: {
          color: "nossas.pink",
          _hover: {
            color: "nossas.lightpink",
          },
        },
        nav: {
          fontWeight: "normal",
          fontSize: "16px",
          color: "white",
        },
        mobile: {
          fontFamily: "Bebas Neue",
          fontSize: "2xl",
          fontWeight: "normal",
          textTransform: "uppercase",
          color: "#fff",
          _hover: {
            color: "nossas.pink",
          },
        },
      },
      defaultProps: {
        variant: "blue",
        size: "md",
      },
    },
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
