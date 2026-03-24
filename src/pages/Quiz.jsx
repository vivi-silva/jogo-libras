import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    video: "/videos/pergunta1.mp4",
    correct: "William Stokoe",
    options: ["Marlee Matlin", "Nellie Zabel Willhite", "Anne Sullivan", "William Stokoe"]
  },
  {
    id: 2,
    video: "/videos/pergunta2.mp4",
    correct: "Thomas Gallaudet",
    options: ["Juan Bonet", "Thomas Gallaudet", "Pedro Ponce de Leon", "Marlee Matlin"]
  },
  {
    id: 3,
    video: "/videos/pergunta3.mp4",
    correct: "Pedro Ponce de Leon",
    options: ["Laura Redden Searing", "Pedro Ponce de Leon", "Thomas Gallaudet", "Charles de L'Epee"]
  },
  {
    id: 4,
    video: "/videos/pergunta4.mp4",
    correct: "Nellie Zabel Willhite",
    options: ["Nellie Zabel Willhite", "Laura Redden Searing", "Hellen Keller", "Anne Sullivan"]
  },
  {
    id: 5,
    video: "/videos/pergunta5.mp4",
    correct: "Marlee Matlin",
    options: ["Anne Sullivan", "Laurent Clerc", "Nellie Zabel Willhite", "Marlee Matlin"]
  },
  {
    id: 6,
    video: "/videos/pergunta6.mp4",
    correct: "Laurent Clerc",
    options: ["Agatha tiegel hanson", "Laurent Clerc", "Charles de L'Epee", "Thomas Gallaudet"]
  },
  {
    id: 7,
    video: "/videos/pergunta7.mp4",
    correct: "Anne Sullivan",
    options: ["Anne Sullivan", "Laurent Clerc", "Marlee Matlin", "Ernest Huet"]
  },
  {
    id: 8,
    video: "/videos/pergunta8.mp4",
    correct: "Hellen Keller",
    options: ["Ernest Huet", "Agatha tiegel hanson", "Hellen Keller", "Marlee Matlin"]
  },
  {
    id: 9,
    video: "/videos/pergunta9.mp4",
    correct: "Ernest Huet",
    options: ["Charles de L'Epee", "Ernest Huet", "Laura Redden Searing", "Agatha tiegel hanson"]
  },
  {
    id: 10,
    video: "/videos/pergunta10.mp4",
    correct: "Charles de L'Epee",
    options: ["Juan Bonet", "Hellen Keller", "Anne Sullivan", "Charles de L'Epee"]
  },
  {
    id: 11,
    video: "/videos/pergunta11.mp4",
    correct: "Julia Brace",
    options: ["Julia Brace", "Laura Redden Searing", "Ernest Huet", "Anne Sullivan"]
  },
  {
    id: 12,
    video: "/videos/pergunta12.mp4",
    correct: "Agatha tiegel hanson",
    options: ["Thomas Gallaudet", "Charles de L'Epee", "Agatha tiegel hanson", "Pedro Ponce de Leon"]
  },
  
];

export default function Quiz() {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState({});
  const [attempts, setAttempts] = useState({});
  const [feedback, setFeedback] = useState("");
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = questions.find((q) => q.id === selected);

  const handleAnswer = (choice) => {
    if (!currentQuestion || locked || !videoFinished) return;

    const alreadyTried = attempts[currentQuestion.id] || false;

    if (choice === currentQuestion.correct) {
      if (!answered[currentQuestion.id]) {
        const earned = alreadyTried ? 50 : 100;
        setScore((prev) => prev + earned);
      }

      setAnswered((prev) => ({ ...prev, [currentQuestion.id]: true }));
      setFeedback("✅ Parabéns! Você acertou.");
      setLocked(true);
    } else {
      setFeedback("❌ Resposta incorreta. Tente novamente.");
      setAttempts((prev) => ({ ...prev, [currentQuestion.id]: true }));
    }
  };

  useEffect(() => {
    if (Object.keys(answered).length === questions.length) {
      const timer = setTimeout(() => {
        navigate("/score", { state: { score } });
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [answered, score, navigate]);

  return (
    <div
      className="min-h-screen p-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/background3.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0d1b2a",
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[5px]" />

      <div className="relative z-10">
        <div className="absolute top-4 right-6 rounded-full border border-yellow-200/50 bg-yellow-300/60 backdrop-blur-md text-yellow-950 font-bold px-5 py-2 shadow-lg flex items-center gap-2">
          <span>💰</span>
          <span>{score} pts</span>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-center text-slate-900 drop-shadow">
          Escolha uma carta
        </h2>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto items-start">
          <div className="flex flex-wrap gap-5 justify-center md:justify-start md:w-1/2">
            {questions.map((q) => (
              <button
                key={q.id}
                onClick={() => {
                  setSelected(q.id);
                  setFeedback("");
                  setLocked(!!answered[q.id]);
                  setVideoFinished(false);
                }}
                className={`w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-2xl text-2xl font-bold shadow-lg transition-all duration-300 border
                  ${
                    answered[q.id]
                      ? "bg-gray-500/70 text-white border-white/20"
                      : "bg-yellow-300/85 hover:bg-yellow-200 text-slate-900 border-yellow-100/50 hover:scale-105"
                  }`}
              >
                {q.id}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 md:w-1/2 w-full">
            <div className="rounded-[28px] border border-white/25 bg-white/20 backdrop-blur-xl shadow-2xl p-5 min-h-[340px] flex items-center justify-center">
              {selected && currentQuestion ? (
                <video
                  key={currentQuestion.id}
                  controls
                  onEnded={() => setVideoFinished(true)}
                  className="w-full max-w-2xl rounded-2xl shadow-2xl"
                >
                  <source src={currentQuestion.video} type="video/mp4" />
                  Seu navegador não suporta o vídeo.
                </video>
              ) : (
                <p className="text-white text-lg">Escolha uma carta para iniciar</p>
              )}
            </div>

            {selected && currentQuestion && (
              <div className="rounded-[28px] border border-white/25 bg-white/20 backdrop-blur-xl shadow-2xl p-6">
                <h4 className="text-2xl font-semibold mb-5 text-slate-900">
                  Qual o nome relacionado a essa carta?
                </h4>

                {!videoFinished && !answered[currentQuestion.id] && (
                  <p className="mb-4 text-amber-900 font-semibold bg-amber-100/70 rounded-xl px-4 py-3">
                    ▶ Assista ao vídeo até o final para liberar as alternativas.
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options.map((opt, idx) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className="bg-blue-200/80 hover:bg-blue-300/90 text-slate-900 text-lg font-medium py-4 px-4 rounded-2xl shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!videoFinished || locked}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  ))}
                </div>

                {feedback && (
                  <p
                    className={`mt-5 text-xl font-semibold ${
                      feedback.includes("Parabéns") ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {feedback}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}