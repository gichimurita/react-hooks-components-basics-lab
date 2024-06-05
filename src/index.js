import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import About from "./About";

function App() {
    return (
      <div className="App">
        <Navbar />
        <Home />   
        <About />
      </div>
    );





ReactDOM.render(<App />, document.getElementById("root"));



