import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as OpenMenu } from "../../assets/modal/openMenu.svg";

const AdditionalDetails = () => {
  const [value, setValue] = useState();
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
  ];
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select label="Gender">
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Select source</InputLabel>
            <Select label="Referral Source">
              <MenuItem value="sourceOne">sourceOne</MenuItem>
              <MenuItem value="sourceTwo">sourceTwo</MenuItem>
              <MenuItem value="sourceThree">sourceThree</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Birth Day</InputLabel>
            <Select label="Birth Day">
              {week.map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Birthday Month</InputLabel>
            <Select label="Birthday month">
              {month.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Birth Year</InputLabel>
            <Select label="Birth Year">
              {year.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TextField
        fullWidth
        multiline
        rows={2}
        label="Notes"
        placeholder="Enter notes"
      />
    </>
  );
};

export default AdditionalDetails;
