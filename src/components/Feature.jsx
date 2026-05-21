import { CalendarCheck2, ShieldCheck, LayoutDashboard } from "lucide-react";
import React from "react";

const Feature = () => {
  return (
    <div className="bg-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Why StudyNook?</h1>
          <p className="text-sm md:text-base text-blue-600 max-w-2xl">
            Built around the way real students study — quiet, focused, and on
            your schedule.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 space-y-3 shadow-sm hover:shadow-md transition">
            <CalendarCheck2 className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Easy Booking</h2>
            <p className="text-sm text-gray-700">
              Pick a date, choose an hour, see the cost — done. No
              back-and-forth emails or paperwork.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 space-y-3 shadow-sm hover:shadow-md transition">
            <ShieldCheck className="w-7 h-7 text-green-600" />
            <h2 className="text-xl font-semibold">Conflict-Free Scheduling</h2>
            <p className="text-sm text-gray-700">
              Smart overlap detection prevents double-bookings, so the room you
              reserve is the room you get.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 space-y-3 shadow-sm hover:shadow-md transition">
            <LayoutDashboard className="w-7 h-7 text-purple-600" />
            <h2 className="text-xl font-semibold">Manage Your Listings</h2>
            <p className="text-sm text-gray-700">
              Own a room? List it, set your hourly rate, and keep full control
              from your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
