import { Button } from "@heroui/react";
import React from "react";

const AvailableRoom = () => {
  return (
    <div className="bg-[#28332f]">
      <div className=" max-w-7xl mx-auto ">
        <div className=" flex justify-between items-center">
          <div>
            <h1 className=" text-3xl text-white">Available Study Rooms</h1>
            <p className=" text-gray-300">
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
