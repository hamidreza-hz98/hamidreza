import React from "react";
import {
  SideBarContainer,
  SideBarLogo,
  LogoContainer,
  CloseContainer,
  CustomDivider,
} from "./sideBar.styles";
import { ReactComponent as CloseButton } from "../../assets/sideBarVectors/closeButton.svg";
import {
  SvgIcon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
} from "@mui/material";
import SettingsButton from "./settingsButton/settingsButton";
import { DownContainer, ButtonTitleText } from "./sideBar.styles";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as HomeIcon } from "../../assets/sideBarVectors/home.svg";
import { ReactComponent as Calendar } from "../../assets/sideBarVectors/calendar.svg";
import { ReactComponent as Staff } from "../../assets/sideBarVectors/staff.svg";
import { ReactComponent as Clients } from "../../assets/sideBarVectors/clients.svg";
import { ReactComponent as Services } from "../../assets/sideBarVectors/services.svg";
import { ReactComponent as Offers } from "../../assets/sideBarVectors/offers.svg";
import { ReactComponent as Sales } from "../../assets/sideBarVectors/sales.svg";

const SideBar = () => {
  const theme = useTheme();
  const buttons = [
    {
      title: "Home",
      id: 1,
      icon: HomeIcon,
    },
    {
      title: "Calendar",
      id: 2,
      icon: Calendar,
    },
    {
      title: "Clients",
      id: 3,
      icon: Clients,
    },
    {
      title: "Staff",
      id: 4,
      icon: Staff,
    },
    {
      title: "Services",
      id: 5,
      icon: Services,
    },
    {
      title: "Offers",
      id: 6,
      icon: Offers,
    },
    {
      title: "Sales",
      id: 7,
      icon: Sales,
    },
  ];
  return (
    <SideBarContainer variant="persistent" anchor="left" open>
      <LogoContainer>
        <SideBarLogo />
      </LogoContainer>

      <List>
        {buttons.map((button) => (
          <ListItem key={button.id} sx={{ mr: theme.spacing(2) }}>
            <ListItemButton>
              <ListItemIcon>
                <SvgIcon component={button.icon} />
                <ButtonTitleText>{button.title}</ButtonTitleText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ mt: "auto" }}>
        <DownContainer>
          <CustomDivider />
          <SettingsButton />
          <CustomDivider />
          <CloseContainer>
            <SvgIcon component={CloseButton} />
          </CloseContainer>
        </DownContainer>
      </List>
    </SideBarContainer>
  );
};

export default SideBar;
