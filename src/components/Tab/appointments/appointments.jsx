//react components...
import React from "react";

//mui components...
import { Divider, Stack } from "@mui/material";

//custom components...
import DayDetails from "./day/day";

const AppointmentsTab = () => {
  const appointmentsData = [
    {
      date: "30 Nov",
      weekday: "Monday",
      taskStatus: "Started",
      id: 1,
      cases: [
        {
          id: 1,
          title: "Beard Package",
          price: "KD 100",
          description: "3 services, 1h30min",
          hasDetails: true,
          isOnlineBooking: true,
          previousPrice: "KD 125",
          details: [
            {
              title: "Hair Coloring",
              description: "blood of crist, 40m with SoSo Al-Sherrer, 3:45pm",
            },
            {
              title: "Koutan blood",
              description: "blood of crist, 40m with SoSo Al-Sherrer, 3:45pm",
            },
            {
              title: "Blow Dry Premium",
              description: "blood of crist, 40m with SoSo Al-Sherrer, 3:45pm",
            },
          ],
        },
        {
          id: 2,
          title: "Hair Coloring",
          price: "KD 90",
          description: "blood of crist, 40m with SoSo Al-Sherrer, 3:45pm",
          hasDetails: false,
          isOnlineBooking: false,
        },
        {
          id: 3,
          title: "Hair Coloring",
          price: "KD 90",
          description: "blood of crist, 40m with SoSo Al-Sherrer, 3:45pm",
          hasDetails: false,
          isOnlineBooking: false,
        },
      ],
    },
    {
      date: "24 Oct",
      weekday: "Tuesday",
      taskStatus: "Completed",
      id: 2,
      cases: [
        {
          id: 1,
          title: "Hair Coloring",
          price: "KD 60",
          description: "blood of crist, 40m with SoSo Al-Sherrer, 3:45pm",
          hasDetails: false,
          isOnlineBooking: true,
          previousPrice: "KD 90",
        },
      ],
    },
    {
      date: "30 Nov",
      weekday: "Monday",
      taskStatus: "Completed",
      id: 3,
      cases: [
        {
          id: 1,
          title: "Hair Coloring",
          price: "KD 80",
          description: "blood of crist, 40m with SoSo Al-Sherrer, 3:45pm",
          hasDetails: false,
          isOnlineBooking: false,
        },
      ],
    },
  ];
  return (
    <Stack>
      {appointmentsData.map((appointment) => {
        return (
          <>
            <DayDetails key={appointment.id} appointment={appointment} />
            <Divider />
          </>
        );
      })}
    </Stack>
  );
};

export default AppointmentsTab;
