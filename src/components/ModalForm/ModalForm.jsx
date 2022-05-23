//react components...
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { createClient, updateClient } from "../../store/clients/clientSlice";
import { useParams } from "react-router-dom";
import { clientSchema } from "../../helperText/clientSchema";

//mui components...
import {
  Dialog,
  List,
  Slide,
  SvgIcon,
  IconButton,
  Button,
} from "@mui/material";
import { HeaderTitle, ModalHeader, ModalToolbar } from "./ModalForm.styles";

//icons...
import { ReactComponent as CloseModal } from "../../assets/modal/closeModal.svg";

//custom components...
import AccordionField from "../AccordionField/AccordionField";

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

//adds some style to how the modal opens
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalForm = ({ openModal, setOpenModal, newClient, clientInfo }) => {
  //get the current client by Id
  const { clientId } = useParams();
  const dispatch = useDispatch();
  //here we resolve the yup validation to the app
  const methods = useForm({
    resolver: yupResolver(clientSchema),
  });
  const { handleSubmit } = methods;

  const handleClose = () => {
    setOpenModal(false);
  };

  //when the form submits, data will be sent to redux to be stored as new entity or updated one
  const submitForm = (data) => {
    newClient
      ? dispatch(createClient(data))
      : dispatch(
          updateClient({
            id: clientId,
            changes: data,
          })
        );

    handleClose();
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
              <ModalToolbar>
                <IconButton edge="start" onClick={handleClose}>
                  <SvgIcon component={CloseModal} />
                </IconButton>
                <HeaderTitle variant="h6" component="div">
                  {newClient ? "New Client" : "Edit Client"}
                </HeaderTitle>

                <Button
                  sx={{ width: "106px" }}
                  type="button"
                  onClick={handleSubmit(submitForm)}
                  autoFocus
                  variant="contained"
                >
                  {newClient ? "Save" : "Update"}
                </Button>
              </ModalToolbar>
            </ModalHeader>
            <List>
              {accordions.map((accordion) => {
                return (
                  <AccordionField
                    key={accordion.id}
                    data={accordion}
                    newClient={newClient}
                    clientInfo={clientInfo}
                  />
                );
              })}
            </List>
          </form>
        </FormProvider>
      </Dialog>
    </div>
  );
};

export default ModalForm;
