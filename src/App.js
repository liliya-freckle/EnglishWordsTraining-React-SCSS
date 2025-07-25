import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MissingPage from "./components/Header/MissingPage";
import Table from "./components/Table/Table";
import Carusel from "./components/Carusel/Carusel";
import MainInfo from "./components/MainInfo/MainInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainInfo />} />
          <Route path="/dictionary" element={<Table />} />
          <Route path="/checkyourself" element={<Carusel />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
