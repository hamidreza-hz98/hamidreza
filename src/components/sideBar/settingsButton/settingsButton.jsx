import React from "react";
import { ButtonContainer } from "../buttonsMenu/buttonsComplex.styles";
import CustomButton from "../../customButton/customButton";
import { SvgIcon } from "@mui/material";
import { ReactComponent as Settings } from "../../../assets/sideBarVectors/settings.svg";
const SettingsButton = () => {
  return (
    <ButtonContainer>
      <CustomButton>
        <SvgIcon component={Settings} />
        Settings
      </CustomButton>
    </ButtonContainer>
  );
};

export default SettingsButton;
