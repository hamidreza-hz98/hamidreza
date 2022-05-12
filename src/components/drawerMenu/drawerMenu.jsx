import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import { SvgIcon } from "@mui/material";
import SettingsButton from "../sideBar/settingsButton/settingsButton";
import Color from "color";
//side bar vectors...
import { ReactComponent as SearchIcon } from "../../assets/navBar/search.svg";
import { ReactComponent as HomeIcon } from "../../assets/sideBarVectors/home.svg";
import { ReactComponent as Calendar } from "../../assets/sideBarVectors/calendar.svg";
import { ReactComponent as Staff } from "../../assets/sideBarVectors/staff.svg";
import { ReactComponent as Clients } from "../../assets/sideBarVectors/clients.svg";
import { ReactComponent as Services } from "../../assets/sideBarVectors/services.svg";
import { ReactComponent as Offers } from "../../assets/sideBarVectors/offers.svg";
import { ReactComponent as Sales } from "../../assets/sideBarVectors/sales.svg";
import { ReactComponent as CloseButton } from "../../assets/sideBarVectors/closeButton.svg";
import { ReactComponent as NotificationIcon } from "../../assets/navBar/notification.svg";
import profile from "../../assets/profile/profile.png";
import {
  Right,
  Text,
  ToolBar,
  NavBox,
  SideBarLogo,
  LogoContainer,
  SideBarContainer,
  ButtonTitleText,
  DownContainer,
  CustomDivider,
  CloseContainer,
} from "./drawerMenu.styles";
import { Routes, Route } from "react-router-dom";
import ClientsListpage from "../../pages/clientsListPage/clientsListPage";
import ClientProfilePage from "../../pages/clientProfilePage/clientProfilePage";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    backgroundColor: Color(`${theme.palette.base.second}`).alpha(0.2).string(),
    width: "100vh",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppDrawer = () => {
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
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <ToolBar>
          <NavBox>
            <Text>Clients</Text>
          </NavBox>

          <NavBox>
            <Right>
              <SvgIcon
                sx={{ marginRight: "10px", marginTop: "2px" }}
                component={SearchIcon}
              />
              <SvgIcon
                sx={{ marginRight: "10px" }}
                component={NotificationIcon}
              />
              <Avatar src={profile} />
            </Right>
          </NavBox>
        </ToolBar>
      </AppBar>

      <SideBarContainer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open
      >
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
      <Main open>
        <DrawerHeader />
        <Routes>
          <Route path="/" exact element={<ClientsListpage />} />
          <Route path="/profile" exact element={<ClientProfilePage />} />
        </Routes>
      </Main>
    </Box>
  );
};

export default AppDrawer;
