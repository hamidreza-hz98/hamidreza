import { Button, styled } from "@mui/material";

export const SideBarButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: "8px",
  textTransform: "capitalize",
  color: "#FFFFFF",
  textAlign: "start",
  display: "flex",
  width: "100%",
  justifyContent: "start",
  fontSize: "15px",
  ":active": {
    backgroundColor: theme.palette.primary.second,
  },
}));
