import { TextField } from "@mui/material";
import React from "react";

import { styled } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  borderColor: "1px solid rgba(64, 72, 214, 0.4)",
  borderRadius: "8px",
  height: "48px",
}));

const CustomField = () => {
  return <StyledTextField />;
};

export default CustomField;
