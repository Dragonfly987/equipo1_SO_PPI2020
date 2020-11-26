import React from "react";
import ReactDOM from "react-dom";

/* import "./registroEstilos.css";  */
/* import "./min.css"; */
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <React.StrictMode>
    < App/>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
