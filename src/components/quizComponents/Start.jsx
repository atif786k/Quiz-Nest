import React from "react";
import "../quizComponents/start&result.css";
import "animate.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

function Start(props) {
  return (
    <>
      <div className="startComp animate__animated animate__fadeInUp w-[350px] md:w-[550px] bg-[#fefefe] flex flex-col items-center rounded-md">
        <div className="text-center my-5 space-y-1">
          <h1 className="heading text-3xl">WELCOME</h1>
          <h1 className="text-xl font-bold text-yellow-600">
            {props.name ? props.name : "Hello User"}
          </h1>
        </div>
        <ul className="list-disc mx-2">
          <h1 className="md:ml-[-20px]">
            Read the following instructions Carefully..!
          </h1>
          <li>Quiz contains 12 question</li>
          <li>There is no time limit</li>
          <li>Each question contain 1 mark</li>
          <li>Score will be shown after sumbmission</li>
        </ul>
        <div>
          <Link to="/quiz" rel="">
          <button id="BTN" className="">
            Start Quiz
            <FaLongArrowAltRight className="ml-2" />
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Start;
