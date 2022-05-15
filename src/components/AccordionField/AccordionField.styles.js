import { styled, Typography, Accordion } from "@mui/material";

export const StyledAccordion = styled(Accordion)({
  padding: "20px 0px",
  width: "60%",
  height: "auto",
  marginTop: "30px",
  boxShadow: "0px 8px 34px rgba(10, 31, 68, 0.08)",
});

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
