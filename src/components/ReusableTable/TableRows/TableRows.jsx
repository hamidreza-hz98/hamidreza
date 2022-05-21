import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  allClients,
  selectClientById,
} from "../../../store/clients/clientSlice";

const TableRows = ({ headers, data, onClick }) => {
  const navigate = useNavigate();
  const handleClick = (data) => {
    //onClick(data);
    navigate(`/clients/${data.id}`);
  };
  return (
    <TableBody>
      <>
        {data.map((d) => (
          <TableRow onClick={() => handleClick(d)}>
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
