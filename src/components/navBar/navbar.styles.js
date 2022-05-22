import { Box, styled, Typography, Toolbar } from "@mui/material";

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
  boxShadow: "inset 0px -1px 0px rgba(78, 93, 120, 0.25)",
}));

export const NavBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});
