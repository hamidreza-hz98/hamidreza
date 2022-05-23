//react components...
import React, { useState } from "react";
import { allClients } from "../../store/clients/clientSlice";

//mui components...
import { Button, Container, Grid } from "@mui/material";
import { BtnContainer, NewClient } from "./clientsListPage.styles";

//custom components...
import SearchButton from "../../components/searchField/searchField";
import ClientsTable from "../../components/clientsTable/clientsTable";
import ModalForm from "../../components/ModalForm/ModalForm";
import { useSelector } from "react-redux";

const ClientsListpage = () => {
  //a hook to consider when modal should open
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  //code below provides us to search inside of clients table
  const [search, setSearch] = useState("");
  const clients = useSelector(allClients);
  const filteredClients = clients.filter((client) => {
    const name = client.firstName + client.lastName;
    return name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Container>
      <Grid container sx={{ mt: "-20px" }}>
        <Grid item xs={6}>
          <SearchButton onChange={(e) => setSearch(e.target.value)} />
        </Grid>
        <BtnContainer item xs={6}>
          <NewClient onClick={handleOpenModal}>New Client</NewClient>
          {openModal && (
            <ModalForm
              newClient={true}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}
        </BtnContainer>
      </Grid>
      <ClientsTable filteredClients={filteredClients} />
    </Container>
  );
};

export default ClientsListpage;
