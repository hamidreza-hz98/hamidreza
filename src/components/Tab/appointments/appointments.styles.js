import { Stack, styled, Paper, Grid } from "@mui/material";

export const AppointmentsTabContainer = styled(Stack)({});

export const Item = styled(Grid)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
