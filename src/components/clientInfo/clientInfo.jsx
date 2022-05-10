import React from "react";
import {
  ProfileInfoContainer,
  NewAppointmentButton,
  EditButton,
  ClientName,
  ToggleGroup,
  AddressTypo,
} from "./clientInfo.styles";
import ToggleSwitch from "../toggleSwitch/toggleSwitch";
import { SvgIcon, Typography, Grid, Divider, Container } from "@mui/material";
import { ReactComponent as EditIcon } from "../../assets/profile/edit.svg";
import ProfileData from "../profileData/profiledata";

const ClientInfo = () => {
  return (
    <ProfileInfoContainer>
      <EditButton>
        <SvgIcon sx={{ marginTop: 2 }} component={EditIcon} />
        <Typography sx={{ marginTop: 2, marginRight: 4 }}>Edit</Typography>
      </EditButton>
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
