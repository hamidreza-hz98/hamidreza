import React from "react";

import Toolbar from "@mui/material/Toolbar";

import { ReactComponent as SearchIcon } from "../../assets/navBar/search.svg";
import { ReactComponent as NotificationIcon } from "../../assets/navBar/notification.svg";
import profile from "../../assets/profile/profile.png";
import { Header, Right, Text } from "./navbar.styles";
import { Avatar, SvgIcon } from "@mui/material";

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Text variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Clients
        </Text>
        <Right>
          <SvgIcon
            sx={{ marginRight: "10px", marginTop: "2px" }}
            component={SearchIcon}
          />
          <SvgIcon sx={{ marginRight: "10px" }} component={NotificationIcon} />
          <Avatar src={profile} />
        </Right>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
