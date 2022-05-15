//react components...
import React from "react";

//mui components...
import { CssBaseline } from "@mui/material";
import { AppContainer } from "./App.styles";

//custom components...
import SideBar from "./components/sideBar/sideBar";
import NavBar from "./components/navBar/navBar";
import MainBody from "./components/MainBody/MainBody";

function App() {
  return (
    <AppContainer sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <SideBar />
      <MainBody />
    </AppContainer>
  );
}

export default App;
