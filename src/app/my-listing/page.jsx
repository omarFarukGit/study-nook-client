import NotListing from "@/components/NotListing";
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
    `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook/user-room/${userId}`,
    {
      cache: "no-store",
    },
  );

  const result = await res.json();
  const allroom = result.data;

  if (allroom.length === 0) {
    return <NotListing />;
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3">
            Dashboard
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            My Room Listings
          </h1>

          <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-2xl">
            Manage all your listed study rooms, update room details, and track
            your available spaces.
          </p>
        </div>

        {/* Room Grid */}
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
      </div>
    </section>
  );
};

export default MyListing;
