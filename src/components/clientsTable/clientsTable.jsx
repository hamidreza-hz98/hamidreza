//react components...
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allClients, selectClientById } from "../../store/clients/clientSlice";
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

const ClientsTable = () => {
  const clients = useSelector(allClients);

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
    return clients.map((client) => ({
      id: client.id,
      name: (
        <NameTypo>
          {client.firstName} {client.lastName}
        </NameTypo>
      ),
      mobile: <MobileTypo> {client.mobile} </MobileTypo>,
      email: <EmailTypo> {client.email} </EmailTypo>,
      status: chipColors.map(
        ({ key, color }) =>
          client.status === key && (
            <Chip label={client.status} sx={{ backgroundColor: `${color}` }} />
          )
      ),
    }));
  };

  return (
    <>
      <ReusableTable
        headers={formattedHeader()}
        data={tempFormatted()}
        onClick={clients}
        hasPadding={false}
      />
    </>
  );
};

export default ClientsTable;
