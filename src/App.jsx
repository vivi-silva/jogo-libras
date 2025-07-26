import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Quiz from './pages/Quiz';
import Score from './pages/Score'; // adicionado
import Instrucoes from './pages/Instrucoes';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} /> {/* nova rota */}
        <Route path="/instrucoes" element={<Instrucoes />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}


