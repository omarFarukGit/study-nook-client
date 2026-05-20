"use client";

import { authClient } from "@/lib/auth-client";
// import { CircleCheck, CircleInfo } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { Delete, Trash } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { toast } from "react-toastify";

export function DeleteModal({ id, userId }) {
  const router = useRouter();
  console.log(userId, id);
  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:3001/api/study-nook/user-room/${userId}/room/${id}`,
      {
        method: "DELETE",
      },
    ).then((res) => res.json());

    if (res.success) {
      toast.success("your room delted sucessfully");
      router.push("/my-listing");
    }

    console.log(result);
  };
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Modal>
          <Button variant="danger">
            <FiExternalLink /> delete
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="sm:max-w-[360px]">
                <Modal.Header>
                  <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    {/* <CircleInfo className="size-5" /> */}
                    <Trash />
                  </Modal.Icon>
                  <Modal.Heading>Are You seure Delete Room</Modal.Heading>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Click either button below - both have <code></code> and will
                    close the modal automatically.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>
                  <Button onClick={handleDelete} slot="close">
                    Confirm
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </div>
    </div>
  );
}
