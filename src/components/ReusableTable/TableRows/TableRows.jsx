//react components...
import React from "react";
import { useNavigate } from "react-router-dom";

//mui components...
import { TableBody, TableCell, TableRow } from "@mui/material";

const TableRows = ({ headers, data }) => {
  //with useNavigate hook,we can redirect user to specific dynamic route
  const navigate = useNavigate();
  const handleClick = (data) => {
    return data.id.length ? navigate(`/clients/${data.id}`) : null;
  };

  //about a table that rocks...! :
  //we pass data when we render Reusable table ,
  //here we get the data map in it,
  //for each data we need one row and for each data.value,
  //we need a table cell, so we have nested map here...
  return (
    <TableBody>
      <>
        {data.map((d) => (
          <TableRow onClick={() => handleClick(d)} sx={{ cursor: "pointer" }}>
            {headers.map((head) => (
              <TableCell sx={{ py: "14px" }}>{d[head.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </>
    </TableBody>
  );
};

export default TableRows;
