import React from "react";
import { Route, Routes } from "react-router-dom";
import { DrawerHeader, Main } from "./MainBody.styles";
import ClientsListpage from "../../pages/clientsListPage/clientsListPage";
import ClientProfilePage from "../../pages/clientProfilePage/clientProfilePage";

const MainBody = () => {
  return (
    <Main open>
      <DrawerHeader />
      <Routes>
        <Route path="/" exact element={<ClientsListpage />} />
        <Route path="/profile" exact element={<ClientProfilePage />} />
      </Routes>
    </Main>
  );
};

export default MainBody;
