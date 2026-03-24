import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const bgImage = `${import.meta.env.BASE_URL}background.png`;

  return (
    <div className="flex flex-col min-h-screen">
      <main
        className="flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "top center",
          backgroundColor: "#0d1b2a",
        }}
      >
        <div className="absolute top-6 right-6 flex gap-4">
          <button
            onClick={() => navigate("/instrucoes")}
            className="px-6 py-2 rounded-full border-2 border-yellow-500 bg-yellow-300 text-yellow-950 font-bold transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
          >
            Instruções
          </button>

          <button
            onClick={() => navigate("/sobre")}
            className="px-6 py-2 rounded-full border-2 border-yellow-500 bg-yellow-300 text-yellow-950 font-bold transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
          >
            Sobre nós
          </button>
        </div>

        <div className="flex flex-col items-center justify-between h-[70vh]">
          <div className="-mt-20">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl uppercase"
              style={{
                fontFamily: "'Luckiest Guy', cursive",
                color: "#FFE4B5",
                WebkitTextStroke: "2px #4a2c14",
                letterSpacing: "1px",
                textShadow: `
                  0 2px 0 #c97f1a,
                  0 4px 0 #a35f10,
                  0 6px 0 #7a4308,
                  0 8px 12px rgba(0,0,0,0.45),
                  0 0 12px rgba(255,215,0,0.35)
                `,
              }}
            >
              MÃOS QUE CONTAM HISTÓRIAS
            </h2>

            <p
              className="text-xl md:text-2xl mt-4"
              style={{
                color: "#FFE4B5",
                textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
              }}
            >
              Uma jornada pela história da educação de Surdos
            </p>
          </div>

          <div className="mt-16">
            <button
              onClick={() => navigate("/video")}
              className="px-10 py-4 rounded-full border-2 border-yellow-500 bg-yellow-400 text-yellow-950 font-bold text-lg shadow-sm transition-all duration-300 hover:bg-yellow-500 hover:shadow-none hover:scale-105"
            >
              Iniciar Jogo
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[#FFE4B5] text-center text-black py-1 text-sm">
        © 2025 UFPR Letras-Libras
      </footer>
    </div>
  );
}