"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import { BookingSelect } from "./BookingSelect";
import { authClient } from "@/lib/auth-client";

export function BookingModal({ room }) {
  const { data: session } = authClient.useSession();

  const userId = session?.user?.id;
  const hourlyRate = room.hourlyRate;

  // UI state
  const [startTime, setStartTime] = useState(10);
  const [endTime, setEndTime] = useState(12);

  const totalHours = endTime - startTime;
  const totalCost = totalHours * hourlyRate;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const booking = Object.fromEntries(formData.entries());

    const BookData = {
      userId,

      date: booking.date,
      message: booking.message,

      // ✅ body + state mix
      startTime: Number(startTime),
      endTime: Number(endTime),

      hourlyRate,
      totalHours,
      cost: totalCost,
    };

    console.log(BookData);

    const res = await fetch(
      `http://localhost:3001/api/study-nook/booking/room`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(BookData),
      }
    );

    const data = await res.json();
    console.log(data);
  };

  return (
    <Modal>
      <Button className="w-full text-center" variant="primary">
        <FiExternalLink /> book now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Book Quiet Pod 3A</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  {/* DATE */}
                  <TextField name="date" type="date">
                    <Label>Date</Label>
                    <Input />
                  </TextField>

                  {/* START + END */}
                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <Label>Start Time</Label>
                      <select
                        value={startTime}
                        onChange={(e) =>
                          setStartTime(Number(e.target.value))
                        }
                        className="w-full border p-2 rounded-md"
                      >
                        <option value="8">8 AM</option>
                        <option value="9">9 AM</option>
                        <option value="10">10 AM</option>
                        <option value="11">11 AM</option>
                        <option value="12">12 PM</option>
                      </select>
                    </div>

                    <div>
                      <Label>End Time</Label>
                      <select
                        value={endTime}
                        onChange={(e) =>
                          setEndTime(Number(e.target.value))
                        }
                        className="w-full border p-2 rounded-md"
                      >
                        <option value="9">9 AM</option>
                        <option value="10">10 AM</option>
                        <option value="11">11 AM</option>
                        <option value="12">12 PM</option>
                        <option value="13">1 PM</option>
                      </select>
                    </div>

                  </div>

                  {/* MESSAGE */}
                  <TextField name="message">
                    <Label>Special note</Label>
                    <Input />
                  </TextField>

                  {/* UI COST */}
                  <div className="flex justify-between p-2 bg-blue-300 rounded-md">
                    <p>Total Cost ({totalHours} hrs)</p>
                    <p>${totalCost}</p>
                  </div>

                  <Button type="submit">Book Now</Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}