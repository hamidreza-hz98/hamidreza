//react components...
import React from "react";
import { Route, Routes } from "react-router-dom";

//mui components...
import { DrawerHeader, Main } from "./MainBody.styles";

//custom components...
import ClientsListpage from "../../pages/clientsListPage/clientsListPage";
import ClientProfilePage from "../../pages/clientProfilePage/clientProfilePage";
import HomePage from "../../pages/home/home";
import CalendarPage from "../../pages/calendar/calendar";
import StaffPage from "../../pages/staff/staff";
import ServicesPage from "../../pages/services/services";
import OffersPage from "../../pages/offers/offers";
import SalesPage from "../../pages/sales/sales";

const MainBody = () => {
  return (
    <Main open>
      <DrawerHeader />
      <Routes>
        <Route path="/profile" exact element={<ClientsListpage />} />
        <Route path="profile/:clientId" exact element={<ClientProfilePage />} />

        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Main>
  );
};

export default MainBody;
