import BookingCard from "@/components/BookingCard";
import OrderNotFound from "@/components/NotOrder";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook/bookings/${userId}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await res.json();
  const bookings = result.data;

  if (bookings.length === 0) {
    return <OrderNotFound />;
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3">
            Booking Dashboard
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            My Bookings
          </h1>

          <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-2xl">
            View and manage all your booked study rooms, schedules, and booking
            status in one place.
          </p>
        </div>

        {/* Booking List */}
        <div className="flex flex-col gap-5">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <BookingCard booking={booking} userId={userId} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBooking;
