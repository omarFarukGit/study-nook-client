"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  TextArea,
  Button,
  Card,
  Checkbox,
} from "@heroui/react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const amenitiesList = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Air Conditioning",
  "Quiet Zone",
  "Power Outlets",
];

const AddRoomPage = () => {
  const { data: session } = authClient.useSession();

  const ownerName = session?.user?.name;
  const ownerEmail = session?.user?.email;
  const userId = session?.user?.id;

  const [amenities, setAmenities] = useState([]);

  const handleAmenities = (value, checked) => {
    if (checked) {
      setAmenities((prev) => [...prev, value]);
    } else {
      setAmenities((prev) => prev.filter((item) => item !== value));
    }
  };
  // console.log(amenities);
  // console.log(process.env.NEXT_PUBLIC_API_URL);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const room = Object.fromEntries(formData.entries());

    const roomData = {
      userId,
      ownerName,
      ownerEmail,
      amenities,
      ...room,
    };

    console.log(roomData);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(roomData),
      },
    );

    const data = await res.json();
    if (data.success) {
      toast.success("room added sucessfully");
      redirect("/my-listing");
    }
    console.log(data);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="p-5 max-w-4xl mx-auto space-y-4 ">
        <h1 className="text-2xl font-bold text-white">Add Room</h1>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-center items-center">
          <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <TextField name="roomName" isRequired>
                  <Label className=" text-white">Room Name</Label>
                  <Input className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label className=" text-white">Description</Label>

                  <TextArea className="rounded-3xl" />

                  <FieldError />
                </TextField>
              </div>

              <div className="md:col-span-2">
                <TextField name="image" isRequired>
                  <Label className=" text-white">Image URL</Label>

                  <Input type="url" className="rounded-2xl" />

                  <FieldError />
                </TextField>
              </div>

              <TextField name="floor" type="number" isRequired>
                <Label className=" text-white">Floor</Label>

                <Input type="number" className="rounded-2xl" />

                <FieldError />
              </TextField>

              <TextField name="capacity" type="number" isRequired>
                <Label className=" text-white">Capacity</Label>

                <Input type="number" className="rounded-2xl" />

                <FieldError />
              </TextField>

              <TextField name="hourlyRate" type="number" isRequired>
                <Label className=" text-white">Hourly Rate</Label>

                <Input type="number" className="rounded-2xl" />

                <FieldError />
              </TextField>
            </div>

            {/* Amenities */}

            <div className="flex flex-col gap-4">
              <Label className=" text-white">Amenities</Label>

              <div className="grid grid-cols-3 gap-2">
                {amenitiesList.map((item) => (
                  <Checkbox
                    key={item}
                    onChange={(checked) => handleAmenities(item, checked)}
                  >
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>

                    <Checkbox.Content>
                      <Label className=" text-white">{item}</Label>
                    </Checkbox.Content>
                  </Checkbox>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              className="rounded-none w-full bg-cyan-500 text-white"
            >
              Add Room
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddRoomPage;
