import { Container, styled, Typography } from "@mui/material";

export const DataContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  marginTop: "20px",
});

export const DataName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.second,
  fontSize: "16px",
  lineHeight: "24px",
}));

export const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: "16px",
}));
