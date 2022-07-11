import { Routes, Route } from "react-router-dom";
import Magasin from "./components/Magasin/Magasin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Magasin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
