//react components...
import React from "react";

//mui components...
import { Box } from "@mui/material";
import { Description, Title } from "./DetailedCase.styles";

const DetailedCase = ({ title, description }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Box>
  );
};

export default DetailedCase;
