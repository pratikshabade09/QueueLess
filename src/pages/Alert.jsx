import { useParams } from "react-router-dom";

export default function Alert() {
  const { token } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl mb-6">
        🔔
      </div>

      <h2 className="text-3xl font-bold">Your turn is next!</h2>
      <p className="text-gray-500 mt-2">
        Please head to Counter 3
      </p>

      <div className="bg-white rounded-3xl shadow-xl p-8 mt-8 w-80">
        <p className="text-sm text-gray-400">Your Token</p>
        <h1 className="text-5xl font-bold text-primary mt-2">
          {token}
        </h1>
      </div>

      <button className="mt-8 px-10 py-4 rounded-2xl text-white
                         bg-gradient-to-r from-primary to-secondary
                         hover:scale-105 transition">
        Proceed to Counter →
      </button>
    </div>
  );
}