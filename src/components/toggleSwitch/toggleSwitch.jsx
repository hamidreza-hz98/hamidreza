import { FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import React from "react";
import {
  CustomSwitch,
  ToggleContainer,
  ToggleName,
} from "./toggleSwitch.styles";

const ToggleSwitch = (props) => {
  return (
    <ToggleContainer>
      <ToggleName>{props.toggleName}</ToggleName>
      <FormControlLabel
        control={
          <CustomSwitch sx={{ m: 1 }} defaultChecked={props.defaultChecked} />
        }
      />
    </ToggleContainer>
  );
};

export default ToggleSwitch;
