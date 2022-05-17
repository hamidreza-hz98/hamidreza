import { Chip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ReusableTable from "../../ReusableTable/ReusableTable";
import { HeaderTypo } from "../ProductsTab/ProductsTab.styles";
import { RegularTypo, TotalTypo } from "./InvoicesTab.styles";

const InvoicesTab = () => {
  const InvoicesData = {
    headers: [
      {
        name: "Status",
        key: "status",
      },
      {
        name: "Id",
        key: "id",
      },
      {
        name: "Date",
        key: "date",
      },
      {
        name: "Location",
        key: "location",
      },
      {
        name: "Total",
        key: "total",
      },
    ],
    data: [
      {
        status: "Paid",
        id: "1922",
        date: "23 November 2021",
        location: "Bookpeep 1",
        total: "KD 35",
      },
      {
        status: "Unpaid",
        id: "1922",
        date: "23 November 2021",
        location: "Bookpeep 1",
        total: "KD 0",
      },
      {
        status: "Paid",
        id: "1922",
        date: "23 November 2021",
        location: "Bookpeep 1",
        total: "KD 35",
      },
      {
        status: "Void",
        id: "1922",
        date: "23 November 2021",
        location: "Bookpeep 1",
        total: "KD 0",
      },
      {
        status: "Refound",
        id: "1922",
        date: "23 November 2021",
        location: "Bookpeep 1",
        total: "KD 0",
      },
      {
        status: "Exchange",
        id: "1922",
        date: "23 November 2021",
        location: "Bookpeep 1",
        total: "KD 0",
      },
    ],
  };

  const chipColors = [
    { key: "Paid", color: "#E4FAF7" },
    { key: "Unpaid", color: "#FFE7EB" },
    { key: "Void", color: "#F6E3FF" },
    { key: "Refound", color: "#FCF3E4" },
    { key: "Exchange", color: "#E4FAF7" },
  ];

  const { headers, data } = InvoicesData;

  const formattedHeaders = () => {
    return headers.map((head) => ({
      name: <HeaderTypo> {head.name} </HeaderTypo>,
      key: head.key,
    }));
  };

  const formattedData = () => {
    return data.map((d) => ({
      status: chipColors.map(
        ({ key, color }) =>
          d.status === key && (
            <Chip label={d.status} sx={{ backgroundColor: `${color}` }} />
          )
      ),
      id: <RegularTypo>{d.id}</RegularTypo>,
      date: <RegularTypo>{d.date}</RegularTypo>,
      location: <RegularTypo>{d.location}</RegularTypo>,
      total: <TotalTypo>{d.total}</TotalTypo>,
    }));
  };
  return <ReusableTable headers={formattedHeaders()} data={formattedData()} />;
};

export default InvoicesTab;
