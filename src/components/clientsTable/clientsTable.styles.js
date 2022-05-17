import { styled, TableContainer, Typography } from "@mui/material";

export const TableBox = styled(TableContainer)({
  marginTop: "30px",
  backgroundColor: "#FFFFFF",
});

export const ClientHeader = styled(Typography)({
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "20px",
});

export const NameTypo = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  color: theme.palette.text.main,
}));

export const MobileTypo = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  color: "#4E5D78",
});

export const EmailTypo = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  color: theme.palette.primary.main,
}));
