import { Grid } from "@mui/material";
import React from "react";
import {
  AppointmentsTabContainer,
  ProfilePageContainer,
  SalesReportContainer,
} from "./clientProfilePage.styles";

import ClientInfo from "../../components/clientInfo/clientInfo";

const ClientProfilePage = () => {
  return (
    <ProfilePageContainer container spacing={2}>
      <Grid item xs={3}>
        <ClientInfo />
      </Grid>

      <Grid item xs={9}>
        <SalesReportContainer>
          {/* 
            the sales box goes here
          */}
        </SalesReportContainer>
        <AppointmentsTabContainer></AppointmentsTabContainer>
      </Grid>
    </ProfilePageContainer>
  );
};

export default ClientProfilePage;
