//react components...
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectClientById,
  updateClient,
} from "../../store/clients/clientSlice";

//mui components...
import {
  SvgIcon,
  Divider,
  Container,
  Chip,
  FormControlLabel,
  Button,
  Box,
  Grid,
} from "@mui/material";
import {
  ProfileInfoContainer,
  EditButton,
  ClientName,
  AddressTypo,
  EditContainer,
  EditText,
  StatusSwitch,
} from "./clientInfo.styles";

//custom components...
import ProfileData from "../profileData/profiledata";

import ModalForm from "../ModalForm/ModalForm";

//icons...
import { ReactComponent as EditIcon } from "../../assets/profile/edit.svg";
import { statusData } from "../clientsTable/clientsTable";

const ClientInfo = () => {
  //get /:clientId from router and find the current client
  const { clientId } = useParams();
  const clientInfo = useSelector(selectClientById(clientId));
  //dispatch method makes us able to have access to our reducers
  const dispatch = useDispatch();
  //hook to open modal when clicked the Edit button
  const [openModal, setOpenModal] = useState(false);

  //functionality of changing state...
  const handleChangeStatus = (e) => {
    const activeStatus = e.target.name;
    statusData.map((item) => {
      return (
        activeStatus === item.key &&
        dispatch(
          updateClient({
            id: clientId,
            changes: { status: activeStatus },
          })
        )
      );
    });
  };

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
        <ClientName sx={{ mt: 2 }}>
          {statusData.map((item) => {
            return (
              clientInfo.status === item.key && (
                <Chip label={item.key} sx={{ bgcolor: item.color }} />
              )
            );
          })}
        </ClientName>
        <ClientName>
          <Button
            sx={{
              width: "80%",
              mt: "20px",
            }}
          >
            New appointment
          </Button>
        </ClientName>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          {statusData.map((item) => {
            return (
              <FormControlLabel
                onChange={handleChangeStatus}
                checked={item.key === clientInfo.status}
                label={item.key}
                name={item.key}
                control={<StatusSwitch sx={{ m: 1 }} />}
              />
            );
          })}
        </Grid>

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
