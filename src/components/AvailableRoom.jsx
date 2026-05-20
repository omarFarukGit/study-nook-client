import { Button } from "@heroui/react";
import React from "react";
import RoomCard from "./RoomCard";

const AvailableRoom = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/study-nook`);
  const result = await res.json();
  const allroom = result.data;
  return (
    <div className="bg-slate-50 py-10 ">
      <div className=" max-w-7xl mx-auto space-y-5">
        <div className=" flex justify-between items-center">
          <div>
            <h1 className=" text-3xl text-black">Available Study Rooms</h1>
            <p className=" text-gray-500">
              Hand-picked rooms recently added to StudyNook.
            </p>
          </div>
          <Button>view all room</Button>
        </div>
        <div className=" max-w-7xl mx-auto">
          <div className=" grid grid-cols-3 gap-4">
            {allroom.slice(0, 5).map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableRoom;
