//react components...
import React from "react";
import PropTypes from "prop-types";

//mui components...
import { TabPanelContainer } from "./tabPanel.styles";

const TabPanel = (props) => {
  const { value, index, children } = props;

  return (
    <div sx={{ padding: "0", height: "200px" }}>
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
