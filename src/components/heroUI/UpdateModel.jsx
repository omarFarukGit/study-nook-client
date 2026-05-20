"use client";

import { useState } from "react";

import {
  FieldError,
  Input,
  Label,
  TextField,
  TextArea,
  Button,
  Card,
  Checkbox,
  Modal,
  Surface,
} from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import { RadioSection } from "./RadioButton";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const amenitiesList = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Air Conditioning",
  "Quiet Zone",
  "Power Outlets",
];

const UpdateModel = ({ room, userId }) => {
  const [amenities, setAmenities] = useState([]);

  const handleAmenities = (value, checked) => {
    if (checked) {
      setAmenities((prev) => [...prev, value]);
    } else {
      setAmenities((prev) => prev.filter((item) => item !== value));
    }
  };
  console.log(amenities);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updateroom = Object.fromEntries(formData.entries());

    const roomData = { updateroom };

    console.log(roomData);
    console.log(room, userId, "update");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook/user-room/${userId}/room/${room._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateroom),
      },
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Room updated sucessfully");
      redirect(`/all-room/${room._id}`);
    }
    console.log(data);
  };

  return (
    <Modal className="w-full">
      <Button variant="ghost">
        <FiExternalLink /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className=" w-3xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Book Quiet Pod 3A</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Pick a date and time slot. Bookings run on the hour.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className=" space-y-8 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <TextField
                        name="roomName"
                        isRequired
                        defaultValue={room.roomName}
                      >
                        <Label>Room Name</Label>
                        <Input className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField
                        name="description"
                        isRequired
                        defaultValue={room.description}
                      >
                        <Label>Description</Label>

                        <TextArea className="rounded-3xl" />

                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField
                        name="image"
                        isRequired
                        defaultValue={room.image}
                      >
                        <Label>Image URL</Label>

                        <Input type="url" className="rounded-2xl" />

                        <FieldError />
                      </TextField>
                    </div>

                    <TextField
                      name="floor"
                      type="number"
                      isRequired
                      defaultValue={room.floor}
                    >
                      <Label>Floor</Label>

                      <Input type="number" className="rounded-2xl" />

                      <FieldError />
                    </TextField>

                    <TextField
                      name="capacity"
                      type="number"
                      isRequired
                      defaultValue={room.capacity}
                    >
                      <Label>Capacity</Label>

                      <Input type="number" className="rounded-2xl" />

                      <FieldError />
                    </TextField>

                    <TextField
                      name="hourlyRate"
                      type="number"
                      isRequired
                      defaultValue={room.hourlyRate}
                    >
                      <Label>Hourly Rate</Label>

                      <Input type="number" className="rounded-2xl" />

                      <FieldError />
                    </TextField>
                  </div>

                  {/* Amenities */}

                  <div className="flex flex-col gap-4">
                    <Label>Amenities</Label>

                    <div className="grid grid-cols-3 gap-2">
                      {amenitiesList.map((item) => (
                        <Checkbox
                          key={item}
                          onChange={(checked) => handleAmenities(item, checked)}
                          defaultSelected={room.amenities?.includes(item)}
                        >
                          <Checkbox.Control>
                            <Checkbox.Indicator />
                          </Checkbox.Control>

                          <Checkbox.Content>
                            <Label>{item}</Label>
                          </Checkbox.Content>
                        </Checkbox>
                      ))}
                    </div>
                  </div>

                  <Button
                    slot={"close"}
                    type="submit"
                    className="rounded-none w-full bg-cyan-500 text-white"
                  >
                    Update Room
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Book Now</Button>
            </Modal.Footer> */}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateModel;
