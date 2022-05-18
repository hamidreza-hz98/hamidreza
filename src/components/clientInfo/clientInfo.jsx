//react components...
import React, { useState } from "react";

//mui components...
import { SvgIcon, Grid, Divider, Container } from "@mui/material";
import {
  ProfileInfoContainer,
  NewAppointmentButton,
  EditButton,
  ClientName,
  ToggleGroup,
  AddressTypo,
  EditContainer,
  EditText,
} from "./clientInfo.styles";

//custom components...
import ProfileData from "../profileData/profiledata";
import ToggleSwitch from "../toggleSwitch/toggleSwitch";
import ModalForm from "../ModalForm/ModalForm";

//icons...
import { ReactComponent as EditIcon } from "../../assets/profile/edit.svg";

const ClientInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <ProfileInfoContainer>
      <EditContainer>
        <EditButton
          onClick={setOpenModal}
          startIcon={<SvgIcon component={EditIcon} />}
        >
          <EditText>Edit</EditText>
        </EditButton>
      </EditContainer>
      <ClientName>Hessa Al Hamlan</ClientName>
      <ClientName>
        <NewAppointmentButton>New appointment</NewAppointmentButton>
      </ClientName>
      <ToggleGroup container>
        <Grid item>
          <ToggleSwitch
            toggleName="Block"
            sx={{ justifyContent: "start" }}
            defaultChecked={false}
          />
        </Grid>
        <Grid item>
          <ToggleSwitch
            toggleName="VIP"
            sx={{ justifyContent: "start" }}
            defaultChecked={true}
          />
        </Grid>
      </ToggleGroup>
      <ModalForm
        openModal={openModal}
        setOpenModal={setOpenModal}
        newClient={false}
      />

      <Divider sx={{ marginTop: "2rem" }} />

      <ProfileData dataName="Mobile" value="+965 60 00 12 87" />
      <ProfileData dataName="Email" value="h.alhamlan@gmail.com" />
      <ProfileData dataName="Date of Birth" value="11 July 1985" />
      <ProfileData dataName="Gender" value="Female" />
      <ProfileData
        dataName="Client Notes"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />

      <Divider sx={{ marginTop: "2rem" }} />
      <Container sx={{ marginTop: "2rem" }}>
        <AddressTypo>Address</AddressTypo>
      </Container>
      <ProfileData dataName="Area" value="Sebastiana Chosta" />
      <ProfileData dataName="Block" value="Opanoun 12" />
      <ProfileData dataName="Street" value="Linkolna 301" />
      <ProfileData dataName="Avenue" value="Airport Street (SY-NC-TC)" />
      <ProfileData dataName="House/Building/Apartment #" value="12" />
    </ProfileInfoContainer>
  );
};

export default ClientInfo;
