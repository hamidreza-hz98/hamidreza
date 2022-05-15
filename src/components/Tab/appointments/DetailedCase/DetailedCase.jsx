//react components...
import React from "react";

//mui components...
import { Box } from "@mui/material";
import { Description, Title } from "./DetailedCase.styles";

const DetailedCase = (props) => {
  return (
    <Box>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Box>
  );
};

export default DetailedCase;
