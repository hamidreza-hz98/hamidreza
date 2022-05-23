import { styled, Grid, Button } from "@mui/material";
import { SideBarButton } from "../../components/customButton/customButton.styles";

export const NewClient = styled(Button)(({ theme }) => ({
  width: "130px",
  marginTop: "20px",
  marginRight: "0px",
}));

export const BtnContainer = styled(Grid)({
  display: "flex",
  alignItems: "start",
  justifyContent: "end",
});
