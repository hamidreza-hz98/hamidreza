import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectClientById } from "../../store/clients/clientSlice";
import { useParams } from "react-router-dom";
import { updateClient } from "../../store/clients/clientSlice";
import { ToggleGroup } from "./ReusableToggle.styles";
import { Grid } from "@mui/material";
import ToggleSwitch from "../toggleSwitch/toggleSwitch";
const ReusableToggle = ({ data }) => {
  const { clientId } = useParams();
  const clientInfo = useSelector(selectClientById(clientId));
  //dispatch method makes us able to have access to our reducers
  const dispatch = useDispatch();
  //user wont be able to activate both Block and VIP at the same time thanks to this code...:
  const [statusType, setStatusType] = useState("New");
  const handleStatus = (name) => {
    setStatusType(name);
    dispatch(updateClient({ id: clientId, changes: { status: name } }));
    console.log(statusType);
  };
  return (
    <ToggleGroup row>
      {data.map((d) => {
        return (
          <ToggleSwitch
            onChange={() => handleStatus(d.name)}
            checked={statusType}
            toggleName={d.name}
          />
        );
      })}

      {/* <Grid item>
        <ToggleSwitch
          onChange={handleBlockChecked}
          checked={blockChecked}
          toggleName="Block"
          sx={{ justifyContent: "start" }}
        />
      </Grid>
      <Grid item>
        <ToggleSwitch
          onChange={handleVipChecked}
          checked={vipChecked}
          toggleName="VIP"
          sx={{ justifyContent: "start" }}
        />
      </Grid> */}
    </ToggleGroup>
  );
};

export default ReusableToggle;
