"use client";

import { useState } from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

/* ---------- TIME FORMAT ---------- */
const formatTime = (hour) => {
  const period = hour >= 12 ? "PM" : "AM";
  const formatted = hour % 12 === 0 ? 12 : hour % 12;
  return `${formatted} ${period}`;
};

export function BookingModal({ room }) {
  const { data: session } = authClient.useSession();

  const userId = session?.user?.id;
  const hourlyRate = room.hourlyRate;

  const [startTime, setStartTime] = useState(10);
  const [endTime, setEndTime] = useState(11);

  const totalHours = endTime - startTime;
  const totalCost = totalHours * hourlyRate;

  /* ---------- START CHANGE HANDLER ---------- */
  const handleStartChange = (value) => {
    const start = Number(value);
    setStartTime(start);

    // auto fix end time
    if (endTime <= start) {
      setEndTime(start + 1);
    }
  };

  /* ---------- SUBMIT ---------- */
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user) {
      toast.error("Please login first");
      redirect("/login");
      return;
    }

    // safety validation
    if (endTime <= startTime) {
      toast.error("Invalid time selection");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const booking = Object.fromEntries(formData.entries());

    const BookData = {
      userId,
      date: booking.date,
      message: booking.message,
      startTime,
      endTime,
      image: room.image,
      roomName: room.roomName,
      hourlyRate,
      totalHours,
      cost: totalCost,
    };
 const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook/booking/room`,
      {
        method: "POST",
        headers: { "content-type": "application/json",
          authorization: `Bearer ${tokenData.token}`
         },
        body: JSON.stringify(BookData),
      },
    );

    const data = await res.json();

    if (!data.success) {
      toast.error(data.message);
      return;
    }

    toast.success("Booking successful");
    redirect("/my-booking");
  };

  return (
    <Modal>
      <Button className="w-full">
        <FiExternalLink /> Book Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Book Room</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* DATE */}
                  <TextField
                    isRequired
                    name="date"
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  >
                    <Label>Date</Label>
                    <Input />
                  </TextField>

                  {/* TIME */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* START */}
                    <div>
                      <Label>Start Time</Label>
                      <select
                        value={startTime}
                        onChange={(e) => handleStartChange(e.target.value)}
                        className="w-full border p-2 rounded-md"
                      >
                        {[8, 9, 10, 11, 12].map((t) => (
                          <option key={t} value={t}>
                            {formatTime(t)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* END (ONLY VALID OPTIONS) */}
                    <div>
                      <Label>End Time</Label>
                      <select
                        value={endTime}
                        onChange={(e) => setEndTime(Number(e.target.value))}
                        className="w-full border p-2 rounded-md"
                      >
                        {[9, 10, 11, 12, 13, 14]
                          .filter((t) => t > startTime)
                          .map((t) => (
                            <option key={t} value={t}>
                              {formatTime(t)}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <TextField name="message">
                    <Label>Note (optional)</Label>
                    <Input />
                  </TextField>

                  {/* COST */}
                  <div className="flex justify-between p-3 bg-blue-100 rounded-md text-sm">
                    <p>{totalHours} hrs</p>
                    <p className="font-bold">${totalCost}</p>
                  </div>

                  {/* TIME PREVIEW */}
                  <div className="text-sm text-gray-600">
                    {formatTime(startTime)} - {formatTime(endTime)}
                  </div>

                  <Button type="submit" color="primary">
                    Confirm Booking
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
