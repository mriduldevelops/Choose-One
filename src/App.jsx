import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Question from "./components/Question";
import Result from "./components/Result";
import Header from "./components/Header";
import { questions } from "./data/questions";
import "./App.css";
const App = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <>
      <Header />
      <div className="container">

      <Router>
        <Routes>
          <Route exact path="/">
            <Route
              index
              element={
                currentQuestion < questions.length ? (
                  <Question
                  question={questions[currentQuestion]}
                  onAnswer={handleAnswer}
                  />
                  ) : (
                    <Result
                    score={calculateScore()}
                    totalQuestions={questions.length}
                    />
                    )
                  }
                  />
          </Route>
        </Routes>
      </Router>
                  </div>
    </>
  );
};

export default App;
