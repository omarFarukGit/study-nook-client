import RoomCard from "@/components/RoomCard";
import React from "react";

const AllRoomPage = async () => {
  const res = await fetch("http://localhost:3001/api/study-nook");
  const result = await res.json();
  const allroom = result.data;

  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" grid grid-cols-3 gap-4">
        {allroom.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default AllRoomPage;
