import React, { useState } from "react";
import "./App.css";
import AppName from "./components/AppName.jsx";
import NavBar from "./components/NavBar";
import ListItems from "./components/ListItems";
import Welcome from "./components/Welcome.jsx";

function App() {
  const InitailValues = [
    {
      name: "Learn",
      duedate: "7/10/2024",
    },
  ];

  const [todoItems, settodoItems] = useState(InitailValues);

  const HandleAddnewItems = (itemName, itemDueDate) => {
    const additems = [
      ...todoItems,
      {
        name: itemName,
        duedate: itemDueDate,
      },
    ];
    settodoItems(additems);
  };

  const HandleDeleteItem = (todoitemName) => {
    const updatedList = todoItems.filter((item) => item.name !== todoitemName);
    settodoItems(updatedList);
  };
  return (
    <center className="todo-container">
      <React.Fragment>
        <AppName />
        <NavBar OnNewAddition={HandleAddnewItems}></NavBar>
        {todoItems.length === 0 && <Welcome />}
        <ListItems
          todoItems={todoItems}
          onDeleteClick={HandleDeleteItem}
        ></ListItems>
      </React.Fragment>
    </center>
  );
}

export default App;
