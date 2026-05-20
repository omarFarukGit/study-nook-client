import { Button, Calendar, Chip } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
import { Building2, ListOrdered, UsersRound } from "lucide-react";
const RoomCard = ({ room }) => {
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

  return (
    <div className="border ">
      <Image
        className=" w-full h-[250px]"
        alt={""}
        src={image}
        height={400}
        width={400}
      />

      <div className="p-2 space-y-3">
        <div className="flex items-center justify-between gap-1">
          <p className=" text-2xl font-bold">{roomName}</p>
          <p>{hourlyRate}</p>
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
            <span>{capacity}</span>
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
        <Link href={`/all-room/${_id}`}>
          <Button variant="ghost" className={"mt-1 text-cyan-500 w-full"}>
            {" "}
            <FiExternalLink /> veiw details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
