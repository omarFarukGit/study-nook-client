"use client";

import { RadioSection } from "@/components/heroUI/RadioButton";
import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
  Description,
  RadioGroup,
} from "@heroui/react";
import { Radio } from "lucide-react";

const AddRoomPage = () => {
  const { data: session } = authClient.useSession();
  const ownerName = session?.user?.name;
  const ownerEmail = session?.user?.email;
  const userId = session?.user?.id;

  console.log(session);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const room = Object.fromEntries(formData.entries());

    const roomData = {
      userId,
      ownerName,
      ownerEmail,
      ...room,
    };

    const res = await fetch(`http://localhost:3001/api/study-nook`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomData),
    });

    const data = await res.json();
  };

  return (
    <div className="p-5 max-w-7xl mx-auto bg-blue-950">
      <h1 className="text-2xl font-bold">Add Room</h1>
      <p>
        Share your study room with others. You can edit or remove it any time.
      </p>

      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="roomName" isRequired>
                <Label>Room Name</Label>
                <Input placeholder="" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>
            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="image" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Price */}
            <TextField name="floor" type="number" isRequired>
              <Label>Floor </Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>
            <TextField name="cpacity" type="number" isRequired>
              <Label>Cpacity </Label>
              <Input
                type="number"
                placeholder="e.g floor 3rd"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
            <TextField name="hourlyRate" type="number" isRequired>
              <Label>Hourly Rate </Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>
          <div>
            <RadioSection />
          </div>
          {/* Buttons */}

          <Button
            type="submit"
            variant="outline"
            className=" rounded-none w-full bg-cyan-500 text-white"
          >
            Add Room
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddRoomPage;
