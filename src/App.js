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
  const cookie = Cookies.get("favCookies") || "[]";
  const newCookie = JSON.parse(cookie);

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(newCookie);

  const handleFavorites = (fav) => {
    const favExist = favorites.find((f) => {
      return fav.id === f.id;
    });
    if (!favExist) {
      const newFavorite = [...favorites];
      newFavorite.push(fav);
      setFavorites(newFavorite);
      Cookies.set("favCookies", JSON.stringify(newFavorite), { expires: 30 });
    } else {
      const newFavorite = favorites.filter((f) => {
        return fav.id !== f.id;
      });
      setFavorites(newFavorite);
      Cookies.set("favCookies", JSON.stringify(newFavorite), { expires: 30 });
    }
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
