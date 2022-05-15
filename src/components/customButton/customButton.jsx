//react components...
import React from "react";

//mui components...
import { SideBarButton } from "./customButton.Styles";

const CustomButton = (props) => {
  return <SideBarButton>{props.children}</SideBarButton>;
};

export default CustomButton;
