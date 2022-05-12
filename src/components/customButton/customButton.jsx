import React from "react";
import { SideBarButton } from "./customButton.Styles";

const CustomButton = (props) => {
  return <SideBarButton active={props.active}>{props.children}</SideBarButton>;
};

export default CustomButton;
