import React from "react";
import "./ListItem.css"; // Assuming you name your CSS file ListItem.css

function ListItem({ tasks, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <ul className="list-item">
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="task-item">
              <span>
                Task: {task.task}, Date: {task.date}
              </span>
              <button className="button-24" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
