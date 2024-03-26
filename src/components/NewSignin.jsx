import React, { useState } from "react";
import "./Sign&Log.css";
import InputField from "./InputField";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import "animate.css";

function NewSignin() {
    const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

    const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
    } else {
      setErrorMsg("");
      setButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (response) => {
          setButtonDisabled(false);
          const user = response.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          // setIsActive(true)
          navigate("/");
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
      <div className="signin w-[370px] md:w-[500px] md:h-full bg-white space-y-5 flex flex-col items-center justify-center animate__animated animate__fadeInLeft md:right-0 rounded-md">
        <div className="signinHeading">
          <h1>Create an account</h1>
          <h3>Please create an account to Continue...</h3>
        </div>
        <div className="py-6 space-y-4 relative">
          <InputField
            type="text"
            label="Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <InputField
            type="eamil"
            label="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputField
            type="password"
            label="Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
        <h1 className="absolute bottom-[-10px] font-bold text-red-500">{errorMsg}</h1>
        </div>
        <div className="signinBTN flex flex-col">
          <button
            id="createBTN"
            disabled={buttonDisabled}
            onClick={handleSubmission}
          >
            Sign In
          </button>
          <button id="googleBTN" className="flex justify-center">
            <img src="/googleIcon.png" alt="" width="25px" className="mr-2" />{" "}
            Continue with Google
          </button>
        </div>
        <h1>
          Already have an Account?{" "}
          <button
            onClick={handleClick}
            // className={`${
            //   isActive ? "animate__animated animate__fadeOutLeft" : ""
            // }`}
          >
            <Link to="/" rel="">
              Login
            </Link>
          </button>
        </h1>
      </div>
    </>
  );
}

export default NewSignin;
