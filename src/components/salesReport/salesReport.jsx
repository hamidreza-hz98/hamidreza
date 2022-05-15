//react components...
import React from "react";

//mui components...
import { Grid } from "@mui/material";
import {
  BookingContainer,
  ReportAmountText,
  ReportContainer,
  ReportTypeText,
  SalesReportContainer,
  BookingTypeText,
  BookingBox,
  BookingAmount,
} from "./salesReport.styles";

const SalesReport = () => {
  return (
    <SalesReportContainer>
      <Grid container sx={{ height: "40%" }}>
        <ReportContainer item xs={6}>
          <ReportAmountText>KD 0</ReportAmountText>
          <ReportTypeText>Total Sales</ReportTypeText>
        </ReportContainer>
        <ReportContainer item xs={6}>
          <ReportAmountText>KD 0</ReportAmountText>
          <ReportTypeText>Outstanding</ReportTypeText>
        </ReportContainer>
      </Grid>

      {/* Booking information comes here... */}

      <BookingContainer container sx={{ gap: 2, height: "60%" }}>
        <BookingBox item sx={3}>
          <BookingTypeText>All Bookings</BookingTypeText>
          <BookingAmount>9</BookingAmount>
        </BookingBox>
        <BookingBox item sx={3}>
          <BookingTypeText>Completed</BookingTypeText>
          <BookingAmount>6</BookingAmount>
        </BookingBox>
        <BookingBox item sx={3}>
          <BookingTypeText>Cancelled</BookingTypeText>
          <BookingAmount>2</BookingAmount>
        </BookingBox>
        <BookingBox item sx={3}>
          <BookingTypeText>No Shows</BookingTypeText>
          <BookingAmount>1</BookingAmount>
        </BookingBox>
      </BookingContainer>
    </SalesReportContainer>
  );
};

export default SalesReport;
