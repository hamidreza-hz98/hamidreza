import React from "react";

import { Box, SvgIcon } from "@mui/material";

import { ButtonContainer } from "./buttonsComplex.styles";
import CustomButton from "../../customButton/customButton";
//side bar vectors...
import { ReactComponent as HomeIcon } from "../../../assets/sideBarVectors/home.svg";
import { ReactComponent as Calendar } from "../../../assets/sideBarVectors/calendar.svg";
import { ReactComponent as Staff } from "../../../assets/sideBarVectors/staff.svg";
import { ReactComponent as Clients } from "../../../assets/sideBarVectors/clients.svg";
import { ReactComponent as Services } from "../../../assets/sideBarVectors/services.svg";
import { ReactComponent as Offers } from "../../../assets/sideBarVectors/offers.svg";
import { ReactComponent as Sales } from "../../../assets/sideBarVectors/sales.svg";

const ButtonsComplex = () => {
  const buttons = [
    {
      title: "Home",
      id: 1,
      icon: HomeIcon,
    },
    {
      title: "Calendar",
      id: 2,
      icon: Calendar,
    },
    {
      title: "Clients",
      id: 3,
      icon: Clients,
    },
    {
      title: "Staff",
      id: 4,
      icon: Staff,
    },
    {
      title: "Services",
      id: 5,
      icon: Services,
    },
    {
      title: "Offers",
      id: 6,
      icon: Offers,
    },
    {
      title: "Sales",
      id: 7,
      icon: Sales,
    },
  ];

  return (
    <Box>
      {buttons.map((button) => (
        <ButtonContainer key={button.id}>
          <CustomButton>
            <SvgIcon component={button.icon} />
            {button.title}
          </CustomButton>
        </ButtonContainer>
      ))}
    </Box>
  );
};

export default ButtonsComplex;
