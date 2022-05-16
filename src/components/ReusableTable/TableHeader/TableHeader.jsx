import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const TableHeader = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((item) => {
          return <TableCell key={item.key}>{item.name}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
