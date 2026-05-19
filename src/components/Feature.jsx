import { ClipboardList } from "lucide-react";
import React from "react";

const Feature = () => {
  return (
    <div className=" bg-gray-300 backdrop-blur-lg py-10">
      <div className=" max-w-7xl mx-auto">
        <div className=" flex flex-col justify-center items-center space-y-3">
          <h1 className=" text-3xl font-bold">Why StudyNook?</h1>
          <p className=" text-blue-400 ">
            Built around the way real students study — quiet, focused, and on
            your schedule.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row gap-2 py-4">
          <div className="bg-white/70 backdrop-blur-md space-y-2.5 p-4">
            <div>
              <ClipboardList />
            </div>
            <h2 className=" text-2xl">Easy Booking</h2>
            <p className=" text-base">
              Pick a date, choose an hour, see the cost — done. No
              back-and-forth emails or paperwork.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md space-y-2.5 p-4">
            <div>
              <ClipboardList />
            </div>

            <h2 className=" text-2xl"> Conflict-Free Scheduling</h2>
            <p className=" text-base">
              Smart overlap detection prevents double-bookings, so the room you
              reserve is the room you get.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md space-y-2.5 p-4">
            <div>
              <ClipboardList />
            </div>

            <h2 className=" text-2xl"> Manage Your Listings</h2>
            <p className=" text-base">
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
