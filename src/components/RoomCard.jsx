import { Button, Calendar, Chip } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
import { Building2, ListOrdered, UsersRound } from "lucide-react";
const RoomCard = ({ destination }) => {
  //   const { _id, imageUrl, price, destinationName, duration, country } =
  //     destination;

  return (
    <div className="border w-65">
      <Image
        className=""
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
        <div className=" flex gap-2">
          <Chip color="accent">wifi</Chip>
          <Chip color="accent">pawerlass</Chip>
          <Chip color="accent">Quiet Zone</Chip>
        </div>
        <Link href={`/all-room/${""}`}>
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
