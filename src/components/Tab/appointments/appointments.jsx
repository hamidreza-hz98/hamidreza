import React from "react";
import { AppointmentsTabContainer, Left, Item } from "./appointments.styles";
import Day from "./day/day";
const AppointmentsTab = () => {
  return (
    <AppointmentsTabContainer>
      <Item container>
        <Day />
      </Item>
    </AppointmentsTabContainer>
  );
};

export default AppointmentsTab;
