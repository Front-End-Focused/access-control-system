import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppFunc from "./AppFunc";
import reportWebVitals from "./reportWebVitals";
import person1 from "./assets/person-1.svg";
import person2 from "./assets/person-2.svg";
import person3 from "./assets/person-3.svg";
import person4 from "./assets/person-4.svg";
import person5 from "./assets/person-5.svg";
import person6 from "./assets/person-6.svg";

const visitors = [
  {
    id: 1,
    icon: person1,
  },
  {
    id: 2,
    icon: person2,
  },
  {
    id: 3,
    icon: person3,
  },
  {
    id: 4,
    icon: person4,
  },
  {
    id: 5,
    icon: person5,
  },
  {
    id: 6,
    icon: person6,
  },
];

const whilelist = [2, 3, 4, 5];

ReactDOM.render(
  <React.StrictMode>
    <App visitors={visitors} whilelist={whilelist} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
