import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import ListItems from "./components/ListItems";

function App() {
  const InitailValues = [
    {
      task: "Learn",
      duedate : "7/10/2024"
    }, 

  ];

  const [todoItems, settodoItems] = useState(InitailValues);

  const HandleAddnewItems = (itemName, itemDueDate) => {
    const addmoreitems = [
      ...InitailValues,
      {
        task: itemName,
        duedate: itemDueDate,
      },
    ];
    settodoItems(addmoreitems);
  };

  const handledelete = (renderList) => {
    const upadtedtask = renderList.filter((task)=> task.task !== task);
    settodoItems(upadtedtask);
  };

  return (
    <center className="todo-container">
      <React.Fragment>
        <Logo />
        <NavBar OnNewAddition={HandleAddnewItems}></NavBar>
        <ListItems
          renderList={todoItems}
          ondeleteclick={handledelete}
        ></ListItems>
      </React.Fragment>
    </center>
  );
}

export default App;
