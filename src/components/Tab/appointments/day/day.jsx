import React from "react";
import { DayContainer } from "./day.styles";
import { Grid } from "@mui/material";
import AppointmentType from "../appointmentType/appointmentType";
import AppointmentDetails from "../appointmentType/appointmentDetails/appointmentDetails";

const Day = (props) => {
  return (
    <DayContainer container>
      <Grid item xs={3}>
        Dates and Status
      </Grid>
      <Grid item xs={9}>
        <AppointmentType
          title="Beard Package"
          description="3 services, 1h30min"
        />
        <AppointmentDetails />
        <AppointmentType
          title="Hair Coloring"
          description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
        />
        <AppointmentType
          title="Hair Coloring"
          description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
        />
      </Grid>
    </DayContainer>
  );
};

export default Day;
