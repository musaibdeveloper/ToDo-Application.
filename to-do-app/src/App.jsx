import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import ListItems from "./components/ListItems";

function App() {
  const InitialValues = [
    {
      task: "Code",
      date: "1/4/2024",
    },
    {
      task: "Code",
      date: "1/4/2024",
    },
    {
      task: "Code",
      date: "1/4/2024",
    },
  ];

  return (
    <center className="todo-container">
      <React.Fragment>
        <Logo />
        <NavBar></NavBar>
        <ListItems toitems={InitialValues}></ListItems>
      </React.Fragment>
    </center>
  );
}

export default App;
