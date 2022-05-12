import { Grid } from "@mui/material";
import React from "react";
import {
  AppointmentsTabContainer,
  ProfilePageContainer,
} from "./clientProfilePage.styles";

import ClientInfo from "../../components/clientInfo/clientInfo";
import SalesReport from "../../components/salesReport/salesReport";
import CustomTab from "../../components/Tab/tab";

const ClientProfilePage = () => {
  return (
    <ProfilePageContainer container spacing={2}>
      <Grid item xs={3}>
        <ClientInfo />
      </Grid>
      <Grid item xs={9}>
        <SalesReport />
        <AppointmentsTabContainer>
          <CustomTab />
        </AppointmentsTabContainer>
      </Grid>
    </ProfilePageContainer>
  );
};

export default ClientProfilePage;
