import { Route, Routes } from "react-router-dom";
import { HomePage } from "./View/pages/HomePage";

export function App() {
  return (
    <div className="min-h-screen bg-[#e8eaed] flex items-center justify-center px-4 py-10">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}