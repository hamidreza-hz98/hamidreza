import { createTheme } from "@mui/material";
import { spacing } from "@mui/system";

const palette = {
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
};

const typography = {
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
};

const theme = createTheme({
  typography,
  palette,

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiFormHelperText-root": {
            color: "#F43319",
            backgroundColor: "rgba(244, 51, 25, 0.06)",
            borderRadius: "8px",
            fontSize: "12px",
            paddingLeft: "12px",

            marginLeft: "0px",
            marginBottom: "20px",
            width: "100%",
          },
          "& label.Mui-focused": {
            color: palette.text.second,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(64, 72, 214, 0.4)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(64, 72, 214, 0.4)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(64, 72, 214, 0.4)",
            },
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              color: palette.text.second,
            },
          },
          borderColor: "1px solid rgba(64, 72, 214, 0.4)",
          borderRadius: "8px",
          height: "48px",
          marginTop: "32px",
        },
      },
    },
  },
});

export default theme;
