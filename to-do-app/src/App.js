import React, { useState } from "react";
import './App.css';
import Logo from './components/Logo';
import Input from "./components/SeacrhBox/Input";
import Welcome from "./components/Welcome.jsx";
import ListItem from "./components/ListItem.jsx"

function App() {

  const initialValues = [
  
  ]

  const [alltask, setAllTask] = useState(initialValues);

  const handleNewItem = (task, date) => {
    console.log(`New task is ${task} and Due date is ${date}`);
    const addMore = [...alltask, { task: task, date: date }];
    setAllTask(addMore);
  }


  const handleDelete = (index) => {
      const updatedTasks = [...alltask];
      updatedTasks.splice(index, 1);
      setAllTask(updatedTasks);
    };
  

  return (
    <>
      <Logo />
      <Input OnNewItem={handleNewItem} />
      {alltask.length === 0 && <Welcome />}
      <ListItem tasks={alltask} onDelete={handleDelete} />
    </>
  );
}

export default App;
