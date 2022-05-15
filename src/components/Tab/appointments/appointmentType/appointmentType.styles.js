import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";

export const TypeContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-between",
});
export const PriceContainer = styled(Box)({
  backgroundColor: "#F5F4F4",
  width: "132%",
  margin: "10px 10px 0px 10px",
});
export const AppointmentTitle = styled(Typography)({
  fontSize: "16px",
  lineHeight: "24px",
  color: "#0A1F44",
  marginTop: "5px",
  marginLeft: "10px",
});
export const AppointmentDescription = styled(Typography)({
  display: "flex",
  alignItems: "start",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#4E5D78",
  marginLeft: "10px",
});
