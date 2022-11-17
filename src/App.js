import "./assets/fonts/stylesheet.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Characters from "./pages/Characters";
import Header from "./components/Header";
import Comics from "./pages/Comics";
import CharacterComs from "./pages/CharacterComs";
import Favorites from "./pages/Favorites";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeartCirclePlus,
  faHeart,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHeartCirclePlus, faHeart, faMagnifyingGlass, faPlus);

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={<Characters search={search} setSearch={setSearch} />}
        />
        <Route
          path="/comics"
          element={<Comics search={search} setSearch={setSearch} />}
        />
        <Route path="/comics/:characterId" element={<CharacterComs />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
