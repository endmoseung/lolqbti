import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import MbtiResult from "../pages/mbtiResult";
import MbtiSelect from "../pages/mbtiSelect";
import QuizResult from "../pages/quizResult";
import QuizSelect from "../pages/quizSelect";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/mbti/select" element={<MbtiSelect></MbtiSelect>}></Route>
        <Route path="/mbti/result" element={<MbtiResult></MbtiResult>}></Route>
        <Route path="/quiz/select" element={<QuizSelect></QuizSelect>}></Route>
        <Route path="/quiz/result" element={<QuizResult></QuizResult>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
