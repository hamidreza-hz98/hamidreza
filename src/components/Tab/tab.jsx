//react components...
import React from "react";

//mui components...
import Box from "@mui/material/Box";
import { AntTab, AntTabs } from "./tab.styles";

//custom components...
import TabPanel from "./tabPanel/tabPanel";
import AppointmentsTab from "./appointments/appointments";
import InvoicesTab from "./InvoicesTab/InvoicesTab";
import ProductsTab from "./ProductsTab/ProductsTab";

function CustomTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs value={value} onChange={handleChange}>
          <AntTab label="Appointments" />
          <AntTab label="Invoices" />
          <AntTab label="Products" />
        </AntTabs>
        <Box />
      </Box>

      <TabPanel value={value} index={0}>
        <AppointmentsTab />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <InvoicesTab />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <ProductsTab />
      </TabPanel>
    </Box>
  );
}

export default CustomTab;
