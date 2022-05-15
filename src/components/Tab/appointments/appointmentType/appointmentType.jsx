//react components...
import React from "react";

//mui components...
import { Grid } from "@mui/material";
import {
  AppointmentTitle,
  AppointmentDescription,
  TypeContainer,
  PriceContainer,
} from "./appointmentType.styles";

//custom components...
import DetailedCase from "../DetailedCase/DetailedCase";
import OnlineBooking from "../onlineBooking/onlineBooking";
import OutlineBooking from "./OutlineBooking/OutlineBooking";

const AppointmentType = (props) => {
  const { title, description, isOnlineBooking, hasDetails } = props.item;
  return (
    <TypeContainer>
      <Grid container>
        <Grid item xs={9}>
          <AppointmentTitle>{title}</AppointmentTitle>
          <AppointmentDescription>{description}</AppointmentDescription>
          <PriceContainer>
            {hasDetails &&
              props.item.details.map((detail) => {
                return (
                  <DetailedCase
                    key={detail.id}
                    title={detail.title}
                    description={detail.description}
                  />
                );
              })}
          </PriceContainer>
        </Grid>
        <Grid item xs={3} sx={{ mt: "7px" }}>
          {isOnlineBooking ? (
            <OnlineBooking item={props.item} />
          ) : (
            <OutlineBooking price={props.item.price} />
          )}
        </Grid>
      </Grid>
    </TypeContainer>
  );
};

export default AppointmentType;
