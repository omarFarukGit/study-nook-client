import Link from "next/link";
import { Button } from "@heroui/react";
import { PackageX } from "lucide-react";

const OrderNotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border shadow-xl rounded-2xl p-8 text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-red-100 p-4 rounded-full">
            <PackageX className="size-12 text-red-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold">Booking Not Found</h1>

        <p className="text-gray-500">
          We couldn&apos;t find any Bokings associated with your account.
        </p>

        <div className="pt-2">
          <Link href="/all-room">
            <Button color="primary" className="w-full">
              Browse Study Rooms
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderNotFound;
