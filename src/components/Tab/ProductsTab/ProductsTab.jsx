import React from "react";
import ReusableTable from "../../ReusableTable/ReusableTable";
import {
  DateTypo,
  HeaderTypo,
  InvoiceTypo,
  LocationTypo,
  ProductNameTypo,
  TotalTypo,
} from "./ProductsTab.styles";

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

  const { headers, data } = ProductsData;

  const formattedHeaders = () => {
    return headers.map((head) => ({
      name: <HeaderTypo>{head.name}</HeaderTypo>,
      key: head.key,
    }));
  };

  const formattedData = () => {
    return data.map((d) => ({
      invoiceNumber: <InvoiceTypo>{d.invoiceNumber}</InvoiceTypo>,
      productName: <ProductNameTypo>{d.productName}</ProductNameTypo>,
      date: <DateTypo>{d.date}</DateTypo>,
      location: <LocationTypo>{d.location}</LocationTypo>,
      total: <TotalTypo>{d.total}</TotalTypo>,
    }));
  };

  return <ReusableTable headers={formattedHeaders()} data={formattedData()} />;
};

export default ProductsTab;
