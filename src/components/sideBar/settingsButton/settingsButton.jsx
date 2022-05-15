//react components...
import React from "react";

//mui components...
import { SvgIcon, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { ButtonTitleText } from "../../sideBar/sideBar.styles";

//custom components
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
    </>
  );
};

export default SettingsButton;
