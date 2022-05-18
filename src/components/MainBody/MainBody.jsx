//react components...
import React from "react";
import { Route, Routes } from "react-router-dom";

//mui components...
import { DrawerHeader, Main } from "./MainBody.styles";

//custom components...
import ClientsListpage from "../../pages/clientsListPage/clientsListPage";
import ClientProfilePage from "../../pages/clientProfilePage/clientProfilePage";

const MainBody = () => {
  return (
    <Main open>
      <DrawerHeader />
      <Routes>
        <Route path="/" exact element={<ClientsListpage />} />
        {/* <Route path="/profile" exact element={} /> */}
        <Route path="/profile/:id" element={<ClientProfilePage />} />
      </Routes>
    </Main>
  );
};

export default MainBody;
