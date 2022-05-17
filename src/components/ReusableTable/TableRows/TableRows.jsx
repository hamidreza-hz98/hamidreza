import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import Cell from "../Cell/Cell";
import { useParams } from "react-router-dom";

const TableRows = ({ headers, data, link }) => {
  const { id } = useParams();
  return (
    <TableBody>
      <>
        {data.map((d) => (
          <TableRow component={link} to={`${id}`}>
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
