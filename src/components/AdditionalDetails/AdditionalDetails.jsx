import { Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

const AdditionalDetails = () => {
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

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Gender"
            select
            name="gender"
            error={errors.gender}
            helperText={errors.gender && errors.gender?.message}
            {...register("gender")}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField select fullWidth label="Referral Source">
            <MenuItem value="sourceOne">sourceOne</MenuItem>
            <MenuItem value="sourceTwo">sourceTwo</MenuItem>
            <MenuItem value="sourceThree">sourceThree</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            select
            label="Birth Day"
            name="birthDay"
            error={errors.birthDay}
            helperText={errors.birthDay && errors.birthDay?.message}
            {...register("birthDay")}
          >
            {week.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            select
            label="Birthday month"
            name="birthMonth"
            error={errors.birthMonth}
            helperText={errors.birthMonth && errors.birthMonth?.message}
            {...register("birthMonth")}
          >
            {month.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            select
            label="Birth Year"
            name="birthYear"
            error={errors.birthYear}
            helperText={errors.birthYear && errors.birthYear?.message}
            {...register("birthYear")}
          >
            {year.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
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
