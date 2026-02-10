import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-2xl font-semibold">Scan QR Code</h2>
      <p className="text-gray-500 mt-2">
        Point your camera at the counter QR code
      </p>

      <div className="mt-8 w-72 h-72 bg-white rounded-3xl shadow-lg flex items-center justify-center">
        Camera Preview
      </div>

      <button
        onClick={() => navigate("/dashboard/A-042")}
        className="mt-10 px-10 py-4 rounded-2xl text-white
                   bg-gradient-to-r from-primary to-secondary
                   hover:scale-105 hover:shadow-xl
                   transition-all duration-300"
      >
        Simulate Scan
      </button>
    </div>
  );
}