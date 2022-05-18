import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";

const TableRows = ({ headers, data, link }) => {
  return (
    <TableBody>
      <>
        {data.map((d) => (
          <TableRow component={link} to={`/profile/${d.id}`}>
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
