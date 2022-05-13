import React from "react";
import { Box, Container, Grid } from "@mui/material";

import SearchButton from "../../components/searchField/searchField";
import { NewClient, Row } from "./clientsListPage.styles";
import ClientsTable from "../../components/clientsTable/clientsTable";

const ClientsListpage = () => {
  return (
    // TODO: Change grid to type of container
    // REMEMBER: Container is a row and item is your column xs={}
    <Grid item sx={{ flexGrid: 1 }}>
      {/* TODO: DO NOT MAKE SOMETHING YOU FRAMEWORK ALREADY PROVIDES ! */}
      <Row>
        <SearchButton />
        <NewClient>New Client</NewClient>
      </Row>
      <Container>
        <ClientsTable />
      </Container>
    </Grid>
  );
};

export default ClientsListpage;
