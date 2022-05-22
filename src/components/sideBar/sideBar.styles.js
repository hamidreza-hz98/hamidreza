import { Box, Divider, Typography, Drawer } from "@mui/material";
import { styled } from "@mui/system";
import Color from "color";

export const SideBarContainer = styled(Drawer)(({ theme }) => ({
  width: "240px",
  flexShrink: "0",
  "& .MuiDrawer-paper": {
    width: "240px",
    boxSizing: "border-box",
  },
  ".css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
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

export const MenuBox = styled(Box)({
  width: "100%",
});

export const LinksContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export const ButtonTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.base.main,
}));

export const SettingsButtonContainer = styled(Box)({
  pDDIND: "0",
  marginBottom: "10px",
  width: "85%",
  marginLeft: "33.4px",
});

export const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.text.divider,
  borderWidth: "1px",
  margin: "0px",
  marginLeft: "0",
  width: "100%",
}));

export const CloseContainer = styled(Box)({
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
  margin: "20px 20px 20px 0px",
});

export const DownContainer = styled(Box)({
  marginTop: "auto",
});
