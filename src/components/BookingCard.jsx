import Image from "next/image";
import { Chip } from "@heroui/react";
// import CancelEnrollButton from "./CancelEnrollButton";

const BookingCard = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex gap-4 p-4 bg-white border rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
          alt="course"
          width={120}
          height={90}
          className="rounded-lg"
        />

        <div className="flex flex-col grow justify-between ">
          <div>
            <h3 className="font-bold">
              Mastering React - From Beginner to Pro
            </h3>
            <p className="text-sm text-slate-500">Enrolled On:</p>
          </div>

          <div className="flex justify-between items-center">
            <Chip color="success" size="sm">
              Active
            </Chip>

            {/* <CancelEnrollButton /> */}
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
