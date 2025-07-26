import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff8dc]/70 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4 relative">
      
      {/* Botões no topo */}
      <div className="absolute top-4 left-6 flex gap-4">
        <Link to="/instrucoes" className="bg-blue-200 hover:bg-blue-300 text-blue-900 font-medium px-4 py-2 rounded shadow">
          📖 Instruções
        </Link>
        <Link to="/sobre" className="bg-green-200 hover:bg-green-300 text-green-900 font-medium px-4 py-2 rounded shadow">
          🧑‍🏫 Sobre nós
        </Link>
      </div>

      <h1 className="text-5xl font-bold mb-6 mt-20">Bem-vindo ao Jogo Educativo</h1>
      <p className="mb-8 text-xl max-w-2xl">
        Descubra personagens históricos e teste seus conhecimentos com vídeos e quizzes interativos.
      </p>
      <Link to="/video" className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 transition">
        Começar
      </Link>
    </div>
  );
}

