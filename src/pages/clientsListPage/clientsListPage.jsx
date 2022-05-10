import React from "react";
import { Box, Container, Grid } from "@mui/material";

import SearchButton from "../../components/searchField/searchField";
import { NewClient, Row } from "./clientsListPage.styles";
import ClientsTable from "../../components/clientsTable/clientsTable";

const ClientsListpage = () => {
  return (
    <Grid item sx={{ flexGrid: 1 }}>
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
