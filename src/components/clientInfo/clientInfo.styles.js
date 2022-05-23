import {
  styled,
  Box,
  Typography,
  Grid,
  Button,
  RadioGroup,
} from "@mui/material";
import { SideBarButton } from "../customButton/customButton.styles";

export const ProfileInfoContainer = styled(Box)({
  backgroundColor: "#FFFFFF",
  height: "100%",
  boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
  paddingBottom: "20px",
});

export const EditButton = styled(Button)({
  width: "50px",
  height: "10px",
  color: "#4048D6",
  backgroundColor: "white",
  "&:hover": { backgroundColor: "#F7F8FD" },
});

export const EditContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  padding: "20px 18px 12px 0px",
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

  marginTop: "20px",
  ":hover": { backgroundColor: "#3D43CA" },
});

export const ClientName = styled(Typography)({
  color: "#0A1F44",
  fontSize: "32px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "center",
  wordBreak: "break-word",
});

export const AddressTypo = styled(Typography)({
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "700",
});

export const ToggleGroup = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "12px",
});
