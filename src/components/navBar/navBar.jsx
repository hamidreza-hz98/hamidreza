//react components...
import React from "react";

//mui components
import { Avatar, SvgIcon, AppBar } from "@mui/material";
import { NavBox, Right, Text, ToolBar } from "./navbar.styles";

//icons...
import { ReactComponent as NotificationIcon } from "../../assets/navBar/notification.svg";
import { ReactComponent as SearchIcon } from "../../assets/navBar/search.svg";
import profile from "../../assets/profile/profile.png";
import { useLocation, useParams } from "react-router-dom";
import { getRoutePath } from "../sideBar/sideBar";

const navTitles = [
  "Home",
  "Calendar",
  "Clients",
  "Staff",
  "Services",
  "Offers",
  "Sales",
  "Settings",
];

const NavBar = () => {
  const location = useLocation();
  const params = useParams();
  const path = getRoutePath(location, params);
  return (
    <AppBar position="fixed" sx={{ boxShadow: "none" }}>
      <ToolBar>
        <NavBox>
          {navTitles.map((title) => {
            return path.includes(`/${title.toLowerCase()}`) ? (
              <Text> {title} </Text>
            ) : null;
          })}
        </NavBox>
        <NavBox>
          <Right>
            <SvgIcon sx={{ mr: "10px", mt: "2px" }} component={SearchIcon} />
            <SvgIcon sx={{ mr: "10px" }} component={NotificationIcon} />
            <Avatar src={profile} />
          </Right>
        </NavBox>
      </ToolBar>
    </AppBar>
  );
};

export default NavBar;
