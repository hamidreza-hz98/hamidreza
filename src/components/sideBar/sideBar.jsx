import React from "react";

import {
  SideBarContainer,
  LinksContainer,
  MenuBox,
  SideBarLogo,
  LogoContainer,
  SettingsButtonContainer,
  CloseContainer,
} from "./sideBar.styles";
import ButtonsMenu from "./buttonsMenu/buttonsMenu";
import { ReactComponent as CloseButton } from "../../assets/sideBarVectors/closeButton.svg";
import { SvgIcon } from "@mui/material";
import SettingsButton from "./settingsButton/settingsButton";

const SideBar = () => {
  return (
    <SideBarContainer>
      <LogoContainer>
        <SideBarLogo />
      </LogoContainer>

      <LinksContainer>
        <MenuBox>
          <ButtonsMenu />
        </MenuBox>
        <SettingsButtonContainer>
          <SettingsButton />
        </SettingsButtonContainer>
        <CloseContainer>
          <SvgIcon component={CloseButton} />
        </CloseContainer>
      </LinksContainer>
    </SideBarContainer>
  );
};

export default SideBar;
