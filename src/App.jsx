import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Dashboard from "./pages/Dashboard";
import LiveQueue from "./pages/LiveQueue";
import Alert from "./pages/Alert";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/dashboard/:token" element={<Dashboard />} />
      <Route path="/live" element={<LiveQueue />} />
      <Route path="/alert/:token" element={<Alert />} />
    </Routes>
  );
}