import { Chip, Typography } from "@mui/material";
import React from "react";
import ReusableTable from "../../ReusableTable/ReusableTable";
import { HeaderTypo } from "../ProductsTab/ProductsTab.styles";
import { RegularTypo, TotalTypo } from "./InvoicesTab.styles";

const DynamicChip = ({ chipColor }) => {
  console.log(chipColor);
  const chipColors = {
    Paid: "#E4FAF7",
    Unpaid: "#FFE7EB",
    Void: "#F6E3FF",
    Refound: "#FCF3E4",
    Exchange: "#E4FAF7",
  };

  return <Chip label={chipColor} color={chipColors.chipColor} />;
};

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

  const chipColors = {
    Paid: "#E4FAF7",
    Unpaid: "#FFE7EB",
    Void: "#F6E3FF",
    Refound: "#FCF3E4",
    Exchange: "#E4FAF7",
  };

  const { headers, data } = InvoicesData;

  const formattedHeaders = () => {
    return headers.map((head) => ({
      name: <HeaderTypo> {head.name} </HeaderTypo>,
      key: head.key,
    }));
  };

  const formattedData = () => {
    return data.map((d) => ({
      status: <DynamicChip chipColor={d.status} />,
      id: <RegularTypo>{d.id}</RegularTypo>,
      date: <RegularTypo>{d.date}</RegularTypo>,
      location: <RegularTypo>{d.location}</RegularTypo>,
      total: <TotalTypo>{d.total}</TotalTypo>,
    }));
  };
  return <ReusableTable headers={formattedHeaders()} data={formattedData()} />;
};

export default InvoicesTab;
