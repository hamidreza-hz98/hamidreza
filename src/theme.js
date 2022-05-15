import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Quicksand",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    primary: {
      //blue colors
      main: "#4048D6", //for buttons and sidebar
      second: "#322C9C", //for logoBg and active effect
    },
    text: {
      //textual colors
      main: "#0A1F44", // main color
      second: "#4E5D78", //gray texts
      divider: "#595DE3", //for sidebar devider
    },
    base: {
      main: "#FFFFFF", //main white bg color
      second: "#E5E5E5", //gray bg color
    },
  },
});

export default theme;
