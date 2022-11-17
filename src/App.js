import "./assets/fonts/stylesheet.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Characters from "./pages/Characters";
import Header from "./components/Header";
import Comics from "./pages/Comics";
import CharacterComs from "./pages/CharacterComs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<CharacterComs />} />
      </Routes>
    </Router>
  );
}

export default App;
