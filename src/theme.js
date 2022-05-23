import { createTheme } from "@mui/material";

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
    MuiRadioGroup: {
      styleOverrides: {
        root: {
          width: "100%",
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
          marginTop: "24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: palette.primary.main,
          paddingTop: "8px",
          textTransform: "capitalize",
          color: "#FFFFFF",
          textAlign: "start",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          height: "48px",
          fontSize: "15px",
          borderRadius: "8px",
          "&:hover": { backgroundColor: palette.primary.second },
          "&:active": {
            backgroundColor: palette.primary.second,
            borderRadius: "8px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: "break-word",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: palette.primary.second,
            borderRadius: "8px",

            ":hover": { backgroundColor: palette.primary.second },
          },
        },
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          marginTop: 24,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          ":hover": {
            backgroundColor: "#F7F8FD",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          width: "88px",
          height: "36px",
          "& .MuiChip-label": {
            fontSize: "12px",
            lineHeight: "20px",
            color: palette.text.main,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
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
            "& .css-htfbeg-MuiFormLabel-root-MuiInputLabel-root": {
              top: "33px",
            },
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
          marginTop: "32px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          height: "48px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& .css-1m4d3w7": {
            height: "120px !important",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          position: "absolute",
          top: "-4px !important",
          left: "-1px !important",
        },
      },
    },
  },
});

export default theme;
