//react components...
import React from "react";

//mui components...
import { useTheme } from "@mui/material/styles";
import {
  SvgIcon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
} from "@mui/material";
import {
  SideBarContainer,
  SideBarLogo,
  LogoContainer,
  CloseContainer,
  CustomDivider,
  DownContainer,
  ButtonTitleText,
} from "./sideBar.styles";

//custom components...
import SettingsButton from "./settingsButton/settingsButton";

//icons...
import { ReactComponent as CloseButton } from "../../assets/sideBarVectors/closeButton.svg";
import { ReactComponent as HomeIcon } from "../../assets/sideBarVectors/home.svg";
import { ReactComponent as Calendar } from "../../assets/sideBarVectors/calendar.svg";
import { ReactComponent as Staff } from "../../assets/sideBarVectors/staff.svg";
import { ReactComponent as Clients } from "../../assets/sideBarVectors/clients.svg";
import { ReactComponent as Services } from "../../assets/sideBarVectors/services.svg";
import { ReactComponent as Offers } from "../../assets/sideBarVectors/offers.svg";
import { ReactComponent as Sales } from "../../assets/sideBarVectors/sales.svg";

const SideBar = ({ history }) => {
  const theme = useTheme();
  console.log(history);
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
            <ListItemButton
              button
              onClick={() => history.push(`/${button.title.toLowerCase()}`)}
            >
              <ListItemIcon>
                <SvgIcon component={button.icon} sx={{ mr: "14.5px" }} />
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
