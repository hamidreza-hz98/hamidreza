//react components...
import React from "react";

//mui components...
import {
  Button,
  Dialog,
  List,
  Toolbar,
  Slide,
  SvgIcon,
  IconButton,
} from "@mui/material";
import { HeaderTitle, ModalHeader } from "./ModalForm.styles";

//custom coomponent...
import { ReactComponent as CloseModal } from "../../assets/modal/closeModal.svg";
import AccordionField from "../AccordionField/AccordionField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const accordions = [
    {
      title: "Personal details",
      description: "Check & manage name, phone and more about this staff",
      fields: [
        { firstName: "" },
        { lastName: "" },
        { mobile: "" },
        { sendNotificationsBy: "" },
        { PreferredLanguage: "" },
      ],
    },
    {
      title: "Additional details",
      description: "Check & gender, birth date, client notes, etc.",
      fields: [
        { gender: "" },
        { referralSource: "" },
        { birthDate: "" },
        { birthdayMonth: "" },
        { notes: "" },
      ],
    },
    {
      title: "Address",
      description: "Check & manage Avenue, Block, Street, Area, etc. ",
      fields: [
        { area: "" },
        { block: "" },
        { street: "" },
        { avenue: "" },
        { housenumber: "" },
      ],
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          "& .css-m9glnp-MuiPaper-root-MuiDialog-paper": {
            backgroundColor: "#E5E5E5",
          },
        }}
      >
        <ModalHeader
          sx={{
            position: "relative",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <SvgIcon component={CloseModal} />
            </IconButton>
            <HeaderTitle variant="h6" component="div">
              New Client
            </HeaderTitle>

            <Button autoFocus variant="contained" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </ModalHeader>

        <List>
          {accordions.map((accordion) => {
            return <AccordionField data={accordion} />;
          })}

          {/* <ListItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<SvgIcon component={AccordionIcon} />}
              >
                <Typography>Personal details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Here Will come some fields...</Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />
          <ListItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<SvgIcon component={AccordionIcon} />}
              >
                <Typography>Additional details</Typography>
                <Typography>
                  Check & gender, birth date, client notes, etc.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Here will come some fields</Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<SvgIcon component={AccordionIcon} />}
              >
                <Typography>Address</Typography>
                <Typography>
                  Check & manage Avenue, Block, Street, Area, etc.{" "}
                </Typography>
              </AccordionSummary>
            </Accordion>
          </ListItem> */}
        </List>
      </Dialog>
    </div>
  );
}
