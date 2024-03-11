import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";


export default function NavBar({ OnNewAddition }) {
  const [task, settask] = useState("");
  const [date, setdate] = useState("");

  const Handletask = (event) => {
    settask(event.target.value);
  };

  const HandledateChage = (event) => {
    setdate(event.target.value);
  };

  const HandleAddbuttonClicked = () => {
    OnNewAddition(task, date);
  };


  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter your Task Here..."
            onChange={Handletask}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={HandledateChage} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={HandleAddbuttonClicked}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
