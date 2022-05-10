import { Box, styled, TableCell } from "@mui/material";

export const StatusCell = styled(Box)({
  backgroundColor: "#FCF3E4",
  borderRadius: "8px",
  width: "80px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2",
});

export const EmailCell = styled(TableCell)({
  color: "#4048D6",
  padding: "2px",
});

export const Mobilecell = styled(TableCell)({
  color: "#4E5D78",
  padding: "2px",
});
