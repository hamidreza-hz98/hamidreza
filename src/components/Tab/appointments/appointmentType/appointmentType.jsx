//react components...
import React from "react";

//mui components...
import { Box, Container } from "@mui/material";
import {
  AppointmentTitle,
  AppointmentDescription,
  PriceContainer,
} from "./appointmentType.styles";

//custom components...
import DetailedCase from "../DetailedCase/DetailedCase";
import OnlineBooking from "../onlineBooking/onlineBooking";
import OutlineBooking from "./OutlineBooking/OutlineBooking";

const AppointmentType = ({ item }) => {
  const { title, description, isOnlineBooking, hasDetails } = item;
  return (
    <Container sx={{ my: "4px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box>
          <AppointmentTitle>{title}</AppointmentTitle>
          <AppointmentDescription>{description}</AppointmentDescription>
        </Box>
        <Box>
          {isOnlineBooking ? (
            <OnlineBooking item={item} />
          ) : (
            <OutlineBooking price={item.price} />
          )}
        </Box>
      </Box>
      <Box>
        {hasDetails ? (
          <PriceContainer>
            <DetailedCase
              title="Hair Coloring"
              description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
            />
            <DetailedCase
              title="Koutan blood"
              description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
            />
            <DetailedCase
              title="Blow Dry Premium"
              description="blood of crist, 40m with SoSo Al-Sherrer, 3:45pm"
            />
          </PriceContainer>
        ) : null}
      </Box>
    </Container>
  );
};

export default AppointmentType;
