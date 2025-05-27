import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LearningCards from './components/LearningCards/LearningCards';
import MissingPage from './components/Header/MissingPage';
import Table from './components/Table/Table';
import Carusel from './components/Carusel/Carousel';
import CardsFront from './components/LearningCards/CardsFront';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/checkyourself" element={<LearningCards />} />
          <Route path="/game" element={<Carusel />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
