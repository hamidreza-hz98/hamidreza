import { styled, SvgIcon, TextField } from "@mui/material";

export const Field = styled(TextField)({
  marginTop: "20px",
  width: "350px",
  height: "48px",
  display: "flex",
  alignItems: "start",
  borderRadius: "8px",
  justifyContent: "center",
  background: "rgba(234, 234, 234, 0.4)",
  "& .MuiInput-root": {
    width: "100%",
  },
});

export const Icon = styled(SvgIcon)({
  marginLeft: "15px",
  marginTop: "5px",
});
