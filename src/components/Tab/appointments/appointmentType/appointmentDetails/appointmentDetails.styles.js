import { Box, styled } from "@mui/material";
import AppointmentType from "../appointmentType";

export const AppointmentDetailsContainer = styled(Box)({
  backgroundColor: "#F5F4F4",
  width: "90%",
  height: "auto",
});

export const AppointmentTypeDetail = styled(AppointmentType)({
  marginLeft: "10px",
});
