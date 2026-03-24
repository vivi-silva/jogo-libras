import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Video2 from './pages/Video2';
import Quiz from './pages/Quiz';
import Score from './pages/Score';
import Instrucoes from './pages/Instrucoes';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <Router basename="/jogo-libras">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/video2" element={<Video2 />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="/instrucoes" element={<Instrucoes />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}