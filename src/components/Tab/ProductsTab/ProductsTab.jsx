import React from "react";
import ReusableTable from "../../ReusableTable/ReusableTable";

const ProductsTab = () => {
  const ProductsData = {
    headers: [
      { name: "Invoice #", key: "invoiceNumber" },
      { name: "Products name", key: "productName" },
      { name: "Date", key: "date" },
      { name: "Location", key: "location" },
      { name: "Total", key: "total" },
    ],
    data: [
      {
        invoiceNumber: "14458834",
        productName: "Oh Bee Hive...",
        date: "23 November 2021",
        location: "Location 2",
        total: "KD 53",
      },
      {
        invoiceNumber: "14458834",
        productName: "Oh Bee Hive...",
        date: "23 November 2021",
        location: "Location 2",
        total: "KD 53",
      },
      {
        invoiceNumber: "14458834",
        productName: "Oh Bee Hive...",
        date: "23 November 2021",
        location: "Location 2",
        total: "KD 53",
      },
      {
        invoiceNumber: "14458834",
        productName: "Oh Bee Hive...",
        date: "23 November 2021",
        location: "Location 2",
        total: "KD 53",
      },
    ],
  };

  const formattedData = () => {
    return data.map((d) => ({
      invoiceNumber: d.invoiceNumber,
      productName: d.productName,
      date: d.date,
      location: d.location,
      total: (
        <div>
          <b>d.total</b>
        </div>
      ),
    }));
  };
  const { headers, data } = ProductsData;

  return <ReusableTable headers={headers} data={formattedData()} />;
};

export default ProductsTab;
