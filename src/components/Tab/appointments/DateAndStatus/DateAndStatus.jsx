//react components...
import React from "react";

//mui components...
import { SvgIcon } from "@mui/material";
import {
  CustomDate,
  DateContainer,
  StatTypo,
  Status,
  Weekday,
} from "./DateAndStatus.styles";

//icons...
import { ReactComponent as Started } from "../../../../assets/appointments/started.svg";
import { ReactComponent as Completed } from "../../../../assets/appointments/completed.svg";

const DateAndStatus = (props) => {
  return (
    <DateContainer>
      <CustomDate>{props.date}</CustomDate>
      <Weekday>{props.weekday}</Weekday>
      <Status>
        <SvgIcon
          component={props.taskStatus === "Started" ? Started : Completed}
        />
        <StatTypo>{props.taskStatus}</StatTypo>
      </Status>
    </DateContainer>
  );
};

export default DateAndStatus;
