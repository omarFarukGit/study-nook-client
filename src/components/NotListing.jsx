"use client";

import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotListing() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-100">
          <Plus className="w-7 h-7 text-gray-600" />
        </div>

        {/* Text */}
        <h2 className="mt-5 text-2xl font-semibold text-gray-900">
          No listings yet
        </h2>
        <p className="mt-2 text-gray-500">
          Got a quiet room? List it and start earning.
        </p>

        {/* Button */}
        <Button
          onPress={() => router.push("/add-room")}
          className="mt-6 bg-black text-white px-6 py-2 rounded-xl"
        >
          Create your first listing
        </Button>
      </div>
    </div>
  );
}
