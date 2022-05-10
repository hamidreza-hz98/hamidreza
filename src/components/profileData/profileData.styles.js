import { Container, styled, Typography } from "@mui/material";

export const DataContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  marginTop: "20px",
});

export const DataName = styled(Typography)({
  color: "#4E5D78",
  fontSize: "16px",
  lineHeight: "24px",
});

export const Value = styled(Typography)({
  color: "#0A1F44",
  fontSize: "16px",
});
