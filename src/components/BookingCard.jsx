"use client";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

const BookingCard = ({ booking }) => {
  const [localStatus, setLocalStatus] = useState(booking.status);

  const handleCancel = async () => {
    const res = await fetch(
      `http://localhost:3001/api/study-nook/booking/room/u005/booking/6a0b00a8ead89afb40c67b34`,
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
