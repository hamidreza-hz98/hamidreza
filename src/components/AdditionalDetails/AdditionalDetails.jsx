//react components...
import React from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectClientById } from "../../store/clients/clientSlice";

//mui components...
import { Grid, MenuItem, TextField } from "@mui/material";

const days = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
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
  "1960",
  "1961",
  "1962",
  "1963",
  "1964",
  "1965",
  "1966",
  "1967",
  "1968",
  "1969",
  "1970",
  "1971",
  "1972",
  "1973",
  "1974",
  "1975",
  "1976",
  "1977",
  "1978",
  "1979",
  "1980",
  "1981",
  "1982",
  "1983",
  "1984",
  "1985",
  "1986",
  "1987",
  "1988",
  "1989",
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

const AdditionalDetails = ({ newClient }) => {
  //get /:clientId from router and find the current client
  const { clientId } = useParams();
  const client = useSelector(selectClientById(clientId));
  //this hook is used for registering clientSchema to form and validate the data recieved
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
            id="outlined-required"
            defaultValue={newClient ? "" : client.gender}
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
          <TextField
            select
            fullWidth
            id="outlined-required"
            label="Referral Source"
            name="referralSource"
            defaultValue={newClient ? "" : client.referralSource}
            {...register("referralSource")}
          >
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
            id="outlined-required"
            name="birthDay"
            defaultValue={newClient ? "" : client.birthDay}
            error={errors.birthDay}
            helperText={errors.birthDay && errors.birthDay?.message}
            {...register("birthDay")}
          >
            {days.map((day) => (
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
            id="outlined-required"
            defaultValue={newClient ? "" : client.birthMonth}
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
            id="outlined-required"
            name="birthYear"
            defaultValue={newClient ? "" : client.birthYear}
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
        sx={{
          ".MuiInputBase-root": {
            height: "120px !important",
            ".MuiOutlinedInput-input": {
              height: "100% !important",
            },
          },
        }}
        fullWidth
        multiline
        rows={2}
        id="outlined-required"
        label="Notes"
        name="notes"
        defaultValue={newClient ? "" : client.notes}
        {...register("notes")}
      />
    </>
  );
};

export default AdditionalDetails;
