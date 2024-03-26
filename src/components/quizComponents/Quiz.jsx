import React, { useState } from "react";
import "../quizComponents/quiz.css";
import { quizQuestions } from "./Ques&Ans";
import Result from "./Result";
import "animate.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(1);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const question = quizQuestions[currentQuestion];
  const answers = document.querySelectorAll(".answer");

  const storingAns = () => {
    let Ans;
    answers.forEach((el) => {
      if (el.checked) {
        Ans = el.id;
      }
    });
    // console.log(Ans);
    return Ans;
  };

  const handlePrev=()=>{
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion)
    } else{
      console.log("No more previous Question")
    }
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setNextDisabled(true);
      // setPrevDisabled(true)
      setSubmitDisabled(false);
      console.log("no more question");
    }

    let storedAns = storingAns();
    if (question.isCorrect === storedAns) {
      setScore(score + 1);
      console.log(score);
    } else {
      // console.log(score);
      console.log("Wrong Answer");
    }
  };

  const handleSubmit = () => {
    setShowScore(true);
  };
  return (
    <>
      {showScore ? (
        <Result yourScore={score} total={quizQuestions.length} />
      ) : (
        <div className="quizContainer animate__animated animate__fadeInUp min-h-[405px] w-[350px] md:w-[550px] bg-[#fefefe] flex flex-col items-start justify-center relative rounded-md">
          <div className="font-semibold absolute top-4 md:top-8 mx-6">
            <h1 className="text-lg">{question.quesNumber}</h1>
            <h1 className="text-xl">{question.question}</h1>
          </div>
          <ul className="my">
            <li>
              <input
                type="radio"
                name="answer"
                id="a"
                className="answer mx-4"
              />
              <label htmlFor="ans1" id="option_1">
                {question.a}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="b"
                className="answer mx-4"
              />
              <label htmlFor="ans2" id="option_2">
                {question.b}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="c"
                className="answer mx-4"
              />
              <label htmlFor="ans3" id="option_3">
                {question.c}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="d"
                className="answer mx-4"
              />
              <label htmlFor="ans4" id="option_4">
                {question.d}
              </label>
            </li>
          </ul>
          <div className="flex flex-col w-full absolute bottom-2">
            <div className="flex justify-center w-full">
              <button id="btnNext" onClick={handlePrev} className="prevNext">
                Prev
              </button>
              <button
                id="btnNext"
                onClick={handleNext}
                disabled={nextDisabled}
                className="prevNext"
              >
                {nextDisabled ? "No more questions" : "Next"}
              </button>
            </div>
            <button
              id="btnNext"
              onClick={handleSubmit}
              disabled={submitDisabled}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
