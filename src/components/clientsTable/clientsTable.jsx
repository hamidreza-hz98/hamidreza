//react components...
import React from "react";

//mui components...
import { Chip, Table } from "@mui/material";

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
  const ClientsData = {
    headers: [
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
    ],
    data: [
      {
        name: "Hessa Al Hamlan",
        mobile: "+965 60 00 12 87",
        email: "h.alhamlan@gmail.com",
        status: "VIP",
      },
      {
        name: "Kasib Qutaiba Asfour",
        mobile: "+965 60 00 12 87",
        email: "KasibQutaibaAsfour@armyspy.com",
        status: "VIP",
      },
      {
        name: "Nahidah Reema Gerges",
        mobile: "+965 60 00 12 87",
        email: "NahidahReemaGerges@teleworm.us",
        status: "Regular",
      },
      {
        name: "Marid Shahid Ghanem",
        mobile: "+965 60 00 12 87",
        email: "MaridShahidGhanem@armyspy.com",
        status: "New",
      },

      {
        name: "Intisar Zaynab Assaf",
        mobile: "+965 60 00 12 87",
        email: "IntisarZaynabAssaf@jourrapide.com",
        status: "VIP",
      },
      {
        name: "Walaa Sameera Basara",
        mobile: "+965 60 00 12 87",
        email: "WalaaSameeraBasara@teleworm.us",
        status: "Regular",
      },
      {
        name: "Mahibah Isar Aswad",
        mobile: "+965 60 00 12 87",
        email: "MahibahIsarAswad@dayrep.com",
        status: "New",
      },
      {
        name: "Shihab al Din Diya Masih",
        mobile: "+965 60 00 12 87",
        email: "ShihabalDinDiyaMasih@armyspy.com",
        status: "New",
      },

      {
        name: "Luban Salsabil Safar",
        mobile: "+965 60 00 12 87",
        email: "LubanSalsabilSafar@dayrep.com",
        status: "VIP",
      },
      {
        name: "Taroob Lana Ghannam",
        mobile: "+965 60 00 12 87",
        email: "TaroobLanaGhannam@rhyta.com",
        status: "Regular",
      },
      {
        name: "Fahada Najaah Almasi",
        mobile: "+965 60 00 12 87",
        email: "FahadaNajaahAlmasi@jourrapide.com",
        status: "VIP",
      },
      {
        name: "Maram Raniya Essa",
        mobile: "+965 60 00 12 87",
        email: "MaramRaniyaEssa@rhyta.com",
        status: "Regular",
      },
      {
        name: "Samar Aini Halabi",
        mobile: "+965 60 00 12 87",
        email: "SamarAiniHalabi@dayrep.com",
        status: "Regular",
      },
      {
        name: "Atifa Arij Ganem",
        mobile: "+965 60 00 12 87",
        email: "AtifaArijGanem@armyspy.com",
        status: "VIP",
      },
      {
        name: "Mandhur Dhul Fiqar Antar",
        mobile: "+965 60 00 12 87",
        email: "MandhurDhulFiqarAntar@jourrapide.com",
        status: "New",
      },
      {
        name: "Hana Nuri Ghanem",
        mobile: "+965 60 00 12 87",
        email: "HanaNuriGhanem@dayrep.com",
        status: "New",
      },
      {
        name: "Sawdah Ruqayya Sleiman",
        mobile: "+965 60 00 12 87",
        email: "SawdahRuqayyaSleiman@dayrep.com",
        status: "VIP",
      },
      {
        name: "Jubayr Tareef Asker",
        mobile: "+965 60 00 12 87",
        email: "JubayrTareefAsker@dayrep.com",
        status: "Regular",
      },
      {
        name: "Aqil Abdul-Wajid Sarraf",
        mobile: "+965 60 00 12 87",
        email: "AqilAbdul-WajidSarraf@dayrep.com",
        status: "VIP",
      },
      {
        name: "Siraj al Din Ridwan Shamoon",
        mobile: "+965 60 00 12 87",
        email: "SirajalDinRidwanShamoon@dayrep.com",
        status: "Regular",
      },
    ],
  };

  const chipColors = [
    { key: "VIP", color: "#FCF3E4" },
    { key: "Regular", color: "#EAF4FF" },
    { key: "New", color: "#E4FAF7" },
  ];
  const { data, headers } = ClientsData;

  const formattedHeader = () => {
    return headers.map((head) => ({
      name: <ClientHeader>{head.name}</ClientHeader>,
      key: head.key,
    }));
  };

  const formattedData = () => {
    return data.map((d) => ({
      name: <NameTypo>{d.name} </NameTypo>,
      mobile: <MobileTypo> {d.mobile} </MobileTypo>,
      email: <EmailTypo> {d.email} </EmailTypo>,
      status: chipColors.map(
        ({ key, color }) =>
          d.status === key && (
            <Chip label={d.status} sx={{ backgroundColor: `${color}` }} />
          )
      ),
    }));
  };

  return (
    <ReusableTable
      headers={formattedHeader()}
      data={formattedData()}
      link={Link}
    />
  );
};

export default ClientsTable;
