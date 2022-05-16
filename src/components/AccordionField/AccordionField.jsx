//react components...
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { clientSchema } from "../../helperText/clientSchema";

//mui components
import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Description, StyledAccordion, Title } from "./AccordionField.styles";

//icons...
import { ReactComponent as AccordionOpen } from "../../assets/modal/accordionArrow.svg";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import AdditionalDetails from "../AdditionalDetails/AdditionalDetails";
import Address from "../Address/Address";

const AccordionField = (props) => {
  const { title, description } = props.data;

  const methods = useForm({
    resolver: yupResolver(clientSchema),
  });

  const submitForm = (data) => {
    console.log("form submitted...!", data);
  };

  const handleFormtype = (title) => {
    switch (title) {
      case "Personal details":
        return <PersonalDetails />;
      case "Additional details":
        return <AdditionalDetails />;
      case "Address":
        return <Address />;
    }
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <StyledAccordion>
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
          <Divider />
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitForm)}>
              <Container>{handleFormtype(title)}</Container>
            </form>
          </FormProvider>
        </AccordionDetails>
      </StyledAccordion>
    </Container>
  );
};

export default AccordionField;
