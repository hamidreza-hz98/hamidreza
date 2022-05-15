import { styled } from "@mui/material";
import { Tabs, Tab } from "@mui/material";

export const AntTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.base.second}`,
}));

export const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",

    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
  })
);
