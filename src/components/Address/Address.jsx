import { TextField } from "@mui/material";
import React from "react";

const Address = () => {
  return (
    <>
      <TextField
        fullWidth
        label="Area"
        placeholder="Example: Sebastiana Chosta"
      />
      <TextField fullWidth label="Block" placeholder="Example: Opanoun 12" />
      <TextField fullWidth label="Street" placeholder="Example: Linkolna 301" />
      <TextField
        fullWidth
        label="Avenue"
        placeholder="Example: Airport Street (SY-NC-TC)"
      />
      <TextField
        fullWidth
        label="House number / Building / Apartment"
        placeholder="Example: 12"
      />
    </>
  );
};

export default Address;
