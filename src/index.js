import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
ReactDOM.render(<App />, document.getElementById("root"));
exports.printMsg = function() {
    console.log("This is a message from the demo package");
  }