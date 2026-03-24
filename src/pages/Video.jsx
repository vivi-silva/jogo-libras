import { Link } from "react-router-dom";

export default function Video() {
  const bgGame = `${import.meta.env.BASE_URL}background_game.png`;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('${bgGame}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0d1b2a",
      }}
    >
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[4px]" />

      <div className="relative z-10 w-full max-w-3xl rounded-[28px] border border-white/25 bg-white/15 backdrop-blur-xl shadow-2xl p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
          Assista ao vídeo narrativo
        </h2>

        <div className="rounded-[24px] border border-white/20 bg-black/20 backdrop-blur-md p-4 shadow-xl">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/DxnTovrHHN4"
              title="Vídeo narrativo 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/video2"
            className="px-8 py-3 rounded-full border-2 border-white/30 bg-white/20 text-white font-bold text-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30"
          >
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
}