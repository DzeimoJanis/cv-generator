import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import QuestionScreen from "./components/QuestionScreen";
import FinishScreen from "./components/FinishScreen";
import questions from "./data/questions.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomeScreen /> } />
        <Route path="/questions" element={ <QuestionScreen questions={questions} />} />
        <Route path="/download" element={ <FinishScreen /> } />
      </Routes>
    </Router>
  );
}

export default App;