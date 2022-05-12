import React from "react";
import {
  AppointmentTitle,
  AppointmentDescription,
  TypeContainer,
} from "./appointmentType.styles";

const AppointmentType = (props) => {
  return (
    <TypeContainer>
      <AppointmentTitle>{props.title}</AppointmentTitle>
      <AppointmentDescription>{props.description}</AppointmentDescription>
    </TypeContainer>
  );
};

export default AppointmentType;
