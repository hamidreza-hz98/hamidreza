//react components...
import React from "react";

//mui components...
import { Grid } from "@mui/material";
import { DayContainer } from "./day.styles";

//custom components...
import AppointmentType from "../appointmentType/appointmentType";
import DateAndStatus from "../DateAndStatus/DateAndStatus";

const DayDetails = ({ appointment }) => {
  const { date, weekday, taskStatus, cases } = appointment;
  return (
    <DayContainer container>
      <Grid item xs={2}>
        <DateAndStatus date={date} weekday={weekday} taskStatus={taskStatus} />
      </Grid>
      <Grid item xs={10}>
        {cases.map((item) => {
          return (
            <>
              <AppointmentType key={item.id} item={item} />
            </>
          );
        })}
      </Grid>
    </DayContainer>
  );
};

export default DayDetails;
