//react components...
import React from "react";

//mui components
import { Grid } from "@mui/material";
import {
  AppointmentsTabContainer,
  ProfilePageContainer,
} from "./clientProfilePage.styles";

//custom components...
import ClientInfo from "../../components/clientInfo/clientInfo";
import SalesReport from "../../components/salesReport/salesReport";
import CustomTab from "../../components/Tab/tab";

const ClientProfilePage = ({ match }) => {
  const { clientId } = match.params;
  console.log(clientId);
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
