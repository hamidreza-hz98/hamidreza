//react components...
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

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
  LogoContainer,
  CloseContainer,
  CustomDivider,
  DownContainer,
  ButtonTitleText,
} from "./sideBar.styles";

//icons...
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { ReactComponent as CloseButton } from "../../assets/sideBarVectors/closeButton.svg";
import { ReactComponent as HomeIcon } from "../../assets/sideBarVectors/home.svg";
import { ReactComponent as Calendar } from "../../assets/sideBarVectors/calendar.svg";
import { ReactComponent as Staff } from "../../assets/sideBarVectors/staff.svg";
import { ReactComponent as Clients } from "../../assets/sideBarVectors/clients.svg";
import { ReactComponent as Services } from "../../assets/sideBarVectors/services.svg";
import { ReactComponent as Offers } from "../../assets/sideBarVectors/offers.svg";
import { ReactComponent as Sales } from "../../assets/sideBarVectors/sales.svg";
import { ReactComponent as Settings } from "../../assets/sideBarVectors/settings.svg";

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

export const getRoutePath = (location, params) => {
  const pathname = location.pathname;

  if (!Object.keys(params).length) {
    return pathname;
  }
  const path = pathname;
  Object.entries(params).forEach((a) => {
    const paramName = a[0],
      paramValue = a[1];
    if (paramValue) {
      // eslint-disable-next-line
      path = path.replace(paramValue, ":".concat(paramName));
    }
  });
  return path;
};

const SideBar = () => {
  const theme = useTheme();
  const location = useLocation();
  const params = useParams();
  const path = getRoutePath(location, params);

  return (
    <SideBarContainer variant="persistent" anchor="left" open>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <List>
        {buttons.map((button) => (
          <ListItem key={button.id} sx={{ mr: theme.spacing(2) }}>
            <ListItemButton
              selected={
                path.includes(`/${button.title.toLowerCase()}`) ? true : false
              }
              component={Link}
              to={`/${button.title.toLowerCase()}`}
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
          <ListItem>
            <ListItemButton
              selected={path.includes(`/settings`) ? true : false}
              className="active"
              component={Link}
              to="/settings"
            >
              <ListItemIcon>
                <SvgIcon component={Settings} />
                <ButtonTitleText>Settings</ButtonTitleText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <CustomDivider />
          <CloseContainer>
            <SvgIcon component={CloseButton} sx={{ cursor: "pointer" }} />
          </CloseContainer>
        </DownContainer>
      </List>
    </SideBarContainer>
  );
};

export default SideBar;
