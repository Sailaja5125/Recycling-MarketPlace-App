import React from "react";
import img from "../images/recycle3.png";
import Form from "./Form";

function Sell() {
  return (
    <div className="flex">
      <img src={img} alt="image" className="h-screen w-1/2" />
      <div className="right flex flex-col w-full p-4 m-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5610/5610918.png"
              alt="go back"
              className="h-10 w-10 cursor-pointer"
            />
            <h1 className="text-center">Back</h1>
          </div>
          <div className="flex items-center gap-3">
            <h1>Rewards</h1>
            <div className="flex items-center gap-1">
              <img
                src="https://cdn-icons-png.flaticon.com/128/17301/17301413.png"
                alt="points"
                className="h-5 w-5"
              />
              <h1>0</h1>
            </div>
          </div>
        </nav>
        <div>
          {/* Add your form */}
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default Sell;
