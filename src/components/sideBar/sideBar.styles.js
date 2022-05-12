import { Box, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import Color from "color";

export const SideBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "fixed",
  width: "248px",
  backgroundColor: theme.palette.primary.main,
  maxWidth: "248px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: Color(theme.palette.primary.second).alpha(0.2).string(),
  height: "20.6vh",
  maxHeight: "25vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const SideBarLogo = styled(Logo)({});
export const MenuBox = styled(Box)({
  width: "100%",
});
export const LinksContainer = styled(Box)({
  //height: "100%",
  backgroundColor: "#4048D6",
});

export const SettingsButtonContainer = styled(Box)({
  pDDIND: "0",
  marginBottom: "10px",
  width: "85%",
  marginLeft: "33.4px",
});

export const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.text.divider,
  borderWidth: "1px",
  margin: "8px",
  marginLeft: "0",
  width: "100%",
}));

export const CloseContainer = styled(Box)({
  display: "flex",
  padding: "0",
  alignItems: "end",
  justifyContent: "end",
  marginRight: 20,
  marginBottom: 10,
});

export const DownContainer = styled(Box)({
  marginTop: "auto",
  marginBottom: "36.97px",
});
