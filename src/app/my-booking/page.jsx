import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  const res = await fetch(
    `http://localhost:3001/api/study-nook/bookings/${userId}`,
    { cache: "no-cache" },
  );
  const result = await res.json();
  const bookings = result.data;
  return (
    <div className="max-w-7xl py-4 mx-auto w-full">
      <h1 className=" text-2xl mb-2">My Bookings</h1>
      <div className=" flex flex-col gap-4">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
