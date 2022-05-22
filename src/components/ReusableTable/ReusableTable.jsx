//react components
import React from "react";

//mui components...
import { Table, TableContainer } from "@mui/material";

//custom components...
import TableHeader from "./TableHeader/TableHeader";
import TableRows from "./TableRows/TableRows";

const ReusableTable = ({ headers, data, onClick }) => {
  //here we have a dynamic table generator components whitch takes
  //data,header,and onClick(for when)
  return (
    <TableContainer>
      <Table>
        <TableHeader headers={headers} />
        <TableRows
          data={data}
          headers={headers}
          onClick={(data) => onClick(data)}
        />
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
