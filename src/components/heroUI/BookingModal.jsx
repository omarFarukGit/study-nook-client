"use client";

import {
  Badge,
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import { BookingSelect } from "./BookingSelect";

export function BookingModal() {
  return (
    <Modal>
      <Button className={"w-full text-center"} variant="primary">
        <FiExternalLink /> book now
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Book Quiet Pod 3A</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Pick a date and time slot. Bookings run on the hour.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="date" type="date">
                    <Label>Date</Label>
                    <Input />
                  </TextField>
                  <BookingSelect />
                  <TextField className="w-full" name="message">
                    <Label>Special note (optional)</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                  <div className=" flex justify-between items-center p-2 bg-blue-300  rounded-md">
                    <p>Total Cost</p>
                    <p>$5</p>
                  </div>
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
