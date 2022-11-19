import "./assets/fonts/stylesheet.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Cookies from "js-cookie";

import Characters from "./pages/Characters";
import Header from "./components/Header";
import Comics from "./pages/Comics";
import CharacterComs from "./pages/CharacterComs";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeartCirclePlus,
  faHeart,
  faMagnifyingGlass,
  faPlus,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faHeartCirclePlus,
  faHeart,
  faMagnifyingGlass,
  faPlus,
  faArrowLeft,
  faArrowRight
);

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (fav) => {
    const newFavorite = [...favorites];
    newFavorite.push(fav);
    setFavorites(newFavorite);
  };

  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              search={search}
              setSearch={setSearch}
              handleFavorites={handleFavorites}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              search={search}
              setSearch={setSearch}
              handleFavorites={handleFavorites}
            />
          }
        />
        <Route
          path="/comics/:characterId"
          element={<CharacterComs handleFavorites={handleFavorites} />}
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              handleFavorites={handleFavorites}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" elemnt={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
