//react components...
import React from "react";

//custom components...
import { AppointmentDetailsContainer } from "./appointmentDetails.styles";

const AppointmentDetails = () => {
  return (
    <AppointmentDetailsContainer>
      <AppointmentType
        sx={{ ml: "10px" }}
        title="Hair Coloring"
        description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
      />
      <AppointmentType
        sx={{ ml: "10px" }}
        title="Koutan blood"
        description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
      />
      <AppointmentType
        sx={{ ml: "10px" }}
        title="Blow Dry Premium"
        description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
      />
    </AppointmentDetailsContainer>
  );
};

export default AppointmentDetails;
