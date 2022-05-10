import React from "react";

import { TableHead, TableRow } from "@mui/material";

import { HeaderCell } from "./tableHeader.styles";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow sx={{ padding: "0" }}>
        <HeaderCell>Name</HeaderCell>
        <HeaderCell>Mobile</HeaderCell>
        <HeaderCell>Email</HeaderCell>
        <HeaderCell>Status</HeaderCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
