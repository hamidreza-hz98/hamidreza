//react components...
import React from "react";

//mui components...
import {
  CurrentPrice,
  OnlineChip,
  OnlineIcon,
  Label,
  Deleted,
  PriceContainer,
  ChipContainer,
} from "./onlineBooking.styles";

//icons...
import { ReactComponent as Online } from "../../../../assets/appointments/onlineBooking.svg";

const OnlineBooking = (props) => {
  return (
    <Label>
      <ChipContainer>
        <OnlineChip
          icon={<OnlineIcon component={Online} />}
          label="Online Booking"
          color="primary"
          size="small"
          sx={{
            "& .MuiChip-label": {
              color: "#FFFFFF",
            },
          }}
        />
      </ChipContainer>
      <PriceContainer>
        <CurrentPrice>{props.item.price}</CurrentPrice>
        <Deleted>{props.item.previousPrice}</Deleted>
      </PriceContainer>
    </Label>
  );
};

export default OnlineBooking;
