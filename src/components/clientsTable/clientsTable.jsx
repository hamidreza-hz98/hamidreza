//react components...
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//mui components...
import { Chip } from "@mui/material";

//custom components...
import ReusableTable from "../ReusableTable/ReusableTable";
import {
  ClientHeader,
  EmailTypo,
  MobileTypo,
  NameTypo,
} from "./clientsTable.styles";
import { Link } from "react-router-dom";

const ClientsTable = () => {
  const tableData = useSelector((state) => state.clients);
  const { ids, entities } = tableData;
  console.log("ids", ids);
  console.log("entites", entities);

  const headers = [
    {
      name: "Name",
      key: "name",
    },
    {
      name: "Mobile",
      key: "mobile",
    },
    {
      name: "Email",
      key: "email",
    },
    {
      name: "Status",
      key: "status",
    },
  ];

  const chipColors = [
    { key: "VIP", color: "#FCF3E4" },
    { key: "Regular", color: "#EAF4FF" },
    { key: "New", color: "#E4FAF7" },
  ];

  const formattedHeader = () => {
    return headers.map((head) => ({
      name: <ClientHeader>{head.name}</ClientHeader>,
      key: head.key,
    }));
  };

  const tempFormatted = () => {
    return ids.map((id) => ({
      name: (
        <NameTypo>
          {entities[id].firstName} {entities[id].lastName}
        </NameTypo>
      ),
      mobile: <MobileTypo> {entities[id].mobile} </MobileTypo>,
      email: <EmailTypo> {entities[id].email} </EmailTypo>,
      status: chipColors.map(
        ({ key, color }) =>
          entities[id].status === key && (
            <Chip
              label={entities[id].status}
              sx={{ backgroundColor: `${color}` }}
            />
          )
      ),
    }));
  };

  return (
    <>
      <ReusableTable
        headers={formattedHeader()}
        data={tempFormatted()}
        link={Link}
        hasPadding={false}
      />
    </>
  );
};

export default ClientsTable;
