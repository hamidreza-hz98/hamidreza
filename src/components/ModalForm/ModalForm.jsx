//react components...
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientSchema } from "../../helperText/clientSchema";
import { useDispatch } from "react-redux";
import { createClient } from "../../redux/features/clientSlice";

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
  const dispatch = useDispatch();

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

  const { handleSubmit } = methods;

  const handleClose = () => {
    setOpenModal(false);
  };

  const submitForm = (data) => {
    dispatch(createClient());
  };

  return (
    <div>
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
        <FormProvider {...methods}>
          <form>
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
                  type="button"
                  onClick={handleSubmit(submitForm)}
                  autoFocus
                  variant="contained"
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
          </form>
        </FormProvider>
      </Dialog>
    </div>
  );
}
