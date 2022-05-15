import { styled, Grid } from "@mui/material";
import { SideBarButton } from "../../components/customButton/customButton.Styles";

export const NewClient = styled(SideBarButton)(({ theme }) => ({
  width: "130px",
  height: "48px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  marginRight: "0px",
  ":hover": { backgroundColor: theme.palette.primary.second },
}));

export const BtnContainer = styled(Grid)({
  display: "flex",
  alignItems: "start",
  justifyContent: "end",
});
