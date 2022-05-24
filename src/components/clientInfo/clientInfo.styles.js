import { styled, Box, Typography, Grid, Button, Switch } from "@mui/material";
import { SideBarButton } from "../customButton/customButton.styles";

export const ProfileInfoContainer = styled(Box)({
  backgroundColor: "#FFFFFF",
  height: "100%",
  boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
  paddingBottom: "20px",
});

export const EditButton = styled(Button)({
  width: "50px",
  height: "10px",
  color: "#4048D6",
  backgroundColor: "white",
  "&:hover": { backgroundColor: "#F7F8FD" },
});

export const EditContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  padding: "20px 18px 12px 0px",
});

export const EditText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fonstWeught: "700",
  color: theme.palette.primary.main,
  lineHeight: "20px",
  marginLeft: "-6px",
}));

export const NewAppointmentButton = styled(SideBarButton)({
  width: "80%",

  marginTop: "20px",
  ":hover": { backgroundColor: "#3D43CA" },
});

export const ClientName = styled(Typography)({
  color: "#0A1F44",
  fontSize: "32px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "center",
  wordBreak: "break-word",
});

export const AddressTypo = styled(Typography)({
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "700",
});

export const ToggleGroup = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "12px",
});

export const StatusSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
