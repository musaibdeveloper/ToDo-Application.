import React from "react";
import { MdDeleteSweep } from "react-icons/md";

import "./ListItem.css";

export default function ListItems({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <div key={index} className="list-item">
            <li>
              {item.name} - {item.duedate}
            </li>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDeleteClick(item.name)}
            >
              <MdDeleteSweep />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
