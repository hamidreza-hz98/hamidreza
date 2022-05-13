import { Box, styled, Typography, Toolbar, AppBar } from "@mui/material";

export const Text = styled(Typography)({
  color: "#0A1F44",
  fontWeight: "700",
  marginLeft: "240px",
  fontSize: "24px",
  lineHeight: "30px",
});

export const CustomAppBar = styled(AppBar)({
  width: "calc(100% - 240px)",
  marginLeft: "240px",
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
