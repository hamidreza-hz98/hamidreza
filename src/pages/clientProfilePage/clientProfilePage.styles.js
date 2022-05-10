import { Box, Grid, styled, Typography } from "@mui/material";
import CustomButton from "../../components/customButton/customButton";
import { SideBarButton } from "../../components/customButton/customButton.Styles";

export const ProfilePageContainer = styled(Grid)({
  height: "97.4%",
  padding: "15px",
});

//styles for sales report
export const SalesReportContainer = styled(Box)({
  backgroundColor: "#FFFFFF",
  height: "30%",
  marginBottom: "20px",
  padding: 0,
  boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
});

//styles for tab
export const AppointmentsTabContainer = styled(Box)({
  backgroundColor: "#FFFFFF",
  height: "55%",
  padding: 0,
  boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
});
