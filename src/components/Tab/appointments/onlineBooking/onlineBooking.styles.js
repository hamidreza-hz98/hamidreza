import { styled, Chip, SvgIcon, Typography, Box, Stack } from "@mui/material";

export const OnlineChip = styled(Chip)({
  height: "17px",
  width: "90px",

  "& .MuiChip-label": { fontSize: "10px", padding: "0" },
  "& .css-qzmcdp-MuiChip-root .MuiChip-icon": {
    margin: "15px -13px 0px -2px",
  },
});

export const ChipContainer = styled(Box)({
  marginTop: "-20px",
});

export const OnlineIcon = styled(SvgIcon)({
  "&.css-qzmcdp-MuiChip-root,&.MuiChip-icon": {
    margin: "15px -13px 0px -2px",
  },
});

export const CurrentPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "700",
  fontSize: "16px",
  marginLeft: "14px",
}));

export const Label = styled(Box)({
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
});

export const Deleted = styled("del")(({ theme }) => ({
  color: theme.palette.text.second,
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "20px",
}));

export const PriceContainer = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
