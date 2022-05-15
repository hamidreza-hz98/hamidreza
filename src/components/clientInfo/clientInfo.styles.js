import { styled, Box, Typography, Grid, Button } from "@mui/material";
import { SideBarButton } from "../customButton/customButton.Styles";

//styles for profile information...
export const ProfileInfoContainer = styled(Box)({
  backgroundColor: "#FFFFFF",
  height: "100%",
  boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
  marginBottom: "0px",
});

export const EditButton = styled(Button)({
  width: "50",
  height: "10",
  padding: "0px",
  textTransform: "capitalize",
  color: "#4048D6",
});

export const EditContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  padding: "26px 24px 18px 0px",
});

export const EditText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fonstWeught: "700",
  color: theme.palette.primary.main,
  lineHeight: "20px",
  marginLeft: "-6px",
}));

export const NewAppointmentButton = styled(SideBarButton)({
  width: "80%",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  ":hover": { backgroundColor: "#3D43CA" },
});

export const ClientName = styled(Typography)({
  color: "#0A1F44",
  fontSize: "32px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "center",
});

export const ToggleGroup = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "12px",
});

export const AddressTypo = styled(Typography)({
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "700",
});