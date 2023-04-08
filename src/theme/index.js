import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Red Hat Display,sans-serif",
    body: "Red Hat Display,sans-serif",
  },
  colors: {
    border: {
      gray: "#D7D7D7",
    },
  },
  borders: {
    navBar: `1px solid #D7D7D7`,
  },
  components: {
    Container: {
      responsive: {
        maxW: [
          "full",
          "full",
          "full",
          "container.lg",
          "container.xl",
          "container.2xl",
        ],
        px: ["24px", "24px", "24px", "36px", "36px", "74px"],
      },
    },
    Heading: {
      variants: {
        h1: {
          color: "black",
          fontSize: ["36px", "36px", "42px", "42px", "46px", "54px"],
          fontWeight: ["thin"],
        },
        h2: {
          color: "black",
          fontSize: ["28px", "28px", "36px", "36px", "38px", "42px"],
          fontWeight: ["thin"],
        },
        h3: {
          color: "black",
          fontSize: ["22px", "22px", "28px", "28px", "32px", "36px"],
          fontWeight: ["normal"],
        },
        h4: {
          color: "black",
          fontSize: ["18px", "18px", "22px", "22px", "24px", "24px"],
          fontWeight: ["semibold", "semibold", "medium", "medium", "medium"],
        },
        h5: {
          color: "black",
          fontSize: ["14px", "14px", "18px", "18px", "18px", "18px"],
          fontWeight: ["semibold"],
        },
      },
    },
  },
});

export default theme;
