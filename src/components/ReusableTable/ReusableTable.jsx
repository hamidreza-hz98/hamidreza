import { Table, TableContainer } from "@mui/material";
import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableRows from "./TableRows/TableRows";

const ReusableTable = (props) => {
  const { headers, data, link } = props;
  return (
    <TableContainer>
      <Table>
        <TableHeader headers={headers} />
        <TableRows data={data} headers={headers} link={link} />
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
