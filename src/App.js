import React from "react";

import { CssBaseline, Grid } from "@mui/material";
import { AppContainer } from "./App.styles";
import ClientsListpage from "./pages/clientsListPage/clientsListPage";
import { Routes, Route } from "react-router-dom";
import ClientProfilePage from "./pages/clientProfilePage/clientProfilePage";
import SideBar from "./components/sideBar/sideBar";
import NavBar from "./components/navBar/navBar";
import PersistentDrawerLeft from "./components/drawerMenu/drawerMenu";
import AppDrawer from "./components/drawerMenu/drawerMenu";
function App() {
  return (
    <>
      <AppDrawer />
    </>

    // <AppContainer container>
    //   <CssBaseline />
    //   <Grid item xs={2}>
    //     <SideBar />
    //   </Grid>
    //   <Grid item xs={10}>
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" exact element={<ClientsListpage />} />
    //       <Route path="/profile" exact element={<ClientProfilePage />} />
    //     </Routes>
    //   </Grid>
    // </AppContainer>
  );
}

export default App;
