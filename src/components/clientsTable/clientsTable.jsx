//react components...
import React from "react";

//mui components...
import { Table } from "@mui/material";

//custom components...
import TableHeader from "./tableHeader/tableHeader";
import { TableBox } from "./clientsTable.styles";
import Body from "./tableBody/tableBody";

const ClientsTable = () => {
  // const MockData = {
  //   data: [
  //     {
  //       name: "",
  //       age: "",
  //     },
  //   ],
  // };
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
