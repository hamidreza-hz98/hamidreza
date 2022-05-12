import { Stack, styled, Paper, Grid } from "@mui/material";

export const AppointmentsTabContainer = styled(Stack)({});

export const Item = styled(Grid)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",

  color: theme.palette.text.secondary,
}));
