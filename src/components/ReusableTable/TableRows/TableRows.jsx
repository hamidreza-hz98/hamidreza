import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import Cell from "../Cell/Cell";

const TableRows = ({ headers, data }) => {
  return (
    <TableBody>
      <>
        {data.map((d) => (
          <TableRow>
            {headers.map((head) => (
              <TableCell>{d[head.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </>
    </TableBody>
  );
};

export default TableRows;
