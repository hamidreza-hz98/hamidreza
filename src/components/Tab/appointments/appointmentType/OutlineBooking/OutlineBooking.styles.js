import { styled, Typography, Stack } from "@mui/material";

export const Price = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "16px",
}));
