import { styled, Typography, Box, Grid } from "@mui/material";

//styles for sales report
export const SalesReportContainer = styled(Box)({
  backgroundColor: "#FFFFFF",
  height: "30vh",
  marginBottom: "20px",
  padding: 0,
  boxShadow: "0px 8px 34px rgba(10, 31, 68, 0.08)",
});
export const ReportContainer = styled(Grid)({
  boxShadow: "inset -1px -1px 1px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const ReportAmountText = styled(Typography)({
  fontSize: "18px",
  lineHeight: "28px",
  color: "#0A1F44",
});
export const ReportTypeText = styled(Typography)({
  color: "#4E5D78",
  fontSize: "16px",
  lineHeight: " 24px",
  fontWeight: "400",
  letterSpacing: "0.1",
});

export const BookingContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const BookingBox = styled(Grid)({
  backgroundColor: "#F7F8FD",
  height: "12vh",
  width: "13.5vw !important",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const BookingTypeText = styled(Typography)({
  color: "#4E5D78",
  fontSize: "12px",
  lineHeight: "12px",
});

export const BookingAmount = styled(Typography)({
  color: "0A1F44",
  fontSize: "20px",
  lineHeight: "28px",
});
