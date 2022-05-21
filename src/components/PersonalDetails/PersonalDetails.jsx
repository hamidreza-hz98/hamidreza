import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectClientById } from "../../store/clients/clientSlice";
const PersonalDetails = ({ newClient }) => {
  const { clientId } = useParams();
  const client = useSelector(selectClientById(clientId));

  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const theme = useTheme();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            id="outlined-required"
            name="firstName"
            defaultValue={newClient ? "" : client.firstName}
            error={errors.firstName}
            helperText={errors.firstName && errors.firstName?.message}
            {...register("firstName")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            id="outlined-required"
            name="lastName"
            defaultValue={newClient ? "" : client.lastName}
            error={errors.lastName}
            helperText={errors.lastName && errors.lastName?.message}
            {...register("lastName")}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: "32px",
          ".special-label": {
            color: theme.palette.text.second,
            fontSize: "12px",
          },
          ".selected-flag": {
            borderRight: "1px solid rgba(64, 72, 214, 0.4)",
          },
        }}
      >
        <PhoneInput
          inputStyle={{
            width: "100%",
            borderRadius: "8px",
            height: "48px",
            borderColor: errors.mobile ? "red" : "",
            color: theme.palette.text.main,
            fontSize: "14px",
          }}
          country={"ae"}
          placeholder="Mobile number"
          value={newClient ? watch("mobile") : client.mobile}
          onChange={(phone) => {
            setValue("mobile", phone);
          }}
          name="mobile"
          error={errors.mobile}
          helperText={errors.mobile && errors.mobile?.message}
        />
        {errors.mobile && (
          <Typography
            sx={{
              color: "#F43319",
              backgroundColor: "rgba(244, 51, 25, 0.06)",
              borderRadius: "8px",
              fontSize: "12px",
              paddingLeft: "12px",
            }}
          >
            Please enter your mobile number
          </Typography>
        )}
      </Box>

      <TextField
        fullWidth
        label="Send notifications by"
        id="outlined-required"
        defaultValue={newClient ? "" : client.sendNotificationsBy}
        {...register("sendNotificationsBy")}
      />

      <TextField
        fullWidth
        select
        label="Preferred language"
        id="outlined-required"
        name="preferredLanguage"
        defaultValue={newClient ? "" : client.preferredLanguage}
        error={errors.preferredLanguage}
        helperText={
          errors.preferredLanguage && errors.preferredlanguage?.message
        }
        {...register("preferredLanguage")}
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Arabic">Arabic</MenuItem>
        <MenuItem value="French">French</MenuItem>
      </TextField>
    </>
  );
};

export default PersonalDetails;
