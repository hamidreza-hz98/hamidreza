import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
const PersonalDetails = () => {
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
          inputStyle={{
            width: "100%",
            borderRadius: "8px",
            height: "48px",
            borderColor: errors.mobile ? "red" : "",
          }}
          country={"ae"}
          placeholder="Mobile number"
          value={watch("mobile")}
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

      <TextField fullWidth label="Send notifications by" />

      <TextField
        fullWidth
        select
        name="preferredlanguage"
        error={errors.preferredlanguage}
        helperText={
          errors.preferredlanguage && errors.preferredlanguage?.message
        }
        {...register("preferredlanguage")}
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Arabic">Arabic</MenuItem>
        <MenuItem value="French">French</MenuItem>
      </TextField>
    </>
  );
};

export default PersonalDetails;
