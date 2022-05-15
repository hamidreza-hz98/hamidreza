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
import { styled } from "@mui/system";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const PersonalDetails = () => {
  const [phone, setPhone] = useState();

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
          <TextField fullWidth label="First Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Last Name" />
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
        />
      </Box>

      <TextField fullWidth label="Send notifications by" />

      <FormControl fullWidth>
        <InputLabel>Preferred Language</InputLabel>
        <Select label="Preferred Language">
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Arabic">Arabic</MenuItem>
          <MenuItem value="French">French</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default PersonalDetails;
