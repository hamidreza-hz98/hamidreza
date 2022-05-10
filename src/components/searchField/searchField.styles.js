import { InputBase, Paper, styled, SvgIcon } from "@mui/material";

export const FieldContainer = styled(Paper)({
  marginTop: "20px",
  width: "350px",
  height: "48px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(234, 234, 234, 0.4)",
});

export const Input = styled(InputBase)({
  marginLeft: "1px",
  flex: 1,
});

export const Icon = styled(SvgIcon)({
  marginLeft: "15px",
  marginTop: "5px",
});
