import React from "react";
import { SideBarButton } from "./customButton.Styles";

const CustomButton = (props) => {
  return <SideBarButton>{props.children}</SideBarButton>;
};

export default CustomButton;
