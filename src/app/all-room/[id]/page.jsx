import { BookingModal } from "@/components/heroUI/BookingModal";
import { DeleteModal } from "@/components/heroUI/DeleteRoomModal";
import UpdateModel from "@/components/heroUI/UpdateModel";
import { auth } from "@/lib/auth";
import { Building2, ListOrdered, User, UsersRound } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { Chip } from "@heroui/react";

const RoomDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook/${id}`,
    {
      cache: "no-store",
    },
  );

  const result = await res.json();
  const room = result.data;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const expectedUser = session?.user?.id;

  const {
    _id,
    userId,
    roomName,
    description,
    image,
    floor,
    capacity,
    hourlyRate,
    amenities,
    ownerName,
    ownerEmail,
    bookingCount,
  } = room;

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden border shadow-sm">
            {/* Image */}
            <div className="relative w-full h-[260px] sm:h-[400px] lg:h-[550px]">
              <Image src={image} alt={roomName} fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="p-5 md:p-8 space-y-6">
              {/* Title */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {roomName}
                  </h1>

                  <p className="text-slate-500 mt-2 text-sm md:text-base">
                    Quiet and comfortable study environment for focused work.
                  </p>
                </div>

                <div className="bg-black text-white px-5 py-3 rounded-2xl text-center min-w-[120px]">
                  <p className="text-2xl font-bold">${hourlyRate}</p>
                  <p className="text-sm text-slate-300">Per Hour</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  Description
                </h2>

                <p className="text-slate-600 leading-relaxed">{description}</p>
              </div>

              {/* Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border rounded-2xl p-4 flex items-center gap-3 bg-slate-50">
                  <Building2 className="text-slate-700" size={22} />
                  <div>
                    <p className="text-sm text-slate-500">Floor</p>
                    <p className="font-semibold">{floor}</p>
                  </div>
                </div>

                <div className="border rounded-2xl p-4 flex items-center gap-3 bg-slate-50">
                  <UsersRound className="text-slate-700" size={22} />
                  <div>
                    <p className="text-sm text-slate-500">Capacity</p>
                    <p className="font-semibold">{capacity} People</p>
                  </div>
                </div>

                <div className="border rounded-2xl p-4 flex items-center gap-3 bg-slate-50">
                  <ListOrdered className="text-slate-700" size={22} />
                  <div>
                    <p className="text-sm text-slate-500">Bookings</p>
                    <p className="font-semibold">{bookingCount}</p>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  Amenities
                </h2>

                <div className="flex flex-wrap gap-3">
                  {amenities.map((a, i) => (
                    <Chip
                      key={i}
                      className="px-3 py-5 bg-slate-100 text-slate-700 border"
                    >
                      {a}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-3xl border shadow-sm p-5 md:p-6 sticky top-24">
              <div className="flex items-center justify-between border-b pb-4 mb-5">
                <div>
                  <p className="text-slate-500 text-sm">Price</p>
                  <h2 className="text-3xl font-bold text-slate-900">
                    ${hourlyRate}
                  </h2>
                </div>

                <span className="text-slate-500">/ hour</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-slate-700">
                  <Building2 size={20} />
                  <span>Floor {floor}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <UsersRound size={20} />
                  <span>{capacity} People Capacity</span>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <ListOrdered size={20} />
                  <span>{bookingCount} Total Bookings</span>
                </div>
              </div>

              {/* Booking Button */}
              <BookingModal room={room} />

              {/* Owner Action */}
              {expectedUser === userId && (
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <DeleteModal id={_id} userId={userId} />
                  <UpdateModel userId={userId} room={room} />
                </div>
              )}
            </div>

            {/* Owner Info */}
            <div className="bg-white rounded-3xl border shadow-sm p-5 md:p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Listed By
              </h2>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center">
                  <User size={20} className="text-slate-700" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">{ownerName}</p>

                  <p className="text-sm text-slate-500">{ownerEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;

export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook/${id}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  const room = data.data;

  return {
    title: room.roomName,
  };
};
