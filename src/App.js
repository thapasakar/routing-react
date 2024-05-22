import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetUpspage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout /MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetUpspage />} />
        <Route path="/new-meet-up" element={<NewMeetUpPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
