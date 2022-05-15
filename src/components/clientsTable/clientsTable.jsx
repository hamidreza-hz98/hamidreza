//react components...
import React from "react";

//mui components...
import { Table } from "@mui/material";

//custom components...
import TableHeader from "./tableHeader/tableHeader";
import { TableBox } from "./clientsTable.styles";
import Body from "./tableBody/tableBody";

const ClientsTable = () => {
  const MockData = {
    data: [
      {
        id: 1,
        firstName: "Hessa",
        lastname: "Al Hamlan",
        phoneNumber: "+965 60 00 12 87",
        sendNotificationsBy: "",
        email: "h.alhamlan@gmail.com",
        preferredLanguage: "",
        gender: "Female",
        source: "",
        birthDay: "11",
        birthMonth: "July",
        birthYear: "1985",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        adderss: {
          area: "Sebastiana Chosta",
          block: "Opanoun 12",
          street: "Linkolna 301",
          avenue: "Airport Street (SY-NC-TC)",
          houseNumber: "12",
        },
      },
      {
        id: 2,
        firstName: "Kasib",
        lastname: "Qutaiba Asfour",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "KasibQutaibaAsfour@armyspy.com",
        status: "VIP",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 3,
        firstName: "Nahidah ",
        lastname: "Reema Gerges",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "NahidahReemaGerges@teleworm.us",
        status: "Regular",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 4,
        firstName: "Marid  ",
        lastname: "Shahid Ghanem",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "MaridShahidGhanem@armyspy.com",
        status: "New",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 5,
        firstName: "Intisar",
        lastname: "Zaynab Assaf",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "IntisarZaynabAssaf@jourrapide.com",
        status: "VIP",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 6,
        firstName: "Walaa",
        lastname: "Sameera Basara",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "WalaaSameeraBasara@teleworm.us",
        status: "Regular",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 7,
        firstName: "Mahibah",
        lastname: "Isar Aswad",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "MahibahIsarAswad@dayrep.com",
        status: "New",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 8,
        firstName: "Shihab al Din",
        lastname: "Diya Masih",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "ShihabalDinDiyaMasih@armyspy.com",
        status: "New",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 9,
        firstName: "Luban",
        lastname: "Salsabil Safar",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "LubanSalsabilSafar@dayrep.com",
        status: "VIP",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 10,
        firstName: "Taroob",
        lastname: "Lana Ghannam",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "TaroobLanaGhannam@rhyta.com",
        status: "Regular",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 11,
        firstName: "Fahada ",
        lastname: "Najaah Almasi",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "FahadaNajaahAlmasi@jourrapide.com",
        status: "VIP",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 12,
        firstName: "Maram ",
        lastname: "Raniya Essa",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "MaramRaniyaEssa@rhyta.com",
        status: "Regular",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 13,
        firstName: "Samar",
        lastname: "Aini Halabi",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "SamarAiniHalabi@dayrep.com",
        status: "Regular",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 14,
        firstName: "Atifa",
        lastname: "Arij Ganem",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "AtifaArijGanem@armyspy.com",
        status: "VIP",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 15,
        firstName: "Mandhur",
        lastname: "Dhul Fiqar Antar",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "MandhurDhulFiqarAntar@jourrapide.com",
        status: "New",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 16,
        firstName: "Hana",
        lastname: "Nuri Ghanem",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "HanaNuriGhanem@dayrep.com",
        status: "New",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 17,
        firstName: "Sawdah",
        lastname: "Ruqayya Sleiman",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "SawdahRuqayyaSleiman@dayrep.com",
        status: "VIP",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 18,
        firstName: "Jubayr",
        lastname: "Tareef Asker",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "JubayrTareefAsker@dayrep.com",
        status: "Regular",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 19,
        firstName: "Aqil",
        lastname: "Abdul-Wajid Sarraf",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "AqilAbdul-WajidSarraf@dayrep.com",
        status: "VIP",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
      {
        id: 20,
        firstName: "Siraj al Din",
        lastname: "Ridwan Shamoon",
        phoneNumber: "",
        sendNotificationsBy: "",
        email: "SirajalDinRidwanShamoon@dayrep.com",
        status: "Regular",
        preferredLanguage: "",
        gender: "",
        source: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        notes: "",
        adderss: {
          area: "",
          block: "",
          street: "",
          avenue: "",
          houseNumber: "",
        },
      },
    ],
  };
  return (
    <TableBox>
      <Table>
        <TableHeader />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
      </Table>
    </TableBox>
  );
};

export default ClientsTable;
