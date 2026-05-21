import { Search, Clock, CheckCircle2 } from "lucide-react";
import React from "react";

const Works = () => {
  return (
    <div className="bg-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col justify-center items-center text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">How It Works</h1>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            From browsing to booked in under a minute.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 space-y-3 text-center shadow-sm hover:shadow-md transition">
            <Search className="mx-auto w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Browse Rooms</h2>
            <p className="text-sm text-gray-600">
              Filter by floor, capacity, amenities, or hourly rate to find your
              fit.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 space-y-3 text-center shadow-sm hover:shadow-md transition">
            <Clock className="mx-auto w-7 h-7 text-orange-500" />
            <h2 className="text-xl font-semibold">Pick a Time</h2>
            <p className="text-sm text-gray-600">
              Choose a date and an open time slot — we’ll prevent any conflicts.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 space-y-3 text-center shadow-sm hover:shadow-md transition">
            <CheckCircle2 className="mx-auto w-7 h-7 text-green-600" />
            <h2 className="text-xl font-semibold">Study Peacefully</h2>
            <p className="text-sm text-gray-600">
              Get a confirmation, show up, and focus. Manage everything from
              your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
