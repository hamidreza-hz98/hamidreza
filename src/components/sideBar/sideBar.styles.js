import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

export const SideBarContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#3D43CA",
});

export const LogoContainer = styled(Box)({
  height: "25vh",
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const SideBarLogo = styled(Logo)({});

export const MenuBox = styled(Box)({
  width: "100%",
});

export const LinksContainer = styled(Box)({
  height: "125vh",
  backgroundColor: "#4048D6",
});

export const SettingsButtonContainer = styled(Box)({
  height: "22vh",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
});

export const CloseContainer = styled(Box)({
  display: "flex",
  height: "6vh",
  alignItems: "end",
  justifyContent: "end",
  marginRight: 20,
});
