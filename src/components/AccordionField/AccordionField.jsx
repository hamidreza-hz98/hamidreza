//react components...
import React from "react";

//mui components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Description, Title } from "./AccordionField.styles";

//icons...
import { ReactComponent as AccordionOpen } from "../../assets/modal/accordionArrow.svg";

const AccordionField = (props) => {
  const { title, description } = props.data;
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Accordion
        sx={{
          width: "60%",
          mt: "30px",
          boxShadow: "0px 8px 34px rgba(10, 31, 68, 0.08)",
        }}
      >
        <AccordionSummary
          sx={{
            "& .css-i4bv87-MuiSvgIcon-root": { fill: "none" },
          }}
          expandIcon={<SvgIcon component={AccordionOpen} />}
        >
          <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Container>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Here will come some fields...</Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default AccordionField;
