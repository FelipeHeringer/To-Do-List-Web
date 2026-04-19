import { Route, Routes } from "react-router-dom";
import { HomePage } from "./View/pages/HomePage";

export function App() {
  return (
    <div className="min-h-screen bg-white md:bg-[#e8eaed] md:flex md:items-center md:justify-center md:px-4 md:py-10">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}