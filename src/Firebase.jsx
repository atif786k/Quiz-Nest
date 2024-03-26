import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYORsDLzIbUt1N_tz0ZM49BhOIJCys3IU",
  authDomain: "quiz-web-4e40e.firebaseapp.com",
  projectId: "quiz-web-4e40e",
  storageBucket: "quiz-web-4e40e.appspot.com",
  messagingSenderId: "358592075531",
  appId: "1:358592075531:web:c162225f1633150ab6340e",
  measurementId: "G-1HZ73LWLSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};