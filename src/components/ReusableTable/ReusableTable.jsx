import { Table, TableContainer } from "@mui/material";
import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableRows from "./TableRows/TableRows";

const ReusableTable = (props) => {
  const { headers, data, onClick } = props;
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
