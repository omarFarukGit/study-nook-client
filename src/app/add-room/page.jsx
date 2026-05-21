"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  TextArea,
  Button,
  Card,
  Checkbox,
} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Building2 } from "lucide-react";

const amenitiesList = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Air Conditioning",
  "Quiet Zone",
  "Power Outlets",
];

const AddRoomPage = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const ownerName = session?.user?.name;
  const ownerEmail = session?.user?.email;
  const userId = session?.user?.id;

  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAmenities = (value, checked) => {
    if (checked) {
      setAmenities((prev) => [...prev, value]);
    } else {
      setAmenities((prev) => prev.filter((item) => item !== value));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const room = Object.fromEntries(formData.entries());

    const roomData = {
      userId,
      ownerName,
      ownerEmail,
      amenities,
      ...room,
    };

    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/study-nook`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData.token}`,
          },
          body: JSON.stringify(roomData),
        },
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Room added successfully");
        router.push("/my-listing");
      } else {
        toast.error("Failed to add room");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-5">
            <Building2 className="text-cyan-400" size={30} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Add New Study Room
          </h1>

          <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Create a quiet and productive learning space for students and teams.
          </p>
        </div>

        {/* Form Card */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <form onSubmit={onSubmit} className="p-5 sm:p-8 md:p-10 space-y-8">
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Room Name */}
              <div className="md:col-span-2">
                <TextField name="roomName" isRequired>
                  <Label className="text-white mb-2">Room Name</Label>

                  <Input
                    placeholder="Enter room name"
                    className="rounded-2xl"
                  />

                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label className="text-white mb-2">Room Description</Label>

                  <TextArea
                    placeholder="Describe your study room..."
                    className="rounded-2xl min-h-32"
                  />

                  <FieldError />
                </TextField>
              </div>

              {/* Image */}
              <div className="md:col-span-2">
                <TextField name="image" isRequired>
                  <Label className="text-white mb-2">Image URL</Label>

                  <Input
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    className="rounded-2xl"
                  />

                  <FieldError />
                </TextField>
              </div>

              {/* Floor */}
              <TextField name="floor" type="number" isRequired>
                <Label className="text-white mb-2">Floor</Label>

                <Input
                  type="number"
                  placeholder="Enter floor number"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>

              {/* Capacity */}
              <TextField name="capacity" type="number" isRequired>
                <Label className="text-white mb-2">Capacity</Label>

                <Input
                  type="number"
                  placeholder="People capacity"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>

              {/* Hourly Rate */}
              <div className="md:col-span-2">
                <TextField name="hourlyRate" type="number" isRequired>
                  <Label className="text-white mb-2">Hourly Rate</Label>

                  <Input
                    type="number"
                    placeholder="Enter hourly price"
                    className="rounded-2xl"
                  />

                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-4">
              <Label className="text-white text-base">Room Amenities</Label>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {amenitiesList.map((item) => (
                  <div
                    key={item}
                    className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hover:bg-white/10 transition-all"
                  >
                    <Checkbox
                      onChange={(checked) => handleAmenities(item, checked)}
                    >
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>

                      <Checkbox.Content>
                        <Label className="text-white cursor-pointer">
                          {item}
                        </Label>
                      </Checkbox.Content>
                    </Checkbox>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              isDisabled={loading}
              className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white text-base font-semibold transition-all"
            >
              {loading ? "Adding Room..." : "Add Room"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default AddRoomPage;
