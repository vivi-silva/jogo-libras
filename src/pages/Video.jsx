import { Link } from "react-router-dom";

export default function Video() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff8dc]/70 backdrop-blur-sm p-6">
      <h2 className="text-3xl font-semibold mb-4">Assista ao vídeo narrativo</h2>
      <video controls className="w-full max-w-2xl rounded shadow mb-6">
        <source src="/videos/narrativa.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
      <Link to="/quiz" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">
        Ir para o Quiz
      </Link>
    </div>
  );
}

