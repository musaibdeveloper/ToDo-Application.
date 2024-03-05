import React from "react";
import { useState } from "react";
import "./Input.css";

export default function Input({ OnNewItem }) {
  const [task, addtask] = useState("");
  const [date, setDate] = useState("");

  const handleTask = (event) => {
    addtask(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const HandleSubmitChange = () => {
    OnNewItem(task, date);
    addtask("");
    setDate("");
  };

  return (
    <>
      <div>
        <input
          className="input-container"
          type="text"
          placeholder="Enter the Task.."
          onChange={handleTask}
          value={task}
        />
        
        <input
          type="date"
          className="date"
          onChange={handleDate}
          value={date}
        />
        <button onClick={HandleSubmitChange} className="button-80">
          Add Task
        </button>
      </div>
    </>
  );
}
