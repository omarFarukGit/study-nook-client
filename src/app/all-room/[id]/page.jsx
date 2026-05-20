import { BookingModal } from "@/components/heroUI/BookingModal";
import { UpdateModel } from "@/components/heroUI/UpdateModel";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Button, Chip } from "@heroui/react";
import {
  Building2,
  ClipboardList,
  Link,
  ListOrdered,
  User,
  UsersRound,
} from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import React, { use } from "react";
import { FiExternalLink } from "react-icons/fi";

const RoomDetails = async ({ params }) => {
  const { id } = await params;
  console.log("details", id);
  const res = await fetch(`http://localhost:3001/api/study-nook/${id}`);
  const result = await res.json();
  const room = result.data;
  // console.log(room);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const expectedUser = session?.user?.id;

  const {
    _id,
    userId,
    roomName,
    description,
    image,
    floor,
    capacity,
    hourlyRate,
    amenities,
    ownerName,
    ownerEmail,
    bookingCount,
  } = room;
  console.log("see", expectedUser, userId);
  return (
    <div
      className=" grid grid-cols-4 max-w-7xl mx-auto py-10 gap-5 bg-[#f9f6f1
  ]"
    >
      <div className="border  col-span-2">
        <Image
          className=" w-full h-[60vh]"
          alt={""}
          src={image}
          height={400}
          width={400}
        />

        <div className="p-2 space-y-3">
          <div className="flex items-center justify-between gap-1">
            <h2 className="text-xl font-bold">{roomName}</h2>
            <p>{hourlyRate}/hr</p>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex gap-1 items-center">{description}</div>
            </div>
          </div>
          <div className=" flex gap-2">
            <p className="flex justify-center items-center gap-1">
              <Building2 /> <span>{floor}</span>
            </p>
            <p className="flex justify-center items-center gap-1">
              <UsersRound />
              <span>pepole</span>
            </p>
            <p className="flex justify-center items-center gap-1">
              <ListOrdered />
              <span> booking</span>
            </p>
          </div>
          <p>Amenities</p>
          <div className=" flex gap-2">
            {amenities.map((a, i) => (
              <Chip key={i} color="accent">
                {a}
              </Chip>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <div className="bg-white shadow-2xl  space-y-2.5 p-4 border">
          <div className=" flex flex-col justify-strat gap-2">
            <div className=" flex justify-between">
              <p>{hourlyRate}</p>
              <p>hr</p>
            </div>
            <p className="flex  items-center gap-1">
              <Building2 /> <span>floor</span>
            </p>
            <p className="flex  items-center gap-1">
              <UsersRound />
              <span>pepole</span>
            </p>
            <p className="flex  items-center gap-1">
              <ListOrdered />
              <span> booking</span>
            </p>
          </div>

          <BookingModal />
          {expectedUser === userId ? (
            <div className=" flex gap-2">
              <Button variant="danger">
                <FiExternalLink /> delete
              </Button>
              <UpdateModel />
            </div>
          ) : null}
        </div>
        <div className="bg-white border shadow-2xl space-y-2.5 p-4">
          <h2 className=" text-base">Listed By</h2>
          <div className=" text-base flex justify-start items-center gap2">
            <p>
              <User />
            </p>
            <p>email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
