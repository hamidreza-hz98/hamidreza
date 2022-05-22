//react components...
import React from "react";

//mui components...
import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = ({ headers }) => {
  //here we just get the headers title and show it as table headers
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
