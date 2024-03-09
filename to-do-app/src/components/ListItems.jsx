import React from "react";
import "./ListItem.css";

export default function ListItems({ renderList, ondeleteclick }) {
  return (
    <>
      <div className="items-container">
        {renderList.map((item, index) => (
          <div key={index} className="list-item">
            <li>
              {item.task} - {item.duedate}
            </li>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => ondeleteclick(renderList)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
