import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import person1 from "./assets/person-1.svg";
import person2 from "./assets/person-2.svg";
import person3 from "./assets/person-3.svg";
import person4 from "./assets/person-4.svg";
import person5 from "./assets/person-5.svg";
import person6 from "./assets/person-6.svg";
// import AppFunc from "./AppFunc";

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

let whitelist = [2, 3, 4, 5];



async function getActualList() {
  try {
    let response = await fetch("https://run.mocky.io/v3/0403127a-302a-4a3c-8728-c93c982bd71b");
    let result = await response.json()
    // debugger
    return result
  }
  catch (error) {
    console.error(error.message);
  }
}



ReactDOM.render(
  <React.StrictMode>
    <App visitors={visitors} whitelist={whitelist} getActualList={ getActualList }/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
