import RoomCard from "@/components/RoomCard";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const AllRoomPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/study-nook`, {
    cache: "no-store",
  });

  const result = await res.json();
  const allroom = result.data;

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3">
              StudyNook Collection
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              All Study Rooms
            </h1>

            <p className="text-slate-500 mt-3 max-w-2xl text-sm sm:text-base">
              Explore comfortable, quiet, and productive study rooms designed
              for focused learning and teamwork.
            </p>
          </div>

          <Link href="/">
            <Button
              radius="full"
              className="bg-black text-white px-6 w-full sm:w-auto"
            >
              Back To Home
            </Button>
          </Link>
        </div>

        {/* Rooms */}
        {allroom?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {allroom.map((room) => (
              <div
                key={room._id}
                className="hover:-translate-y-1 transition-all duration-300"
              >
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-slate-300 rounded-3xl py-20 px-6 text-center">
            <h2 className="text-2xl font-semibold text-slate-800">
              No Rooms Found
            </h2>

            <p className="text-slate-500 mt-3 max-w-md mx-auto">
              There are currently no study rooms available. Please check again
              later or create a new room.
            </p>

            <Link href="/create-room">
              <Button radius="full" className="mt-6 bg-black text-white px-6">
                Create Room
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllRoomPage;
