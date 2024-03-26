import React, { useState } from "react";
import "./Sign&Log.css";
import InputField from "./InputField";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import "animate.css";

function NewLogin() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
    } else {
      setErrorMsg("");
      setButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then((response) => {
          setButtonDisabled(false);
          navigate("/start");
          console.log(response);
        })
        .catch((err) => {
          setButtonDisabled(false);
          setErrorMsg(err.message.slice(22, -2));
          console.log("Error", err.message);
        });
      console.log(values);
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="login w-[370px] md:w-[500px] md:h-full bg-white space-y-5 flex flex-col items-center justify-center animate__animated animate__fadeInRight md:left-0 rounded-md">
        <div className="loginHeading">
          <h1>Welcome Back !</h1>
          <h3>Please enter your account details to logIn</h3>
        </div>
        <div className="py-6 space-y-4 relative">
          <InputField type="eamil" label="Email" onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }/>
          <InputField type="password" label="Password" onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }/>
          <div className="flex justify-between w-[330px] space-x-12">
            <label htmlFor="remember">
              <input type="checkbox" className="mr-1" id="" />
              Remember Me
            </label>
            <h1 className="forget">forgot password ?</h1>
          </div>
          <h1 className="absolute bottom-[-10px] font-bold text-red-500">{errorMsg}</h1>
        </div>

        <div className="loginBTN flex flex-col">
          <button id="createBTN" onClick={handleSubmission}
              disabled={buttonDisabled}>Log In</button>
          <button id="googleBTN" className="flex justify-center">
            <img src="/googleIcon.png" alt="" width="25px" className="mr-2" />{" "}
            Continue with Google
          </button>
        </div>
        <h1>
          Don't have an account ?{" "}
            <button
              onClick={handleClick}
              // className={`${
              //     isActive ? "animate__animated animate__fadeOutRight" : ""
              // }`}
            >
                  <Link to="/signin" rel="">
              SignIn
          </Link>
            </button>
        </h1>
      </div>
    </>
  );
}

export default NewLogin;
