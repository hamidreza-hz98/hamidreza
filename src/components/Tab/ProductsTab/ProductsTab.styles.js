import { styled, Typography } from "@mui/material";

export const HeaderTypo = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "20px",
  color: theme.palette.text.main,
  fontWeight: "500",
}));

export const InvoiceTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "14px",
  lineHeight: "24px",
}));

export const ProductNameTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: "14px",
  lineHeight: "24px",
}));

export const DateTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: "14px",
  lineHeight: "20px",
}));
export const LocationTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: "14px",
  lineHeight: "24px",
}));

export const TotalTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: "14px",
  lineHeight: "24px",
}));
