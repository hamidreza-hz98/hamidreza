import {
  Box,
  Drawer,
  styled,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import Color from "color";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { ReactComponent as CloseButton } from "../../assets/sideBarVectors/closeButton.svg";

export const SideBarContainer = styled(Drawer)(({ theme }) => ({
  ".css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
  },
}));

// styles for header
export const Text = styled(Typography)({
  color: "#0A1F44",
  fontWeight: "700",
  marginLeft: "240px",
  fontSize: "24px",
  lineHeight: "30px",
});

export const Right = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ToolBar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  backgroundColor: theme.palette.base.main,
}));

export const NavBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

//styles for sidebar
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
  backgroundColor: "#4048D6",
});

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
  marginBottom: 0,
});

export const DownContainer = styled(Box)({
  marginTop: "auto",
  marginBottom: "36.97px",
});
