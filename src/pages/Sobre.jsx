import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-[#fff8dc]/70 backdrop-blur-sm p-6 text-center text-gray-900">
      <h1 className="text-4xl font-bold mb-6"> Sobre Nós</h1>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Este jogo foi criado como uma ferramenta educativa para apoiar o ensino de história da educação de surdos, com foco em acessibilidade, interação e aprendizado visual.
        <br /><br />
        Produzido por [Seu Nome ou Equipe], com dedicação à inclusão e ao protagonismo surdo.
      </p>
      <Link to="/" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
        Voltar para o início
      </Link>
    </div>
  );
}
