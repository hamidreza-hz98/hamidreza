import { styled } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

export const PhoneNumber = styled(PhoneInput)(({ theme }) => ({
  "& .form-control": {
    width: "100%",
    border: "1px solid rgba(64, 72, 214, 0.4)",
    color: theme.palette.text.main,
    borderRadius: "8px",
    height: "48px",
    fontSize: "14px",
  },
  "& .form-control:focus": {
    border: "2px solid rgba(64, 72, 214, 0.4)",
    boxShadow: "none",
  },
  "& .form-control:hover": {
    borderColor: "rgba(64, 72, 214, 0.4)",
  },
}));
