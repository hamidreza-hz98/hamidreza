//react components...
import React from "react";

//mui components
import { Grid } from "@mui/material";
import { AppointmentsTabContainer } from "./clientProfilePage.styles";

//custom components...
import ClientInfo from "../../components/clientInfo/clientInfo";
import SalesReport from "../../components/salesReport/salesReport";
import CustomTab from "../../components/Tab/tab";

const ClientProfilePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ClientInfo />
        </Grid>
        <Grid item xs={8}>
          <SalesReport />
          <AppointmentsTabContainer>
            <CustomTab />
          </AppointmentsTabContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default ClientProfilePage;
