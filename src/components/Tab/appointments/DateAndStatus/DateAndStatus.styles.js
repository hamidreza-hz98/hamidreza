import { styled, Typography, Box, Container } from "@mui/material";

export const DateContainer = styled(Container)({
  marginTop: "-13px",
});

export const CustomDate = styled(Typography)(({ theme }) => ({
  marginTop: "21px",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "16px",
  color: theme.palette.text.main,
}));
export const Weekday = styled(Typography)(({ theme }) => ({
  marginTop: "2px",
  fontWeight: "400",
  fontSize: "12px",
  color: theme.palette.text.second,
}));
export const Status = styled(Box)(({ theme }) => ({
  marginTop: "9px",
  width: "70px",
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
}));

export const StatTypo = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "12px",
  color: theme.palette.text.main,
}));
