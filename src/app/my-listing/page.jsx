import RoomCard from "@/components/RoomCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyListing = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  const res = await fetch(
    `http://localhost:3001/api/study-nook/user-room/${userId}`,
  );
  const result = await res.json();
  const allroom = result.data;

  return (
    <div className=" max-w-7xl mx-auto space-y-4">
      <h1 className="text-2xl">My added room listing</h1>
      <div className=" grid grid-cols-3 gap-4">
        {allroom.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default MyListing;
