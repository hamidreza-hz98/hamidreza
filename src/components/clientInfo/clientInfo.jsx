//react components...
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectClientById,
  updateClient,
} from "../../store/clients/clientSlice";

//mui components...
import { SvgIcon, Grid, Divider, Container, Chip, Button } from "@mui/material";
import {
  ToggleGroup,
  ProfileInfoContainer,
  EditButton,
  ClientName,
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

const statusList = [
  { name: "VIP", color: "#FCF3E4" },
  { name: "Block", color: "#FFE7EB" },
  { name: "Regular", color: "#FFE7EB" },
  { name: "New", color: "#E4FAF7" },
];

const ClientInfo = () => {
  //get /:clientId from router and find the current client
  const { clientId } = useParams();
  const clientInfo = useSelector(selectClientById(clientId));
  //dispatch method makes us able to have access to our reducers
  const dispatch = useDispatch();
  //hook to open modal when clicked the Edit button
  const [openModal, setOpenModal] = useState(false);

  //user wont be able to activate both Block and VIP at the same time thanks to this code...:
  const [vipChecked, setVipChecked] = useState(
    clientInfo.status !== "VIP" ? true : false
  );
  const [blockChecked, setBlockChecked] = useState(false);
  const handleBlockChecked = () => {
    setBlockChecked(!blockChecked);
    return vipChecked ? setVipChecked(false) : null;
  };
  const handleVipChecked = () => {
    setVipChecked(!vipChecked);
    dispatch(
      updateClient({
        id: clientId,
        changes: { status: vipChecked ? "New" : "VIP" },
      })
    );
    return blockChecked ? setBlockChecked(false) : null;
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
        <ClientName>
          <Chip
            label={vipChecked ? "VIP" : "Block"}
            sx={{
              mt: "14px",
              backgroundColor: vipChecked ? "#FCF3E4" : "#FFE7EB",
              display: vipChecked || blockChecked ? "flex-inline" : "none",
            }}
          />
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
        <ToggleGroup container>
          <Grid item>
            <ToggleSwitch
              onChange={handleBlockChecked}
              checked={blockChecked}
              toggleName="Block"
              sx={{ justifyContent: "start" }}
            />
          </Grid>
          <Grid item>
            <ToggleSwitch
              onChange={handleVipChecked}
              checked={vipChecked}
              toggleName="VIP"
              sx={{ justifyContent: "start" }}
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
