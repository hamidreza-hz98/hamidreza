//react components...
import React, { useState } from "react";

//mui components...
import { Container, Grid } from "@mui/material";
import { BtnContainer, NewClient } from "./clientsListPage.styles";

//custom components...
import SearchButton from "../../components/searchField/searchField";
import ClientsTable from "../../components/clientsTable/clientsTable";
import ModalForm from "../../components/ModalForm/ModalForm";

const ClientsListpage = () => {
  //a hook to consider when modal should open
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <SearchButton />
        </Grid>
        <BtnContainer item xs={6}>
          <NewClient onClick={handleOpenModal}>New Client</NewClient>
          <ModalForm
            newClient={true}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </BtnContainer>
      </Grid>
      <ClientsTable />
    </Container>
  );
};

export default ClientsListpage;
