import React from "react";

import {
  SideBarContainer,
  LinksContainer,
  MenuBox,
  SideBarLogo,
  LogoContainer,
  SettingsButtonContainer,
  CloseContainer,
  CustomDivider,
} from "./sideBar.styles";
import ButtonsMenu from "./buttonsMenu/buttonsMenu";
import { ReactComponent as CloseButton } from "../../assets/sideBarVectors/closeButton.svg";
import { Divider, SvgIcon } from "@mui/material";
import SettingsButton from "./settingsButton/settingsButton";
import { DownContainer } from "./sideBar.styles";

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
      </LinksContainer>

      <DownContainer>
        <CustomDivider />
        <SettingsButtonContainer>
          <SettingsButton />
        </SettingsButtonContainer>
        <CustomDivider />
        <CloseContainer>
          <SvgIcon component={CloseButton} />
        </CloseContainer>
      </DownContainer>
    </SideBarContainer>
  );
};

export default SideBar;
