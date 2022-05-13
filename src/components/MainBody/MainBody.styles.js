import { styled } from "@mui/material";
import Color from "color";

export const Main = styled("main")(({ theme }) => ({
  backgroundColor: Color(`${theme.palette.base.second}`).alpha(0.2).string(),
  width: "100vh",
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 0,
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
