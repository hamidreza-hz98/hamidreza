//react components
import React from "react";

//mui components...
import { Typography } from "@mui/material";
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
