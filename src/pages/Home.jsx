import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-primary">QueueLess+</h1>
      <p className="mt-2 text-gray-500">Wait Smart. Not Long.</p>

      <div className="bg-white rounded-3xl shadow-xl p-10 mt-10 w-80">
        <div className="text-gray-300 text-sm">Waiting Area Illustration</div>
      </div>

      <button
        onClick={() => navigate("/join")}
        className="mt-10 px-10 py-4 rounded-2xl text-white
                   bg-gradient-to-r from-primary to-secondary
                   hover:scale-105 hover:shadow-xl
                   transition-all duration-300"
      >
        Scan QR to Join Queue
      </button>

      <p className="text-xs text-gray-400 mt-4">
        No app download needed · Works instantly
      </p>
    </div>
  );
}