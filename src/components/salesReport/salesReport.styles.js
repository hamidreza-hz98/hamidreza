import { styled, Typography, Box, Grid } from "@mui/material";

//styles for sales report
export const SalesReportContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.base.main,
  height: "auto",
  marginBottom: "20px",
  padding: 0,
  boxShadow: "0px 8px 34px rgba(10, 31, 68, 0.08)",
}));
export const ReportContainer = styled(Grid)(({ theme }) => ({
  boxShadow: "inset -1px -1px 1px rgba(0, 0, 0, 0.1)",
  backgroundColor: theme.palette.base.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "24px",
}));

export const ReportAmountText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  lineHeight: "28px",
  color: theme.palette.text.main,
}));
export const ReportTypeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.second,
  fontSize: "16px",
  lineHeight: " 24px",
  fontWeight: "400",
  letterSpacing: "0.1",
}));

export const BookingContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "18px",
});

export const BookingBox = styled(Grid)({
  backgroundColor: "#F7F8FD",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "24px",
  margin: "6px",
});

export const BookingTypeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.second,
  fontSize: "12px",
  lineHeight: "12px",
}));

export const BookingAmount = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: "20px",
  lineHeight: "28px",
}));
