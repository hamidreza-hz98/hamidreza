//react components...
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientSchema } from "../../helperText/clientSchema";

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

export default function ModalForm({ openModal, setOpenModal }) {
  const accordions = [
    {
      title: "Personal details",
      description: "Check & manage name, phone and more about this staff",
      id: 1,
    },
    {
      title: "Additional details",
      description: "Check & gender, birth date, client notes, etc.",
      id: 2,
    },
    {
      title: "Address",
      description: "Check & manage Avenue, Block, Street, Area, etc. ",
      id: 3,
    },
  ];

  const methods = useForm({
    resolver: yupResolver(clientSchema),
  });

  const handleClose = () => {
    setOpenModal(false);
  };

  const submitForm = (data) => {
    console.log("form submitted", data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitForm)}>
          <Dialog
            fullScreen
            open={openModal}
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
              <Toolbar
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <IconButton edge="start" color="inherit" onClick={handleClose}>
                  <SvgIcon component={CloseModal} />
                </IconButton>
                <HeaderTitle variant="h6" component="div">
                  New Client
                </HeaderTitle>

                <Button
                  type="submit"
                  autoFocus
                  variant="contained"
                  onClick={methods.handleSubmit(submitForm)}
                >
                  save
                </Button>
              </Toolbar>
            </ModalHeader>
            <List>
              {accordions.map((accordion) => {
                return <AccordionField key={accordion.id} data={accordion} />;
              })}
            </List>
          </Dialog>
        </form>
      </FormProvider>
    </div>
  );
}
