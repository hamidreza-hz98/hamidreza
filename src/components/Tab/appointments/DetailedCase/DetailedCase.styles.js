import { styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "20px",
  marginLeft: "18px",
  paddingTop: "4px",
}));
export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.second,
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  marginLeft: "18px",
  paddingBottom: "4px",
}));
