import { ClipboardList } from "lucide-react";
import React from "react";

const Works = () => {
  return (
    <div className=" bg-gray-200 py-10">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-3xl font-bold">How It Works</h1>
          <p className="text-base">
            From browsing to booked in under a minute.
          </p>
        </div>
        <div>
          <div className=" flex flex-col md:flex-row gap-2 py-4">
            <div className="bg-white/70 backdrop-blur-md space-y-2.5 p-4 flex flex-col justify-center items-center text-center">
              <div>
                <ClipboardList />
              </div>
              <h2 className=" text-2xl">Browse Rooms</h2>
              <p className=" text-base">
                Filter by floor, capacity, amenities, or hourly rate to find
                your fit.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md space-y-2.5 p-4 flex flex-col justify-center items-center text-center">
              <div>
                <ClipboardList />
              </div>

              <h2 className=" text-2xl"> Pick a Time</h2>
              <p className=" text-base">
                Choose a date and an open time slot — well prevent any
                conflicts.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md space-y-2.5 p-4 flex flex-col justify-center items-center text-center">
              <div>
                <ClipboardList />
              </div>
              <h2 className=" text-2xl"> Study Peacefully</h2>
              <p className=" text-base">
                Get a confirmation, show up, and focus. Manage everything from
                your dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
