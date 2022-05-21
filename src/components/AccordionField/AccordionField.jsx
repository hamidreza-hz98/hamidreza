//react components...
import React, { useState } from "react";

//mui components
import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  SvgIcon,
} from "@mui/material";
import {
  AccordionContainer,
  Description,
  StyledAccordion,
  Title,
} from "./AccordionField.styles";

//icons...
import { ReactComponent as AccordionOpen } from "../../assets/modal/accordionArrow.svg";

//custom components...
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import AdditionalDetails from "../AdditionalDetails/AdditionalDetails";
import Address from "../Address/Address";

const AccordionField = ({ data, newClient }) => {
  const { title, description } = data;
  //if we want to create a new client, the modal's accordions will be closed
  //otherwised (in case of editing clients, accordions will be shown expanded)
  const [expanded, setExpanded] = useState(!newClient);

  //decide which accordion would render each time in ModalForm's map function
  const handleFormtype = (title) => {
    switch (title) {
      case "Personal details":
        return <PersonalDetails newClient={newClient} />;
      case "Additional details":
        return <AdditionalDetails newClient={newClient} />;
      case "Address":
        return <Address newClient={newClient} />;
      default:
        return null;
    }
  };

  return (
    <AccordionContainer>
      <StyledAccordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={{
            padding: "9x",
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
          <Divider />
          <Container>{handleFormtype(title)}</Container>
        </AccordionDetails>
      </StyledAccordion>
    </AccordionContainer>
  );
};

export default AccordionField;
