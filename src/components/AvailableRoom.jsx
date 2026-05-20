import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import RoomCard from "./RoomCard";

const AvailableRoom = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/study-nook`, {
    cache: "no-store",
  });

  const result = await res.json();
  const allroom = result.data;

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3">
              StudyNook Rooms
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Available Study Rooms
            </h1>

            <p className="text-slate-500 mt-3 text-sm sm:text-base">
              Hand-picked quiet and productive study spaces recently added to
              StudyNook.
            </p>
          </div>

          <Link href="/rooms">
            <Button
              radius="full"
              className="bg-black text-white px-6 w-full sm:w-auto"
            >
              View All Rooms
            </Button>
          </Link>
        </div>

        {/* Room Grid */}
        {allroom?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {allroom.slice(0, 6).map((room) => (
              <div
                key={room._id}
                className="hover:-translate-y-1 transition-all duration-300"
              >
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-slate-300 rounded-3xl bg-white py-16 px-6 text-center">
            <h2 className="text-2xl font-semibold text-slate-800">
              No Rooms Available
            </h2>

            <p className="text-slate-500 mt-3 max-w-md mx-auto">
              There are no study rooms available right now. Please check back
              later.
            </p>

            <Link href="/create-room">
              <Button radius="full" className="mt-6 bg-black text-white px-6">
                Add New Room
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailableRoom;
