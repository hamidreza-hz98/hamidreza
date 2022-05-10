import { styled, Container } from "@mui/material";
import { SideBarButton } from "../../components/customButton/customButton.Styles";

export const NewClient = styled(SideBarButton)({
  width: "130px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  ":hover": { backgroundColor: "#3D43CA" },
});

export const Row = styled(Container)({
  display: "flex",
  justifyContent: "space-between",
});
