//react components...
import React from "react";

//mui components...
import { Container, Grid } from "@mui/material";
import { BtnContainer, NewClient } from "./clientsListPage.styles";

//custom components...
import SearchButton from "../../components/searchField/searchField";
import ClientsTable from "../../components/clientsTable/clientsTable";
import ModalForm from "../../components/ModalForm/ModalForm";

const ClientsListpage = () => {
  return (
    <Container>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={6}>
          <SearchButton />
        </Grid>
        <BtnContainer item xs={6}>
          <NewClient>New Client</NewClient>
          <ModalForm />
        </BtnContainer>
      </Grid>
      <ClientsTable />
    </Container>
  );
};

export default ClientsListpage;
