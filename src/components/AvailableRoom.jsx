import { Button } from "@heroui/react";
import React from "react";

const AvailableRoom = () => {
  return (
    <div className="bg-slate-50 py-10">
      <div className=" max-w-7xl mx-auto ">
        <div className=" flex justify-between items-center">
          <div>
            <h1 className=" text-3xl text-black">Available Study Rooms</h1>
            <p className=" text-gray-500">
              Hand-picked rooms recently added to StudyNook.
            </p>
          </div>
          <Button>view all room</Button>
        </div>
        <div>romm</div>
      </div>
    </div>
  );
};

export default AvailableRoom;
