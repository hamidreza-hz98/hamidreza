//react components
import React from "react";

//mui components...
import { Typography } from "@mui/material";
import { DataContainer, DataName } from "./profileData.styles";

const ProfileData = ({ dataName, value }) => {
  return (
    <DataContainer>
      <DataName>{dataName}</DataName>
      <Typography>{value}</Typography>
    </DataContainer>
  );
};

export default ProfileData;
