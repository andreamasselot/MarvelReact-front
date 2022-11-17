import "./assets/fonts/stylesheet.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<CharacterComs />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
