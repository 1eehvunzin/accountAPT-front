import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./app/login/page";
import APTPage from "./app/apt/page";
import DashBoardPage from "./app/dashboard/page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/apt" element={<APTPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
    </Routes>
  );
}
