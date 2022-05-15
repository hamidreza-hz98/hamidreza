//react components...
import React from "react";
import { Link } from "react-router-dom";

//mui components...
import { TableRow, TableCell, TableBody } from "@mui/material";
import { StatusCell, EmailCell } from "./tableBody.styles";

const Body = () => {
  return (
    <TableBody sx={{ height: "68", padding: "0" }}>
      <TableRow component={Link} to="/profile" sx={{ textDecoration: "none" }}>
        <TableCell>Brooklyn Simmons</TableCell>
        <TableCell>(629) 555-0129</TableCell>
        <EmailCell>bill.sanders@example.com</EmailCell>
        <TableCell sx={{ padding: "2px" }}>
          <StatusCell>vip</StatusCell>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default Body;
