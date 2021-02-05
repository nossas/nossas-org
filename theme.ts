export const nossas = {
  fonts: {
    heading: "Bebas Neue",
    body: "Droid Sans",
  },
  colors: {
    nossas: {
      blue: "#2D00A1",
      pink: "#FF0095",
      green: "#00C3B0",
      darkgrey: "#606373",
      grey: "#aaaaaa",
    },
  },
  fontSizes: {
    xs: "16px",
    sm: "21px",
    md: "26px",
    lg: "30px",
    xl: "36px",
    "2xl": "40px",
    "3xl": "42px",
    "4xl": "70px",
  },
  components: {
    Button: {
      sizes: {
        md: {
          fontSize: "15px",
          padding: "12px 16px",
        },
      },
      variants: {
        solid: {
          bg: "nossas.blue",
          color: "white",
        },
        outline: {
          bg: "white",
          color: "nossas.blue",
        },
        pink: {
          bg: "nossas.pink",
          color: "white",
        },
        link: {
          bg: "transparent",
          color: "nossas.blue",
          fontSize: ["sm", "md"],
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
      },
    },
    Text: {
      variants: {
        paragraph: {
          color: "nossas.darkgrey",
        },
      },
      defaultProps: {
        variant: "paragraph",
      },
    },
    Heading: {
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
        },
        pink: {
          color: "nossas.pink",
        },
        nav: {
          fontWeight: "normal",
          fontSize: "16px",
          color: "white",
        },
      },
      defaultProps: {
        variant: "blue",
        size: "md",
      },
    },
  },
};
