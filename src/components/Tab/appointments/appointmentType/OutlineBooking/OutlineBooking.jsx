//react components...
import React from "react";

//mui components...
import { Box } from "@mui/material";
import { Price } from "./OutlineBooking.styles";

const OutlineBooking = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      <Price>{props.price}</Price>
    </Box>
  );
};

export default OutlineBooking;
