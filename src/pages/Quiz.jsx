import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    correct: "Ernest Huet",
    options: ["Marlee Matlin", "Nellie Zabel Willhite", "Anne Sullivan", "Ernest Huet"]
  },
  {
    id: 2,
    correct: "Laura Redden Searing",
    options: ["Juan Bonet", "Laura Redden Searing", "Pedro Ponce de Leon", "Marlee Matlin"]
  },
  {
    id: 3,
    correct: "Julia Brace",
    options: ["Laura Redden Searing", "Julia Brace", "Thomas Gallaudet", "Charles de L'Epee"]
  },
  {
    id: 4,
    correct: "Anne Sullivan",
    options: ["Pedro Ponce de Leon", "Laura Redden Searing", "Hellen Keller", "Anne Sullivan"]
  },
  {
    id: 5,
    correct: "William Stokoe",
    options: ["Anne Sullivan", "Laurent Clerc", "Nellie Zabel Willhite", "William Stokoe"]
  },
  {
    id: 6,
    correct: "Thomas Gallaudet",
    options: ["Agatha tiegel hanson", "Juan Bonet", "Charles de L'Epee", "Thomas Gallaudet"]
  },
  {
    id: 7,
    correct: "Juan Bonet",
    options: ["Juan Bonet", "Laurent Clerc", "Marlee Matlin", "Ernest Huet"]
  },
  {
    id: 8,
    correct: "Laurent Clerc",
    options: ["Hellen Keller", "Agatha tiegel hanson", "Laurent Clerc", "Marlee Matlin"]
  },
  {
    id: 9,
    correct: "Marlee Matlin",
    options: ["Charles de L'Epee", "Marlee Matlin", "Laura Redden Searing", "Agatha tiegel hanson"]
  },
  {
    id: 10,
    correct: "Pedro Ponce de Leon",
    options: ["Juan Bonet", "Hellen Keller", "Anne Sullivan", "Pedro Ponce de Leon"]
  },
  {
    id: 11,
    correct: "Nellie Zabel Willhite",
    options: ["Nellie Zabel Willhite", "Laura Redden Searing", "Ernest Huet", "Anne Sullivan"]
  },
  {
    id: 12,
    correct: "Agatha tiegel hanson",
    options: ["Thomas Gallaudet", "Charles de L'Epee", "Agatha tiegel hanson", "Pedro Ponce de Leon"]
  },
  {
    id: 13,
    correct: "Hellen Keller",
    options: ["Laurent Clerc", "Laura Redden Searing", "Hellen Keller", "William Stokoe"]
  },
  {
    id: 14,
    correct: "Charles de L'Epee",
    options: ["Charles de L'Epee", "Ernest Huet", "Juan Bonet", "Julia Brace"]
  }
];

export default function Quiz() {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState({});
  const [attempts, setAttempts] = useState({});
  const [feedback, setFeedback] = useState("");
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = questions.find(q => q.id === selected);

  const handleAnswer = (choice) => {
    if (!currentQuestion || locked) return;

    const alreadyTried = attempts[currentQuestion.id] || false;

    if (choice === currentQuestion.correct) {
      if (!answered[currentQuestion.id]) {
        const earned = alreadyTried ? 50 : 100;
        setScore(prev => prev + earned);
      }

      setAnswered(prev => ({ ...prev, [currentQuestion.id]: true }));
      setFeedback("✅ Parabéns! Você acertou.");
      setLocked(true);
    } else {
      setFeedback("❌ Resposta incorreta. Tente novamente.");
      setAttempts(prev => ({ ...prev, [currentQuestion.id]: true }));
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
    <div className="min-h-screen bg-[#fff8dc]/70 backdrop-blur-sm p-6 relative">
      <div className="absolute top-4 right-6 bg-yellow-300 text-yellow-900 font-bold px-4 py-2 rounded-full shadow flex items-center gap-2">
        <span>💰</span>
        <span>{score} pts</span>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">Escolha uma carta</h2>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start md:w-1/2">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => {
                setSelected(q.id);
                setFeedback("");
                setLocked(answered[q.id]);
              }}
              className={`w-20 h-20 flex items-center justify-center rounded-xl text-xl font-bold shadow-md transition
                ${answered[q.id] ? "bg-gray-400 text-white" : "bg-yellow-300 hover:bg-yellow-400"}`}
            >
              {q.id}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="bg-white/90 rounded-lg shadow-lg p-4 text-center min-h-[200px] flex items-center justify-center">
            {selected ? (
              <p className="text-xl text-gray-700">[Vídeo da carta {selected} será exibido aqui]</p>
            ) : (
              <p className="text-gray-400">Escolha uma carta para iniciar</p>
            )}
          </div>

          {selected && (
            <div className="bg-white/90 rounded-lg shadow-lg p-4">
              <h4 className="text-lg font-semibold mb-4">Qual o nome relacionado a essa carta?</h4>
              <div className="grid grid-cols-2 gap-4">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="bg-blue-200 hover:bg-blue-300 text-base font-medium py-2 px-4 rounded shadow disabled:opacity-50"
                    disabled={locked}
                  >
                    {String.fromCharCode(65 + idx)}. {opt}
                  </button>
                ))}
              </div>
              {feedback && (
                <p className={`mt-4 text-lg font-semibold ${feedback.includes("Parabéns") ? "text-green-700" : "text-red-600"}`}>
                  {feedback}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}








