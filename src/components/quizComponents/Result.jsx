import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../quizComponents/start&result.css";
import "animate.css";

function Result(props) {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("SignOut successfully...");
        navigate("/");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <>
      <div className="resultComp animate__animated animate__fadeInUp  w-[350px] md:w-[550px] bg-[#fefefe] h-fit rounded-md">
        <h1 className="text-2xl my-5">
          Congrats..! You have completed the Quiz ✨
        </h1>
        <h1 className="text-xl ">
          Your score is : {props.yourScore} / {props.total}
        </h1>
        <div>
          <button id="BTN" onClick={handleLogOut}>
            Logout
            <RiLogoutBoxRLine className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Result;
