//react components...
import React from "react";

//mui components
import { Avatar, SvgIcon, AppBar } from "@mui/material";
import { NavBox, Right, Text, ToolBar } from "./navbar.styles";

//icons...
import { ReactComponent as NotificationIcon } from "../../assets/navBar/notification.svg";
import { ReactComponent as SearchIcon } from "../../assets/navBar/search.svg";
import profile from "../../assets/profile/profile.png";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
