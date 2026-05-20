"use client";
import { Button, Chip } from "@heroui/react";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ booking, userId }) => {
  const [localStatus, setLocalStatus] = useState(booking.status);

  const handleCancel = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook/booking/room/${userId}/booking/${booking._id}`,
      {
        next: { revalidate: 0 },
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "cancelled" }),
      },
    );

    const data = await res.json();

    if (data.success) {
      setLocalStatus("cancelled");
      toast.success("your booking cancelled");
      redirect("/my-booking");
    }
  };

  return (
    <div className="flex gap-4 p-4 bg-white border rounded-xl">
      <Image src={booking.image} alt="course" width={120} height={90} />

      <div className="flex flex-col grow justify-between">
        <h3 className="font-bold">{booking.roomName}</h3>

        <div className="flex justify-between items-center">
          <Chip color={localStatus === "cancelled" ? "danger" : "success"}>
            {localStatus}
          </Chip>

          {booking.status === "pending" ? (
            <Button color="danger" onClick={handleCancel}>
              Cancel
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
