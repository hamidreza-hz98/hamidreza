import { Table, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableRows from "./TableRows/TableRows";

const ReusableTable = (props) => {
  const { headers, data, link } = props;
  return (
    <TableContainer sx={{ backgroundColor: "#FFFFFF", mt: 3, px: 3 }}>
      <Table>
        <TableHeader headers={headers} />
        <TableRows data={data} headers={headers} link={link} />
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
