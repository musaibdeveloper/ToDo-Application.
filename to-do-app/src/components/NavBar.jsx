import React, { useState } from "react";

export default function NavBar({ OnNewAddition }) {
  const [task, settask] = useState();
  const [date, setduedate] = useState();

  const Handletask = (event) => {
    settask(event.target.value);
  };

  const handledatechange = (event) => {
    setduedate(event.target.value);
  };

  const handleaddbuttonClicked = () => {
    OnNewAddition(task, date);
    setduedate("");
    settask("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your Task Here..."
            value={task}
            onChange={Handletask}
          />
        </div>
        <div className="col-4">
          <input type="date" value={date} onChange={handledatechange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleaddbuttonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
