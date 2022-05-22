import { styled, AppBar, Typography, Button, Toolbar } from "@mui/material";

export const ModalHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.base.main,
  boxShadow: "inset 0px -1px 0px rgba(78, 93, 120, 0.25)",
}));

export const ModalToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "80px",
});

export const SubmitButton = styled(Button)({
  textTransform: "capitalize",
  height: "48px",
  width: "106px",
  fontSize: "16px",
  lineHeight: "20px",
  borderRadius: "8px",
});

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "22.5px",
}));
