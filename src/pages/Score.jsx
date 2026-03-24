import { useLocation, useNavigate } from "react-router-dom";

export default function Score() {
  const location = useLocation();
  const navigate = useNavigate();
  const finalScore = location.state?.score || 0;

  const bgGame = `${import.meta.env.BASE_URL}background3.png`;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('${bgGame}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0d1b2a",
      }}
    >
      {/* camada blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[5px]" />

      {/* card principal */}
      <div className="relative z-10 w-full max-w-2xl rounded-[28px] border border-white/25 bg-white/20 backdrop-blur-xl shadow-2xl p-10 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow">
          🏁 Quiz concluído!
        </h1>

        <p className="text-2xl text-white mb-6">
          Sua pontuação final foi:
        </p>

        <div className="text-6xl font-extrabold text-yellow-300 mb-10 drop-shadow-lg">
          💰 {finalScore} pts
        </div>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-full border-2 border-white/30 bg-white/20 text-white font-bold text-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30"
        >
          Voltar ao início
        </button>

      </div>
    </div>
  );
}

