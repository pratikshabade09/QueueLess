import { useNavigate, useParams } from "react-router-dom";

export default function Dashboard() {
  const { token } = useParams();
  const navigate = useNavigate();

  const position = 6;
  const eta = 18;

  return (
    <div className="flex flex-col items-center h-screen p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-primary text-white flex items-center justify-center mb-4">
          ✓
        </div>

        <p className="text-gray-500">You're in the queue!</p>

        <h1 className="text-5xl font-bold text-primary mt-3">
          {token}
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          General Counter · Window 3
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-50 rounded-2xl p-4">
            <p className="text-xl font-semibold">~{eta} min</p>
            <p className="text-xs text-gray-400">Est. Wait Time</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4">
            <p className="text-xl font-semibold">#{position}</p>
            <p className="text-xs text-gray-400">Position in Queue</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-primary transition-all duration-500"></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">6 ahead</p>
        </div>

        <button
          onClick={() => navigate(`/alert/${token}`)}
          className="mt-6 w-full py-3 rounded-2xl border hover:bg-slate-50 transition"
        >
          Notify me when 2 turns left
        </button>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => navigate("/live")}
            className="flex-1 py-3 rounded-2xl border hover:bg-slate-50 transition"
          >
            View Live Status
          </button>

          <button
            onClick={() => navigate(`/alert/${token}`)}
            className="flex-1 py-3 rounded-2xl text-white
                       bg-gradient-to-r from-primary to-secondary
                       hover:scale-105 transition"
          >
            Preview Alert
          </button>
        </div>
      </div>
    </div>
  );
}