import { Table } from "@mui/material";
import React from "react";
import TableHeader from "./tableHeader/tableHeader";
import { TableBox } from "./clientsTable.styles";
import Body from "./tableBody/tableBody";

const MockData = {
  data: [
    {
      name: "",
      age: "",
    },
  ],
};

const ClientsTable = () => {
  return (
    <TableBox>
      <Table>
        <TableHeader />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
      </Table>
    </TableBox>
  );
};

export default ClientsTable;
