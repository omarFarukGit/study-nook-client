"use client";

import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Calendar, Clock } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const BookingCard = ({ booking, userId }) => {
  const [localStatus, setLocalStatus] = useState(booking.status);
  const router = useRouter();

  const handleCancel = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook/booking/room/${userId}/booking/${booking._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify({ status: "cancelled" }),
      },
    );

    const data = await res.json();

    if (data.success) {
      setLocalStatus("cancelled");
      toast.success("Your booking cancelled");
      router.refresh(); // better than redirect for UI update
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
      {/* Image */}
      <Image
        src={booking.image}
        alt="room"
        width={140}
        height={110}
        className="rounded-lg object-cover w-full sm:w-[140px] h-[110px]"
      />

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 space-y-3">
        {/* Title */}
        <h3 className="font-bold text-lg">{booking.roomName}</h3>

        {/* Date + Time */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>{new Date(booking.date).toLocaleDateString("en-GB")}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-orange-500" />
            <span>
              {booking.startTime} Am - {booking.endTime} Pm
            </span>
          </div>
        </div>

        {/* Status + Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <Chip color={localStatus === "cancelled" ? "danger" : "success"}>
            {localStatus}
          </Chip>

          {localStatus === "pending" && (
            <Button color="danger" onClick={handleCancel}>
              Cancel
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
