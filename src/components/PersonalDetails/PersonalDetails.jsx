import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
const PersonalDetails = () => {
  const [phone, setPhone] = useState();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const theme = useTheme();

  const style = {
    width: "100%",
    borderRadius: "8px",
    height: "48px",
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            error={errors.firstName}
            helperText={errors.firstName && errors.firstName?.message}
            {...register("firstName")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
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
          inputStyle={style}
          country={"ae"}
          placeholder="Mobile number"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          name="mobile"
          error={errors.mobile}
          helperText={errors.mobile && errors.mobile?.message}
          {...register("mobile")}
        />
      </Box>

      <TextField fullWidth label="Send notifications by" />

      <TextField
        fullWidth
        select
        name="preferredlanguage"
        error={errors.preferredlanguage}
        helperText={
          errors.preferredlanguage && errors.preferredlanguage?.message
        }
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Arabic">Arabic</MenuItem>
        <MenuItem value="French">French</MenuItem>
      </TextField>
    </>
  );
};

export default PersonalDetails;
