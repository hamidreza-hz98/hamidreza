//react components...
import React from "react";

//mui components...
import {
  AppointmentDetailsContainer,
  AppointmentTypeDetail,
} from "./appointmentDetails.styles";

const AppointmentDetails = () => {
  return (
    <AppointmentDetailsContainer>
      <AppointmentTypeDetail
        title="Hair Coloring"
        description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
      />
      <AppointmentTypeDetail
        title="Koutan blood"
        description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
      />
      <AppointmentTypeDetail
        title="Blow Dry Premium"
        description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
      />
    </AppointmentDetailsContainer>
  );
};

export default AppointmentDetails;
