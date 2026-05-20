import { BookingModal } from "@/components/heroUI/BookingModal";
import { Button, Chip } from "@heroui/react";
import {
  Building2,
  ClipboardList,
  Link,
  ListOrdered,
  User,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const RoomDetails = () => {
  return (
    <div
      className=" grid grid-cols-4 max-w-7xl mx-auto py-10 gap-5 bg-[#f9f6f1
  ]"
    >
      <div className="border  col-span-2">
        <Image
          className=" w-full h-[60vh]"
          alt={""}
          src={
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80"
          }
          height={400}
          width={400}
        />

        <div className="p-2 space-y-3">
          <div className="flex items-center justify-between gap-1">
            <p>room name</p>
            <p>3/hr</p>
          </div>
          <div className="flex justify-between">
            <div>
              <div>
                <h2 className="text-xl font-bold">roomName</h2>
              </div>
              <div className="flex gap-1 items-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas, libero!
              </div>
            </div>
          </div>
          <div className=" flex gap-2">
            <p className="flex justify-center items-center gap-1">
              <Building2 /> <span>floor</span>
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
            <Chip color="accent">wifi</Chip>
            <Chip color="accent">pawerlass</Chip>
            <Chip color="accent">Quiet Zone</Chip>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <div className="bg-white shadow-2xl  space-y-2.5 p-4 border">
          <div className=" flex flex-col justify-strat gap-2">
            <div className=" flex justify-between">
              <p>5</p>
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
