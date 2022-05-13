import React from "react";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./components/sideBar/sideBar";
import NavBar from "./components/navBar/navBar";
import MainBody from "./components/MainBody/MainBody";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <SideBar />
      <MainBody />
    </Box>
  );
}

export default App;
