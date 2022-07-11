import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Magasin from "./components/Magasin/Magasin";
import Biblio from "./components/Bibliotheque/Biblio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Magasin />}></Route>
        <Route path="/bibliotheque" element={<Biblio />}></Route>
        <Route path="/oeildenuit" element={<Contact />}></Route>
        {/* routes pour chaque site à ajouter */}
      </Routes>
    </div>
  );
}

export default App;
