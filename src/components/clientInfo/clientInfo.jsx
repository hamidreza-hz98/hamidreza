//react components...
import React, { useState, useEffect } from "react";

//mui components...
import { SvgIcon, Grid, Divider, Container } from "@mui/material";
import { useParams } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { selectClientById } from "../../store/clients/clientSlice";

const ClientInfo = () => {
  const { clientId } = useParams();

  const clientInfo = useSelector(selectClientById(clientId));

  console.log(clientInfo);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ProfileInfoContainer>
        <EditContainer>
          <EditButton
            onClick={() => setOpenModal(true)}
            startIcon={<SvgIcon component={EditIcon} />}
          >
            <EditText>Edit</EditText>
          </EditButton>
        </EditContainer>
        <ClientName>
          {clientInfo?.firstName} {clientInfo?.lastName}
        </ClientName>
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

        <Divider sx={{ marginTop: "2rem" }} />

        <ProfileData dataName="Mobile" value={`+${clientInfo?.mobile}`} />
        <ProfileData dataName="Email" value={clientInfo?.email} />
        <ProfileData
          dataName="Date of Birth"
          value={`${clientInfo?.birthDay} ${clientInfo?.birthMonth} ${clientInfo?.birthYear}`}
        />
        <ProfileData dataName="Gender" value={clientInfo?.gender} />
        <ProfileData
          dataName="Client Notes"
          value={clientInfo?.notes ? clientInfo?.notes : "-"}
        />

        <Divider sx={{ marginTop: "2rem" }} />
        <Container sx={{ marginTop: "2rem" }}>
          <AddressTypo>Address</AddressTypo>
        </Container>
        <ProfileData
          dataName="Area"
          value={clientInfo?.area ? clientInfo?.area : "-"}
        />
        <ProfileData
          dataName="Block"
          value={clientInfo?.block ? clientInfo?.block : "-"}
        />
        <ProfileData
          dataName="Street"
          value={clientInfo?.street ? clientInfo?.street : "-"}
        />
        <ProfileData
          dataName="Avenue"
          value={clientInfo?.avenue ? clientInfo?.avenue : "-"}
        />
        <ProfileData
          dataName="House/Building/Apartment #"
          value={clientInfo?.houseNumber ? clientInfo?.houseNumber : "-"}
        />
      </ProfileInfoContainer>
      {openModal && (
        <ModalForm
          newClient={false}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default ClientInfo;
