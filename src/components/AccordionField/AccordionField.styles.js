import { styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "28px",
  color: theme.palette.text.main,
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  color: theme.palette.text.second,
}));
