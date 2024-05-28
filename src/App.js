import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetUpspage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout /Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpspage />} />
        <Route path="/new-meet-up" element={<NewMeetUpPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
