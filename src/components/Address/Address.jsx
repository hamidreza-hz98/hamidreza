//react components...
import React from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectClientById } from "../../store/clients/clientSlice";
//mui components...
import { TextField } from "@mui/material";

const Address = ({ newClient }) => {
  //get /:clientId from router and find the current client
  const { clientId } = useParams();
  const client = useSelector(selectClientById(clientId));
  //here we just need register, because we dont want validation error messages here
  const { register } = useFormContext();

  return (
    <>
      <TextField
        fullWidth
        id="outlined-required"
        label="Area"
        placeholder="Example: Sebastiana Chosta"
        name="area"
        defaultValue={newClient ? "" : client.area}
        {...register("area")}
      />
      <TextField
        fullWidth
        id="outlined-required"
        label="Block"
        defaultValue={newClient ? "" : client.block}
        placeholder="Example: Opanoun 12"
        name="block"
        {...register("block")}
      />
      <TextField
        fullWidth
        id="outlined-required"
        label="Street"
        defaultValue={newClient ? "" : client.street}
        placeholder="Example: Linkolna 301"
        name="street"
        {...register("street")}
      />
      <TextField
        fullWidth
        id="outlined-required"
        label="Avenue"
        defaultValue={newClient ? "" : client.avenue}
        placeholder="Example: Airport Street (SY-NC-TC)"
        name="avenue"
        {...register("avenue")}
      />
      <TextField
        fullWidth
        id="outlined-required"
        label="House number / Building / Apartment"
        placeholder="Example: 12"
        name="houseNumber"
        defaultValue={newClient ? "" : client.houseNumber}
        {...register("houseNumber")}
      />
    </>
  );
};

export default Address;
