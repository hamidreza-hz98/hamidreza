import { AppBar, Box, styled, Typography } from "@mui/material";

export const HeaderContainer = styled(Box)({});

export const Header = styled(AppBar)({
  width: "100%",
  height: "69px",
  backgroundColor: "#FFFFFF",
  boxShadow: "inset 0px -1px 0px rgba(78,93,120,0.25)",
});

export const Right = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
