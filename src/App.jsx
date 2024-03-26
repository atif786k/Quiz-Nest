import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./Firebase";
import Start from "./components/quizComponents/Start";
import Quiz from "./components/quizComponents/Quiz";
import "./App.css";
import NewSignin from "./components/NewSignin";
import NewLogin from "./components/NewLogin";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user)
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  return (
    <>
      <div className="mainContainer flex items-center justify-center ">
        <Router>
          <Routes>
            <Route exact path="/" element={<NewLogin />}></Route>
            <Route exact path="/signin" element={<NewSignin />}></Route>

            <Route
              exact
              path="/start"
              element={<Start name={userName} />}
            ></Route>
            <Route exact path="/quiz" element={<Quiz />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
