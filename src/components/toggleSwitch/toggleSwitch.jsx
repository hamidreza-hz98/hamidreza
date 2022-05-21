//react components...
import React, { useState } from "react";

//mui components...
import { FormControlLabel } from "@mui/material";
import {
  CustomSwitch,
  ToggleContainer,
  ToggleName,
} from "./toggleSwitch.styles";

const ToggleSwitch = ({ toggleName, onChange, checked }) => {
  return (
    <ToggleContainer>
      <ToggleName>{toggleName}</ToggleName>
      <FormControlLabel
        control={
          <CustomSwitch onChange={onChange} checked={checked} sx={{ m: 1 }} />
        }
      />
    </ToggleContainer>
  );
};

export default ToggleSwitch;
