import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabPanelContainer } from "./tabPanel.styles";

const TabPanel = (props) => {
  const { value, index, children } = props;

  return (
    <div sx={{ padding: "0" }}>
      {value === index && <TabPanelContainer>{children}</TabPanelContainer>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default TabPanel;
