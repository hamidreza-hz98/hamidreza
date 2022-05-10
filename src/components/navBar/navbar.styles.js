import { AppBar, Box, styled, Typography } from "@mui/material";

export const HeaderContainer = styled(Box)({});

export const Header = styled(AppBar)({
  height: "60px",
  display: "flex",
  backgroundColor: "#FFFFFF",
  boxShadow: "inset 0px -1px 0px rgba(78,93,120,0.25)",
  padding: "0px",
});
export const Text = styled(Typography)({
  color: "#0A1F44",
  fontWeight: "700",
});
export const Right = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
