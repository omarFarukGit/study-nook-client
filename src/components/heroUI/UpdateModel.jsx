"use client";

import {
  Badge,
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import { BookingSelect } from "./BookingSelect";
import { RadioSection } from "./RadioButton";

export function UpdateModel() {
  return (
    <Modal className="w-full">
      <Button variant='ghost'>
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
                <form onSubmit={""} className=" space-y-8 ">
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
                      <TextField name="imageUrl" isRequired>
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
                    <TextField name="price" type="number" isRequired>
                      <Label>Floor </Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                    <TextField name="price" type="number" isRequired>
                      <Label>Cpacity </Label>
                      <Input
                        type="number"
                        placeholder="e.g floor 3rd"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                    <TextField name="price" type="number" isRequired>
                      <Label>Hourly Rate </Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
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
                    Update Room
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Book Now</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
