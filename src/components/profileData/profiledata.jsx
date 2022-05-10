import { Container, Typography } from "@mui/material";
import React from "react";
import { DataContainer, DataName } from "./profileData.styles";

const ProfileData = (props) => {
  return (
    <DataContainer>
      <DataName>{props.dataName}</DataName>
      <Typography>{props.value}</Typography>
    </DataContainer>
  );
};

export default ProfileData;
