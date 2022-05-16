import React from "react";
import ReusableTable from "../../ReusableTable/ReusableTable";

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

  const { headers, data } = InvoicesData;
  return <ReusableTable headers={headers} data={data} />;
};

export default InvoicesTab;
