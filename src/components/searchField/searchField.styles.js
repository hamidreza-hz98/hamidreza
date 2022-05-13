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
});

export const Input = styled(TextField)({
  marginLeft: "1px",
  padding: "0",
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "0",
    outline: "none",
  },
});

export const Icon = styled(SvgIcon)({
  marginLeft: "15px",
  marginTop: "5px",
});
