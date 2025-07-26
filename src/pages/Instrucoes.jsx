import { Link } from "react-router-dom";

export default function Instrucoes() {
  return (
    <div className="min-h-screen bg-[#fff8dc]/70 backdrop-blur-sm p-6 text-center text-gray-900">
      <h1 className="text-4xl font-bold mb-6">📖 Instruções do Jogo</h1>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Este jogo educativo apresenta 14 cartas, cada uma com um pequeno vídeo narrativo. Após assistir ao vídeo, o jogador deve responder corretamente quem é a figura histórica apresentada.
        <br /><br />
        💡 Acertos de primeira valem 100 pontos. Se errar e acertar depois, vale 50.
        <br /><br />
        O objetivo é aprender brincando!
      </p>
      <Link to="/" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
        Voltar para o início
      </Link>
    </div>
  );
}
