import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Menu from "./components/Menu";
import TicTacToe from "./components/TicTacToe";
import QuizGame from "./components/QuizGame";
import Copyright from "./components/Copyright";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/galo" element={<TicTacToe />} />
        <Route path="/quiz" element={<QuizGame />} />
        <Route path="/copyright" element={<Copyright />} />
      </Routes>
    </BrowserRouter>
  );
}