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
import { ReactComponent as Completed } from "../../../../assets/appointments/completed.svg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const DateAndStatus = ({ date, weekday, taskStatus }) => {
  return (
    <DateContainer>
      <CustomDate>{date}</CustomDate>
      <Weekday>{weekday}</Weekday>
      <Status>
        {taskStatus === "Started" ? (
          <SvgIcon
            color="success"
            sx={{ height: "17px", ml: "-4px" }}
            component={PlayCircleIcon}
          />
        ) : (
          <SvgIcon component={Completed} />
        )}

        <StatTypo>{taskStatus}</StatTypo>
      </Status>
    </DateContainer>
  );
};

export default DateAndStatus;
