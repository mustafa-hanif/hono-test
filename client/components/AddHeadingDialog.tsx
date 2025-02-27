import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { client } from "@/lib/api";
import { Form } from "@/lib/form";
import { useMyZero } from "@/lib/zeroDb";
import { useParams, useRouter } from "@tanstack/react-router";
import { nanoid } from "nanoid";
import { useState } from "react";

export function AddHeadingDialog() {
  const z = useMyZero();
  const [dialog, setDialog] = useState(false);
  const router = useRouter();
  const { dayId } = useParams({ strict: false });
  const path = window.location.pathname
  const searchParams = new URLSearchParams(window.location.search);
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Button type="button">Add Heading</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form
          id="formattribute"
          handleSubmit={async (values) => {
            z.mutate.headings.insert({
              name: values["name"]!,
              heading_number: Number(values["heading_number"]!),
              day: dayId!,
              id: nanoid(),
              created: new Date().getTime(),
              updated: new Date().getTime(),
              active: true
            })
            // await client.POST("/headings/create", {
            //   body: {
            //     data: {
            //       name: values["name"]!,
            //       heading_number: values["heading_number"]!
            //     }
            //   }
            // });
            // router.invalidate()
            setDialog(false);
          }}
        >
          <>
            <DialogHeader>
              <DialogTitle>Add Heading</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Heading Name
                </Label>
                <Textarea
                  name="name"
                  id="name"
                  placeholder="Heading name"
                  className="col-span-3"
                />
                <Label htmlFor="heading_number" className="text-right">
                  Heading Number
                </Label>
                <Input
                  name="heading_number"
                  id="heading_number"
                  placeholder="Heading Number"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
