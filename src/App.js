import { CssBaseline, Grid } from "@mui/material";
import { AppContainer } from "./App.styles";
import ClientsListpage from "./pages/clientsListPage/clientsListPage";
import { Routes, Route } from "react-router-dom";
import ClientProfilePage from "./pages/clientProfilePage/clientProfilePage";
import SideBar from "./components/sideBar/sideBar";
import NavBar from "./components/navBar/navBar";
function App() {
  return (
    <AppContainer>
      <CssBaseline />
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<ClientsListpage />} />
            <Route path="/profile" exact element={<ClientProfilePage />} />
          </Routes>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default App;
