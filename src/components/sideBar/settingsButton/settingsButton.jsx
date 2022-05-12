import React from "react";
import { ButtonContainer } from "../buttonsMenu/buttonsComplex.styles";
import CustomButton from "../../customButton/customButton";
import { SvgIcon, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { ButtonTitleText } from "../../drawerMenu/drawerMenu.styles";
import { ReactComponent as Settings } from "../../../assets/sideBarVectors/settings.svg";
const SettingsButton = () => {
  return (
    <>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <SvgIcon component={Settings} />
            <ButtonTitleText>Settings</ButtonTitleText>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>

      {/* <CustomButton>
        <SvgIcon component={Settings} />
        Settings
      </CustomButton> */}
    </>
  );
};

export default SettingsButton;
