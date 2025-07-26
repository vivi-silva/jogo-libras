import { Link, useLocation } from "react-router-dom";

export default function Score() {
  const location = useLocation();
  const finalScore = location.state?.score || 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff8dc]/70 backdrop-blur-sm p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">🏁 Quiz concluído!</h1>
      <p className="text-2xl mb-8">Sua pontuação final foi:</p>
      <div className="text-5xl font-bold text-yellow-700 mb-10">💰 {finalScore} pontos</div>
      <Link to="/" className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 transition">
        Voltar para o Início
      </Link>
    </div>
  );
}

